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
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.resGroup = [];
            _this.layer = LayerManager.Ins().panel;
            return _this;
        }
        DemoPanelData.prototype.init = function () {
        };
        DemoPanelData.prototype.destroy = function () {
        };
        return DemoPanelData;
    }(ViewData));
    home.DemoPanelData = DemoPanelData;
    __reflect(DemoPanelData.prototype, "home.DemoPanelData");
    var DemoPanel = (function (_super) {
        __extends(DemoPanel, _super);
        function DemoPanel() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DemoPanel.prototype.init = function () {
            this.skinName = "DemoPanelSkin";
        };
        DemoPanel.prototype.open = function () {
            // this.demo1.visible = false
            // this.demo1.visible = true;
        };
        DemoPanel.prototype.close = function () {
        };
        return DemoPanel;
    }(ViewBase));
    home.DemoPanel = DemoPanel;
    __reflect(DemoPanel.prototype, "home.DemoPanel");
})(home || (home = {}));
//# sourceMappingURL=DemoPanel.js.map