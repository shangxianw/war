var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var home;
(function (home) {
    var DemoPanelData = (function (_super) {
        __extends(DemoPanelData, _super);
        function DemoPanelData() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DemoPanelData.prototype.init = function () {
            this.resGroup = "preload";
            this.layer = LayerManager.Ins().Panel;
        };
        DemoPanelData.prototype.destroy = function () {
        };
        DemoPanelData.prototype.packData1 = function (name) {
            this.name = "wsx";
        };
        DemoPanelData.prototype.packData2 = function (name) {
            this.name = "www";
        };
        return DemoPanelData;
    }(ViewData));
    home.DemoPanelData = DemoPanelData;
    __reflect(DemoPanelData.prototype, "home.DemoPanelData");
    // 只有状态，不操作数据。如果要修改数据，也要在Data中写一个方法，然后执行该方法
    var DemoPanel = (function (_super) {
        __extends(DemoPanel, _super);
        function DemoPanel() {
            return _super.call(this, "DemoPanelSkin") || this;
        }
        DemoPanel.prototype.init = function () {
            this.viewInfo = new DemoPanelData();
            this.info = this.viewInfo;
        };
        DemoPanel.prototype.destroy = function () {
        };
        // private a:number = 1;
        DemoPanel.prototype.initData = function (type) {
            if (type == 1)
                this.info.packData1("wsx");
            else if (type == 2)
                this.info.packData2("www");
            this.nameLb.text = this.info.name;
            // if(this.a == 1)
            // 	this.testImg.source = "bg_card_di_0_png";
            // else if(this.a == 2)
            // 	this.testImg.source = "bg_card_di_1_png";
            // else if(this.a == 3)
            // 	this.testImg.source = "bg_card_di_3_png";
            // else if(this.a == 4)
            // 	this.testImg.source = "bg_card_di_4_png";
            // this.a++;
        };
        return DemoPanel;
    }(ViewBase));
    home.DemoPanel = DemoPanel;
    __reflect(DemoPanel.prototype, "home.DemoPanel");
})(home || (home = {}));
//# sourceMappingURL=DemoPanel.js.map