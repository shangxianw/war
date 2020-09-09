import xlrd
import json
import os

class DaoCfg(object):
    def __init__(self):
        super(DaoCfg, self).__init__()
        self.init()
    
    def init(self):
        self.oriDir             = "./xls/"                             # 数据源文件夹
        self.tarClientDir       = "./config/client/"                   # 客户端的目标文件夹
        self.tarServerDir       = "./config/server/"                   # 服务端的目标文件夹
        self.supportType        = [".xls"]                             # 只处理源文件夹中支持的格式类型的文件
        self.tarFileType        = ".json"                              # 目标文件后缀

        self.keyNum             = [0, 1]                               # 键的数量（单元格坐标）
        self.tableName          = [1, 1]                               # 表名（单元格坐标）
        self.realyLine          = 6                                    # 从这行开始才是真正的数据
        self.intType            = "int"                                # 以下为定义单元格数据类型
        self.strType            = "string"
        self.arrType            = "array"
        self.twoArrType         = "array2"
        self.threeArrType       = "array3"
        self.anyType            = "any"

        self.scLine             = 2                                    # 定义导出为客户端/服务端类型的行(从0开始)
        self.typeLine           = 3                                    # 定义单元格数据类型的行(从0开始)
        self.keyLine            = 4                                    # 定义键值的行(从0开始)
        self.descLine           = 5                                    # 描述行(不做处理)

        self.cellTypeEmpty      = 0                                    # 以下为单元格数据的类型
        self.cellTypeString     = 1
        self.cellTypeNumber     = 2
        self.cellTypeBoolean    = 4
    
    def destroy(self):
        pass
    
    def start(self):
        filePath     = ""
        oriFileArray = os.listdir(self.oriDir)
        for file in oriFileArray:
            filePath = self.oriDir + file
            if self.isFileSupport(filePath) is True:
                self.openExcel(filePath)
    
    def openExcel(self, filePath):
        excel          = xlrd.open_workbook(filePath)
        sheetNameArray = excel.sheet_names()
        sheet          = None
        for sheetName in sheetNameArray:                               # 遍历每个sheet
            sheet = excel.sheet_by_name(sheetName)
            self.packJson(sheet)
            # print(filePath + "   " + sheetName)
    
    def packJson(self, sheet):
        clientJson = {}
        serverJson = {}
        keyNum = 0
        try:
            keyNum     = int(sheet.cell(self.keyNum[1], self.keyNum[0]).value)
        except(BaseException):
            return
        for col, colValue in enumerate(sheet.col_values(0)):           # 行
            tarObjClient = clientJson
            tarObjServer = serverJson
            keyObj = {}
            for row, rowValue in enumerate(sheet.row_values(0)):       # 列
                if col < self.realyLine:
                    break
                if row < keyNum:                                       # key
                    key   = self.getKey(sheet, self.keyLine,row)
                    value = self.getValue(sheet, col, row)
                    keyObj[key] = value
                    if tarObjClient.get(value) == None:
                        tarObjClient[value] = {}
                        tarObjServer[value] = {}
                    tarObjClient = tarObjClient[value]
                    tarObjServer = tarObjServer[value]
                else:
                    sc    = self.getKey(sheet, self.scLine, row)
                    scArr = [self.isDaoClient(sc), self.isDaoServer(sc)]
                    if scArr[0] is True:
                        self.addKeyValueToJson(keyObj, tarObjClient)
                    if scArr[1] is True:
                        self.addKeyValueToJson(keyObj, tarObjServer)

                    key   = self.getKey(sheet, self.keyLine,row)
                    value = self.getValue(sheet, col, row)
                    vType = self.getKey(sheet, self.typeLine, row)
                    ############################################################################
                    # 以下为不同单元格类型的处理方式，新增类型则在下面添加新判断即可
                    if vType == self.intType:
                        if scArr[0] is True:
                            tarObjClient[key] = value
                        if scArr[1] is True:
                            tarObjServer[key] = value
                    
                    elif vType == self.strType:
                        if scArr[0] is True:
                            tarObjClient[key] = value
                        if scArr[1] is True:
                            tarObjServer[key] = value
                    # 一维数组
                    elif vType == self.arrType:
                        if scArr[0] is True:
                            if tarObjClient.get(key) == None:
                                tarObjClient[key] = []
                            if value != "":
                                tarObjClient[key].append(value)
                        if scArr[1] is True:
                            if tarObjServer.get(key) == None:
                                tarObjServer[key] = []
                            if value != "":
                                tarObjServer[key].append(value)
                    # 子项有两个值的二维数组
                    elif vType == self.twoArrType:
                        if scArr[0] is True:
                            if tarObjClient.get(key) == None:
                                tarObjClient[key] = []
                            if value != "":
                                self.writeToTwoArray(tarObjClient[key], value, 2)
                        if scArr[1] is True:
                            if tarObjServer.get(key) == None:
                                tarObjServer[key] = []
                            if value != "":
                                self.writeToTwoArray(tarObjServer[key], value, 2)
                    # 子项有三个值的二维数组
                    elif vType == self.threeArrType:
                        if scArr[0] is True:
                            if tarObjClient.get(key) == None:
                                tarObjClient[key] = []
                            if value != "":
                                self.writeToTwoArray(tarObjClient[key], value, 3)
                        if scArr[1] is True:
                            if tarObjServer.get(key) == None:
                                tarObjServer[key] = []
                            if value != "":
                                self.writeToTwoArray(tarObjServer[key], value, 3)

        self.write2JSON(sheet, clientJson, serverJson)
    
    def write2JSON(self, sheet, clientJson, serverJson):
        jsonName     = sheet.cell(self.tableName[1], self.tableName[0]).value
        tarClientFile = self.tarClientDir + jsonName + self.tarFileType
        tarServerFile = self.tarServerDir + jsonName + self.tarFileType

        jsonFile = open(tarClientFile, "w", encoding='utf-8')
        jsonFile.write(json.dumps(clientJson, indent=4, ensure_ascii=False))  # indent=4 缩进处理 ensure_ascii 不使用这种格式存储
        jsonFile.close()

        jsonFile = open(tarServerFile, "w", encoding="utf-8")
        jsonFile.write(json.dumps(serverJson, indent=4, ensure_ascii=False))
        jsonFile.close()
        print("写入 " + jsonName + " 完成")
    
    def removeAllFile(self):
        cDir = os.listdir(self.tarClientDir)
        sDir = os.listdir(self.tarServerDir)

        filePath = ""
        for file in cDir:
            filePath = self.tarClientDir + file
            os.remove(filePath)
        for file in sDir:
            filePath = self.tarServerDir + file
            os.remove(filePath)
    
    # ---------------------------------------------------------------------- Tools
    # 将键也写入到实际数据中
    def addKeyValueToJson(self, keyObj, tarClient):
        for key in keyObj:
            tarClient[key] = keyObj[key]

    # 写入二维数组
    def writeToTwoArray(self, array, value, itemArrayLen=2):
        l = len(array)
        if l <= 0:
            array.append([value])
        else:
            lastItem = array[l-1]
            if len(lastItem) == itemArrayLen:
                array.append([value])
            else:
                lastItem.append(value)

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