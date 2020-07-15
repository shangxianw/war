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
    var MenuPanelData = (function (_super) {
        __extends(MenuPanelData, _super);
        function MenuPanelData() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        MenuPanelData.prototype.init = function () {
            this.resGroup = [];
            this.layer = LayerManager.Ins().panel;
        };
        MenuPanelData.prototype.destroy = function () {
        };
        return MenuPanelData;
    }(ViewData));
    home.MenuPanelData = MenuPanelData;
    __reflect(MenuPanelData.prototype, "home.MenuPanelData");
    var MenuPanel = (function (_super) {
        __extends(MenuPanel, _super);
        function MenuPanel() {
            var _this = _super.call(this) || this;
            _this.skinName = "MenuPanelSkin";
            return _this;
        }
        MenuPanel.prototype.destroy = function () {
            this.startBtn.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.OnStarTap, this);
        };
        MenuPanel.prototype.open = function () {
            this.startBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.OnStarTap, this);
        };
        MenuPanel.prototype.OnStarTap = function (e) {
            ViewManager.Ins().close(this);
            ViewManager.Ins().open(war.WarPanel);
        };
        return MenuPanel;
    }(ViewBase));
    home.MenuPanel = MenuPanel;
    __reflect(MenuPanel.prototype, "home.MenuPanel");
})(home || (home = {}));
//# sourceMappingURL=MenuPanel.js.map