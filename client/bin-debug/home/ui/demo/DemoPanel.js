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
var DemoPanel = (function (_super) {
    __extends(DemoPanel, _super);
    function DemoPanel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DemoPanel.prototype.init = function () {
        this.skinName = "DemoPanelSkin";
    };
    DemoPanel.prototype.initView = function (name, skill) {
        var _this = this;
        this.addTimer(1000, function (a, b) {
            _this.haha.text = a + "  " + b;
            return true;
        }, this);
        this.haha.text = name;
        this.addEvent(this, egret.TouchEvent.TOUCH_TAP, this.closeSelf, this);
    };
    return DemoPanel;
}(ViewBase));
__reflect(DemoPanel.prototype, "DemoPanel");
//# sourceMappingURL=DemoPanel.js.map