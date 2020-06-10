className = input("in something");
# className = "demo";

s1 = ""

s1 += "module game \n"
s1 += "{\n"
s1 += "    export class " + className + "C extends UICtrlBase\n"
s1 += "    {\n"
s1 += "        public constructor()\n"
s1 += "        {\n"
s1 += "            super();\n"
s1 += "        }\n"
s1 += "\n"
s1 += "        ////////////////////////////////////////////////////////////////////////////////////////////////\n"
s1 += "        //声明界面要引用的资源组 一定要有 公共资源不需要引用\n"
s1 += "        protected GetResGroup():string[]\n"
s1 += "        {\n"
s1 += "             return [];\n"
s1 += "        }\n"
s1 += "        //声明父窗口 可以没有 默认是panelLayer\n"
s1 += "        protected GetParent():any\n"
s1 += "        {\n"
s1 += "            return GameLayerManager.gameLayer().panelLayer;\n"
s1 += "        }\n"
s1 += "        //声明要实例化的EXML类 一定要有!!!\n"
s1 += "        protected GetPanelClass():any\n"
s1 += "        {\n"
s1 += "            return " + className + ";\n"
s1 += "        }\n"
s1 += "        /////////////////////////////////////////////////////////////////////////////////////////////////////\n"
s1 += "\n"
s1 += "        public OnMessage(itype:number, data:any): void\n"
s1 += "        {\n"
s1 += "            super.OnMessage(itype, data);\n"
s1 += "            if(itype == PanelMessageType.OnShow)\n"
s1 += "            {\n"
s1 += "                this.ShowUI(false, 0, 0, 0, false, true, data);\n"
s1 += "            }\n"
s1 += "            else if(itype == PanelMessageType.OnHide)\n"
s1 += "            {\n"
s1 += "                this.ClosePanel(4);\n"
s1 += "            }\n"
s1 += "            else if(itype == PanelMessageType.OnDestroy)\n"
s1 += "            {\n"
s1 += "                this.DestroyPanel();\n"
s1 += "            }\n"
s1 += "        }\n"
s1 += "\n"
s1 += "        protected Destroy()\n"
s1 += "        {\n"
s1 += "\n"
s1 += "        }\n"
s1 += "    }\n"
s1 += "}"

classFileName = "C:/Users/User/Desktop/" + className + "C.ts";
with open(classFileName, "w", encoding="utf-8") as f:
	f.write(s1);
################################################################################
## 生成面板文件
s2 =  ""
s2 += "module game\n"
s2 += "{\n"
s2 += "    export class " + className + "Data extends DataBase\n"
s2 += "    {\n"
s2 += "        public Destroy()\n"
s2 += "        {\n"
s2 += "            super.Destroy();\n"
s2 += "        }\n"
s2 += "\n"
s2 += "        public PackData()\n"
s2 += "        {\n"
s2 += "            return this;\n"
s2 += "        }\n"
s2 += "    }\n"
s2 += "\n"
s2 += "    export class " + className + " extends UIComponentBase\n"
s2 += "    {\n"
s2 += "        public info:" + className + "Data;\n"
s2 += "        public constructor()\n"
s2 += "        {\n"
s2 += "            super('" + className + "Skin', true);\n"
s2 += "        }\n"
s2 += "\n"
s2 += "        public InitData(data:" + className + "Data)\n"
s2 += "        {\n"
s2 += "            if(data == null)\n"
s2 += "                return;\n"
s2 += "            this.info = data;\n"
s2 += "        }\n"
s2 += "\n"
s2 += "        protected Destroy()\n"
s2 += "        {\n"
s2 += "            if(this.info != null)\n"
s2 += "                this.info.Destroy();\n"
s2 += "        }\n"
s2 += "    }\n"
s2 += "}\n"

classFileName = "C:/Users/User/Desktop/" + className + ".ts";
with open(classFileName, "w", encoding="utf-8") as f:
	f.write(s2);

################################################################################
## 在UIManager添加配置
tarPath = "D:/work/code/client/EgerPro_5_2_9/src/ui/UIManager.ts";
newUIManagerString = "";
isAdd = False;
with open(tarPath, "r", encoding="utf-8") as f:
	lineArray = f.readlines();
	for line in lineArray:
		if line.find("//----这一行代码不要删除--------------------") >= 0:
			newUIManagerString += "                case PanelTypeConst." + className +": return new game." + className + "C();\n";
			isAdd = True;
		newUIManagerString += line;

with open(tarPath, "w", encoding="utf-8") as f:
	f.write(newUIManagerString);
print(newUIManagerString);


################################################################################
## 在CommonDefine添加配置
tarPath = "D:/work/code/client/EgerPro_5_2_9/src/public/const/CommonDefine.ts";
newCommonDefineString = "";
isAdd = False;
with open(tarPath, "r", encoding="utf-8") as f:
	lineArray = f.readlines();
	index = 0;
	for line in lineArray:
		if line.find("//----这一行代码不要删除--------------------") >= 0:
			strArray = lineArray[index-1].split(" = ");
			numStr = str(int(strArray[1].split(",")[0]) + 1);
			print(numStr);
			newCommonDefineString += "    " + className +" = " + numStr + ",\n";
			isAdd = True;
		newCommonDefineString += line;
		index += 1;

with open(tarPath, "w", encoding="utf-8") as f:
	f.write(newCommonDefineString);
# print(newUIManagerString);