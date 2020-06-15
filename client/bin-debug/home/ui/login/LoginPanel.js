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
            this.resGroup = "";
            this.layer = LayerManager.Ins().Panel;
        };
        LoginPanelData.prototype.destroy = function () {
        };
        LoginPanelData.prototype.packData = function () {
        };
        return LoginPanelData;
    }(ViewData));
    home.LoginPanelData = LoginPanelData;
    __reflect(LoginPanelData.prototype, "home.LoginPanelData");
    var LoginPanel = (function (_super) {
        __extends(LoginPanel, _super);
        function LoginPanel() {
            return _super.call(this, "LoginPanelSkin", LoginPanelData) || this;
        }
        LoginPanel.prototype.init = function () {
        };
        LoginPanel.prototype.destroy = function () {
            if (this.info != null)
                this.info.destroyAll();
            this.loginBtn.destroy();
        };
        LoginPanel.prototype.initData = function (data) {
            this.info.packData();
        };
        LoginPanel.prototype.initView = function () {
            this.accountInput.text = "";
            this.addEvent(this.loginBtn, egret.TouchEvent.TOUCH_TAP, this.OnLoginTap, this);
        };
        LoginPanel.prototype.OnLoginTap = function (e) {
            var _this = this;
            var flag = home.HomeDataMgr.Ins().checkNameValide(this.accountInput.text);
            if (flag[0] == false) {
                alert(flag[1]);
                return;
            }
            net.NetLogin.C2SLogin(this.accountInput.text, function () {
                ViewManager.Ins().close(_this);
                ViewManager.Ins().open(home.LoadingPanel);
            }, this);
        };
        return LoginPanel;
    }(ViewBase));
    home.LoginPanel = LoginPanel;
    __reflect(LoginPanel.prototype, "home.LoginPanel");
})(home || (home = {}));
//# sourceMappingURL=LoginPanel.js.map