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
    var HomePanelData = (function (_super) {
        __extends(HomePanelData, _super);
        function HomePanelData() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        HomePanelData.prototype.init = function () {
            this.resGroup = [];
            this.layer = LayerManager.Ins().panel;
        };
        HomePanelData.prototype.destroy = function () {
        };
        return HomePanelData;
    }(ViewData));
    home.HomePanelData = HomePanelData;
    __reflect(HomePanelData.prototype, "home.HomePanelData");
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
        };
        HomePanel.prototype.OnFightTap = function (e) {
            SceneManager.Ins().changeScene(SceneType.War);
        };
        return HomePanel;
    }(ViewBase));
    home.HomePanel = HomePanel;
    __reflect(HomePanel.prototype, "home.HomePanel");
})(home || (home = {}));
//# sourceMappingURL=HomePanel.js.map