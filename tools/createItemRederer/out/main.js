var Fs = require('fs');
var CreatePanel = /** @class */ (function () {
    function CreatePanel() {
        this.init();
    }
    CreatePanel.prototype.init = function () {
        this.fileName = "demo.ts";
        this.saveDir = "././";
        process.on('exit', this.OnErr);
        process.stdin.setEncoding('utf8');
        process.stdin.on('data', this.OnData);
    };
    CreatePanel.prototype.destroy = function () {
    };
    CreatePanel.prototype.start = function () {
        process.stdout.write("请输入item名称：");
    };
    CreatePanel.prototype.OnData = function (input) {
        var s = input.trim();
        if (s == null || s == "") {
            this.start();
        }
        else {
            this.fileName = "" + s;
            this.saveFile();
        }
    };
    CreatePanel.prototype.OnErr = function (code) {
        console.log(code);
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