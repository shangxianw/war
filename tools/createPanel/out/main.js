var Fs = require('fs');
var CreatePanel = /** @class */ (function () {
    function CreatePanel() {
        this.init();
    }
    CreatePanel.prototype.init = function () {
        this.fileName = "demo.ts";
        this.saveDir = "D:\\wsx\\war\\tools\\createPanel\\out\\";
    };
    CreatePanel.prototype.destroy = function () {
    };
    CreatePanel.prototype.start = function () {
        var _this = this;
        process.on('exit', function (code) { console.log(code); });
        process.stdin.setEncoding('utf8');
        process.stdout.write("请输入面板名称：");
        process.stdin.on('data', function (input) {
            var s = input.trim();
            _this.fileName = s + ".ts";
            _this.saveFile();
        });
    };
    CreatePanel.prototype.saveFile = function () {
        var path = this.saveDir + this.fileName;
        console.log("正在打包");
        Fs.writeFileSync(path, str);
        process.exit(1);
    };
    CreatePanel.prototype.closeProcess = function () {
    };
    return CreatePanel;
}());
var cp = new CreatePanel();
cp.start();
var str = "\nmodule home\n{\n\texport class DemoPanelData extends ViewData\n\t{\n\t\tprotected init()\n\t\t{\n\t\t\tthis.resGroup = \"preload\";\n\t\t\tthis.layer = LayerManager.Ins().Panel;\n\t\t}\n\n\t\tprotected destroy()\n\t\t{\n\t\t\t\n\t\t}\n\n\t\tpublic name:string;\n\t\tpublic packData1(name:string)\n\t\t{\n\t\t\tthis.name = \"wsx\"\n\t\t}\n\n\t\tpublic packData2(name:string)\n\t\t{\n\t\t\tthis.name = \"www\";\n\t\t}\n\t}\n\n\t// \u53EA\u6709\u72B6\u6001\uFF0C\u4E0D\u64CD\u4F5C\u6570\u636E\u3002\u5982\u679C\u8981\u4FEE\u6539\u6570\u636E\uFF0C\u4E5F\u8981\u5728Data\u4E2D\u5199\u4E00\u4E2A\u65B9\u6CD5\uFF0C\u7136\u540E\u6267\u884C\u8BE5\u65B9\u6CD5\n\texport class DemoPanel extends ViewBase\n\t{\n\t\tpublic nameLb:eui.Label;\n\t\tpublic ageLb:eui.Label;\n\t\tprivate testImg:eui.Image;\n\n\t\tpublic info:DemoPanelData;\n\t\tpublic constructor()\n\t\t{\n\t\t\tsuper(\"DemoPanelSkin\");\t\n\t\t}\n\n\t\tprotected init()\n\t\t{\n\t\t\tthis.viewInfo = new DemoPanelData();\n\t\t\tthis.info = this.viewInfo as any;\n\t\t}\n\n\t\tpublic initData(type:number)\n\t\t{\n\t\t\tif(type == 1)\n\t\t\t\tthis.info.packData1(\"wsx\");\n\t\t\telse if(type == 2)\n\t\t\t\tthis.info.packData2(\"www\");\n\n\t\t\tthis.nameLb.text = this.info.name;\n\t\t}\n\n\t\tpublic initView()\n\t\t{\n\n\t\t}\n\t}\n}\n";
//# sourceMappingURL=main.js.map