import xlrd
import json
import os

class DaoCfg(object):
    def __init__(self):
        super(DaoCfg, self).__init__()
        self.init()
    
    def init(self):
        self.oriDir             = "./xls/"                             # 数据源文件夹
        self.tarClientDir       = "./interface/client/"                # 客户端的目标文件夹
        self.tarServerDir       = "./interface/server/"                # 服务端的目标文件夹
        self.supportType        = [".xls"]                             # 只处理源文件夹中支持的格式类型的文件

        self.keyNum             = [0, 1]                               # 键的数量（单元格坐标）
        self.tableName          = [1, 1]                               # 表名（单元格坐标）
        self.intType            = "int"                                # 以下为定义单元格数据类型
        self.strType            = "string"
        self.arrType            = "array"
        self.twoArrType         = "array2"
        self.threeArrType       = "array3"
        self.anyType            = "any"

        self.scLine             = 2                                    # 定义导出为客户端/服务端类型的行(从0开始)
        self.typeLine           = 3                                    # 定义单元格数据类型的行(从0开始)
        self.keyLine            = 4                                    # 定义键值的行(从0开始)

        self.writedJson         = []                                   # 记录已经处理过的表，如果出现同名，会在此报错
        self.sameTableArray     = []                                   # 保存相同的表格
        self.errorTabelArray    = []                                   # 保存出错表格
    
    def destroy(self):
        pass
    
    def start(self):
        filePath     = ""
        oriFileArray = os.listdir(self.oriDir)
        for file in oriFileArray:
            filePath = self.oriDir + file
            if self.isFileSupport(filePath) is True:
                self.openExcel(filePath)
        self.printWarnArray()
    
    def openExcel(self, filePath):
        excel          = xlrd.open_workbook(filePath)
        sheetNameArray = excel.sheet_names()
        sheet          = None
        for sheetName in sheetNameArray:                               # 遍历每个sheet
            sheet = excel.sheet_by_name(sheetName)
            if self.isValidTabe(filePath, sheetName) is False:
                continue
            if self.hasSameTabName(filePath, sheetName) is True:
                continue
            self.packJson(sheet)
    
    def packJson(self, sheet):
        clientContent = "interface [fileName]\n{\n" + "[content]" + "}"
        tabName = "I" + sheet.cell(self.tableName[1], self.tableName[0]).value.capitalize()
        clientContent = clientContent.replace("[fileName]", tabName)

        content = ""
        for row, rowValue in enumerate(sheet.row_values(0)):       # 列
            template = "    [key]:[type];\n"
            sc    = self.getKey(sheet, self.scLine, row)
            scArr = [self.isDaoClient(sc), self.isDaoServer(sc)]
            key   = self.getKey(sheet, self.keyLine, row)
            vType = self.getKey(sheet, self.typeLine, row)
            ############################################################################
            if vType == self.intType:
                if scArr[0] is True:
                    template = template.replace("[key]", key)
                    template = template.replace("[type]", "number")
                    content += template
        clientContent = clientContent.replace("[content]", content)
        # print(clientContent)
        self.write2Ts(sheet, clientContent, tabName)
    
    def write2Ts(self, sheet, clientContent, fileName):
        tarClientFile = self.tarClientDir + fileName + ".ts"

        jsonFile = open(tarClientFile, "w", encoding='utf-8')
        jsonFile.write(clientContent)
        jsonFile.close()
        print("写入 " + fileName + " 完成")
    
    def removeAllFile(self):
        cDir = os.listdir(self.tarClientDir)

        filePath = ""
        for file in cDir:
            filePath = self.tarClientDir + file
            os.remove(filePath)
    
    # ---------------------------------------------------------------------- Tools
    # 将键也写入到实际数据中
    def addKeyValueToJson(self, keyObj, tarClient):
        for key in keyObj:
            tarClient[key] = keyObj[key]
    
    # 检验是否为合法表格(因为有一些是用来做说明文档之类):
    def isValidTabe(self, filePath, sheetName):
        excel = xlrd.open_workbook(filePath)
        sheet = excel.sheet_by_name(sheetName)
        try:
            keyNum    = int(sheet.cell(self.keyNum[1], self.keyNum[0]).value)
            if keyNum <= 0:
                errorTabel = filePath + " " + sheetName
                self.errorTabelArray.append(errorTabel)
                return False
            tableName = sheet.cell(self.tableName[1], self.tableName[0]).value
            if tableName == "":
                errorTabel = filePath + " " + sheetName
                self.errorTabelArray.append(errorTabel)
                return False
            return True
        except(BaseException):
            errorTabel = filePath + " " + sheetName
            self.errorTabelArray.append(errorTabel)
            return False


    # 检验是否同名
    def hasSameTabName(self, filePath, sheetName):
        excel = xlrd.open_workbook(filePath)
        sheet = excel.sheet_by_name(sheetName)
        tableName     = sheet.cell(self.tableName[1], self.tableName[0]).value
        tabDir = filePath + "_" + sheetName + "_" + tableName
        for item in self.writedJson:
            b = item.split("_")
            writedTable = b[len(b)-1]
            if writedTable == tableName:
                self.sameTableArray.append(tabDir + " 和 " + item)
                return True
        self.writedJson.append(tabDir)
        return False
    
    def printWarnArray(self):
        for item in self.errorTabelArray:
            print("==========\n存在异常表格 " + item)
        for item in self.sameTableArray:
            print("==========\n存在相同表格 " + item)

    # 判断该文件是否为支持文件
    def isFileSupport(self, filePath):
        fileType = os.path.splitext(filePath)[1]
        for sType in self.supportType:
            if sType == fileType:
                return True
        return False
    
    def getValue(self, sheet, col, row):
        vType = sheet.cell(self.typeLine, row).value
        value = sheet.cell(col, row).value
        if vType == self.intType and value != "":
            return int(value)
        if vType == self.arrType or vType == self.twoArrType or vType == self.threeArrType:
            t = sheet.cell_type(col, row)
            if t == self.cellTypeNumber:
                return int(value)
        return value
    
    def getKey(self, sheet, col, row):
        value = sheet.cell(col, row).value
        return value
    
    # 判断是否为到客户端类型
    def isDaoClient(self, daoType: str):
        return daoType.find("c") >= 0

    # 判断是否为到服务端类型
    def isDaoServer(self, daoType: str):
        return daoType.find("s") >= 0

D = DaoCfg()
D.removeAllFile()
D.start()
D.destroy()