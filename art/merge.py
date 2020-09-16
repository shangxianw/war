import os
from PIL import ImageFont
from PIL import Image
from PIL import ImageDraw

class Merge(object):
    def __init__(self):
        super(Merge, self).__init__()
        self.init()
    
    def init(self):
        self.oriDir = "./资源/resource/ui/"
        self.tarDir = "./导出资源/"
        self.maxWidth = 1024
        self.canvasWidth = 0
        self.canvasHeight = 0

        self.hasImgDirArray = [] # 记录该文件夹下是否有非文件夹

        # 属性名
        self.name = "name"
        self.x = "x"
        self.y = "y"
        self.w = "w"
        self.h = "h"
        self.offX = "offX"
        self.offY= "offY"
        self.sourceW = "sourceW"
        self.sourceH = "sourceH"
        self.texture = "texture"
    
    def start(self):
        self.openFolder(self.oriDir)
        self.startMerge()
    
    def openFolder(self, pFilePath):
        fileArray = os.listdir(pFilePath)
        for file in fileArray:
            filePath = pFilePath + file
            if os.path.isdir(filePath) is True:
                filePath += "/"
                self.openFolder(filePath)
            else:
                if self.hasSamePFilePath(pFilePath) is False:
                    self.hasImgDirArray.append(pFilePath)
    
    def startMerge(self):
        for dir in self.hasImgDirArray:
            array = self.initAllImgInfo(dir)
            if len(array) > 0:
                self.calcCanvasByMaxWidth(array)
                self.save(array, dir)
    
    # 初始化每张图片的信息并保存在数组中
    def initAllImgInfo(self, dir):
        fileArray = os.listdir(dir)
        imgInfoArray = []
        for file in fileArray:
            path = dir + file
            if os.path.isfile(path) is False:
                continue
            filename, type = file.split(".")
            if type == "png" or type == "jpg":
                imgInfo = {}
                texture = Image.open(path)
                imgInfo[self.texture] = texture
                imgInfo[self.name] = filename
                imgInfo[self.x] = 0
                imgInfo[self.y] = 0
                imgInfo[self.w] = texture.size[0]
                imgInfo[self.h] = texture.size[1]
                imgInfo[self.offX] = 0
                imgInfo[self.offY] = 0
                imgInfo[self.sourceW] = texture.size[0]
                imgInfo[self.sourceH] = texture.size[1]
                imgInfoArray.append(imgInfo)
        return imgInfoArray
    
    # 计算每张图片的位置 & 画布宽高
    def calcCanvasByMaxWidth(self, imgInfoArray):
        # 将图片的高度从大到小排序
        for i in range(len(imgInfoArray)):
            for j in range(len(imgInfoArray)):
                if j <= i:
                    continue
                curr = imgInfoArray[i]
                compare = imgInfoArray[j]
                if curr[self.h] >= compare[self.h]:
                    continue
                tmp = imgInfoArray[i]
                imgInfoArray[i] = imgInfoArray[j]
                imgInfoArray[j] = tmp
        self.canvasWidth = 0
        self.canvasHeight = 0
        maxx = 0
        maxy = 0
        for i in range(len(imgInfoArray)):
            curr = imgInfoArray[i]
            curr[self.x] = maxx
            curr[self.y] = maxy

            maxx = curr[self.x] + curr[self.w]

            if maxx > self.canvasWidth:
                self.canvasWidth = maxx
            if curr[self.y] + curr[self.h] > self.canvasHeight:
                self.canvasHeight = curr[self.y] + curr[self.h]
            
            if maxx > self.maxWidth:
                maxx = 0
                maxy = self.canvasHeight


    def save(self, imgInfoArray, dir):
        image = Image.new("RGBA", (self.canvasWidth, self.canvasHeight), (255, 0, 0, 0))
        jsonContent =  '{\n'
        jsonContent += '    "file":"[fileName]",\n'
        jsonContent += '    "frames":\n'
        jsonContent += '    {\n'
        jsonContent += '[content]'
        jsonContent += '    }\n'
        jsonContent += '}'
        content = ""
        for imgInfo in imgInfoArray:
            texture = imgInfo[self.texture]
            image.paste(texture, box=(imgInfo[self.x], imgInfo[self.y]))
            tmp = '        "[name]":{"x":[x], "y":[y], "w":[w], "h":[h], "offX":[offX], "offY":[offY], "sourceW":[sourceW], "sourceH":[sourceH]},\n'
            tmp = tmp.replace("[name]", imgInfo[self.name])
            tmp = tmp.replace("[x]", str(imgInfo[self.x]))
            tmp = tmp.replace("[y]", str(imgInfo[self.y]))
            tmp = tmp.replace("[w]", str(imgInfo[self.w]))
            tmp = tmp.replace("[h]", str(imgInfo[self.h]))
            tmp = tmp.replace("[offX]", str(imgInfo[self.offX]))
            tmp = tmp.replace("[offY]", str(imgInfo[self.offY]))
            tmp = tmp.replace("[sourceW]", str(imgInfo[self.sourceW]))
            tmp = tmp.replace("[sourceH]", str(imgInfo[self.sourceH]))
            content += tmp
        jsonContent = jsonContent.replace("[content]", content)
        jsonContent = jsonContent.replace(",\n    }\n", "\n    }\n")
        # print(jsonContent)
    
        dir = dir.replace(self.oriDir, self.tarDir)
        array = dir.split("/")
        savaDir = dir + "../"
        saveName = array[len(array)-2]
        pngName = savaDir + saveName + ".png"
        jsonName = savaDir + saveName + ".json"
        jsonContent = jsonContent.replace("[fileName]", saveName + ".png")

        if not os.path.exists(savaDir):
            os.makedirs(savaDir)
        image.save(pngName)
        with open(jsonName, "w", encoding="utf-8") as f:
            f.write(jsonContent)

    def destroy(self):
        pass
    
    def hasSamePFilePath(self, newPath):
        try:
            self.hasImgDirArray.index(newPath)
            return True
        except(BaseException):
            return False
    
    def removeAllFile(self):
        pass

M = Merge()
M.start()
M.destroy()
# img = Image.open("bg_card_di_1.png")
# img2 = Image.open("heroicon_10010.png")
# color = [255, 0, 0, 0]
# image = Image.new('RGBA', (1024, 1024), (color[0],color[1],color[2], color[3]))
# image.paste(img, (0, 0), img) 
# image.paste(img2, (100, 100), img2) 
# image.save("2.png")

# image = Image.new("RGB", (20, 20), (255, 255, 255))
# im = Image.new("RGB", (10, 10), (0, 0, 0))
# image.paste(im, box=(0, 0))
# image.save("demo.jpg")
# image = Image.open("demo.jpg")
# for i in range(20):
#     for j in range(20):
#         a = image.getpixel((i, j))
#         print(a)