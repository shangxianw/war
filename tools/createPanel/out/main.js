var Fs = require('fs');
var CreatePanel = /** @class */ (function () {
    function CreatePanel() {
        this.init();
    }
    CreatePanel.prototype.init = function () {
        this.fileName = "demo.ts";
        // this.saveDir = "C:\\Users\\User\\Desktop\\";
        this.saveDir = "./";
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
            _this.fileName = "" + s;
            _this.saveFile();
        });
    };
    CreatePanel.prototype.saveFile = function () {
        var path = this.saveDir + this.fileName + ".ts";
        console.log("正在打包");
        var ch = "XXXXXXX";
        var reg = "/" + ch + "/g";
        var rxp = new RegExp("XXXXXXXPanel", 'g');
        var tarStr = str.replace(eval(reg), this.fileName);
        Fs.writeFileSync(path, tarStr);
        process.exit(1);
    };
    CreatePanel.prototype.closeProcess = function () {
    };
    return CreatePanel;
}());
var cp = new CreatePanel();
cp.start();
var str = "\nmodule home\n{\n\texport class XXXXXXXData extends ViewData\n\t{\n\t\tprotected init()\n\t\t{\n\t\t\tthis.resGroup = \"\";\n\t\t\tthis.layer = LayerManager.Ins().Panel;\n\t\t}\n\n\t\tprotected destroy()\n\t\t{\n\t\t\t\n\t\t}\n\n\t\tpublic packData()\n\t\t{\n\n\t\t}\n\t}\n\n\texport class XXXXXXX extends ViewBase\n\t{\n\t\tpublic info:XXXXXXXData;\n\t\tpublic constructor()\n\t\t{\n\t\t\tsuper(\"XXXXXXXSkin\");\t\n\t\t}\n\n\t\tprotected init()\n\t\t{\n\t\t\t\n\t\t}\n\n\t\tprotected destroy()\n\t\t{\n\t\t\tif(this.info != null)\n\t\t\t\tthis.info.destroyAll();\n\t\t}\n\n\t\tpublic initData(data:any)\n\t\t{\n\t\t\tthis.info.packData();\n\t\t}\n\n\t\tpublic initView()\n\t\t{\n\t\t\t\n\t\t}\n\t}\n}\n";
//# sourceMappingURL=main.js.map