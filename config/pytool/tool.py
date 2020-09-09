import xlrd
import json
import os

class DaoCfg(object):
    def __init__(self):
        super(DaoCfg, self).__init__()
        self.init()
    
    def init(self):
        self.oriDir             = "./xls/"                              # 源文件夹
        self.tarClientDir       = "./config/client/"                    # 客户端的目标文件夹
        self.tarServerDir       = "./config/server/"                    # 服务端的目标文件夹
        self.supportType        = [".xls"]                             # 只处理源文件夹中支持的格式类型的文件
        self.tarFileType        = ".json"                              # 目标文件后缀

        self.keyNum             = [0,0]                                # 键的数量（单元格坐标）
        self.realyLine          = 5                                    # 从这行开始才是真正的数据
        self.intType            = "int"                                # 以下为定义单元格数据类型
        self.strType            = "string"
        self.arrType            = "array"
        self.twoArrTypeKey      = "a"
        self.twoArrTypeValue    = "b"

        self.scLine             = 1                                    # 定义导出为客户端/服务端类型的行(从0开始)
        self.typeLine           = 2                                    # 定义单元格数据类型的行(从0开始)
        self.keyLine            = 3                                    # 定义键值的行(从0开始)

        self.cellTypeEmpty      = 0                                    # 以下为单元格数据的类型
        self.cellTypeString     = 1
        self.cellTypeNumber     = 2
        self.cellTypeBoolean    = 4
    
    def destroy(self):
        pass
    
    def start(self):