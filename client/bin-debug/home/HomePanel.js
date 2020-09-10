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
var HomePanel = (function (_super) {
    __extends(HomePanel, _super);
    function HomePanel() {
        var _this = _super.call(this) || this;
        _this.skinName = "HomePanelSkin";
        return _this;
    }
    HomePanel.prototype.init = function () {
    };
    HomePanel.prototype.destroy = function () {
        this.fightBtn.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.OnFightTap, this);
    };
    HomePanel.prototype.open = function () {
        this.fightBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.OnFightTap, this);
        // this.showFrame()
    };
    HomePanel.prototype.OnFightTap = function (e) {
        SceneManager.Ins().changeScene(SceneType.War);
    };
    return HomePanel;
}(ViewBase));
__reflect(HomePanel.prototype, "HomePanel");
//# sourceMappingURL=HomePanel.js.map