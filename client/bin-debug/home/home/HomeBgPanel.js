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
var HomeBgPanel = (function (_super) {
    __extends(HomeBgPanel, _super);
    function HomeBgPanel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HomeBgPanel.prototype.init = function () {
        this.skinName = "HomeBgPanelSkin";
    };
    HomeBgPanel.prototype.initView = function () {
        // this.bg.source = `bg_main_jpg`
        var _this = this;
        RES.getResAsync("bg_main_jpg", function () {
            _this.bg.source = "bg_main_jpg";
        }, this);
    };
    HomeBgPanel.prototype.destroy = function () {
    };
    return HomeBgPanel;
}(ViewBase));
__reflect(HomeBgPanel.prototype, "HomeBgPanel");
//# sourceMappingURL=HomeBgPanel.js.map