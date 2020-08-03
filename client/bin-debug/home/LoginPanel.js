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
    var LoginPanelData = (function (_super) {
        __extends(LoginPanelData, _super);
        function LoginPanelData() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        LoginPanelData.prototype.init = function () {
            this.resGroup = [];
            this.layer = LayerManager.Ins().panel;
        };
        LoginPanelData.prototype.destroy = function () {
        };
        return LoginPanelData;
    }(ViewData));
    home.LoginPanelData = LoginPanelData;
    __reflect(LoginPanelData.prototype, "home.LoginPanelData");
    var LoginPanel = (function (_super) {
        __extends(LoginPanel, _super);
        function LoginPanel() {
            var _this = _super.call(this) || this;
            _this.skinName = "LoginPanelSkin";
            return _this;
        }
        LoginPanel.prototype.init = function () {
        };
        LoginPanel.prototype.destroy = function () {
            this.loginBtn.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.OnLoginTap, this);
        };
        LoginPanel.prototype.open = function () {
            this.loginBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.OnLoginTap, this);
        };
        LoginPanel.prototype.OnLoginTap = function (e) {
            ViewManager.Ins().close(this);
            ViewManager.Ins().open(home.HomePanel);
        };
        return LoginPanel;
    }(ViewBase));
    home.LoginPanel = LoginPanel;
    __reflect(LoginPanel.prototype, "home.LoginPanel");
})(home || (home = {}));
//# sourceMappingURL=LoginPanel.js.map