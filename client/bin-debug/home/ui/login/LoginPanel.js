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
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.resGroup = ["war_preload", "common_loading"];
            _this.layer = LayerManager.Ins().Panel;
            return _this;
        }
        LoginPanelData.prototype.destroy = function () {
        };
        return LoginPanelData;
    }(DataBase));
    home.LoginPanelData = LoginPanelData;
    __reflect(LoginPanelData.prototype, "home.LoginPanelData", ["IViewData"]);
    var LoginPanel = (function (_super) {
        __extends(LoginPanel, _super);
        function LoginPanel() {
            return _super.call(this, "LoginPanelSkin") || this;
        }
        LoginPanel.prototype.init = function () {
        };
        LoginPanel.prototype.destroy = function () {
            if (this.info != null)
                this.info.destroyAll();
            this.loginBtn.destroy();
        };
        LoginPanel.prototype.initData = function (data) {
        };
        LoginPanel.prototype.initView = function () {
            this.accountInput.text = "wsx";
            this.addEvent(this.loginBtn, egret.TouchEvent.TOUCH_TAP, this.OnLoginTap, this);
            this.test();
        };
        LoginPanel.prototype.OnLoginTap = function (e) {
            var _this = this;
            var flag = Utils.CheckNameValide(this.accountInput.text);
            if (flag[0] == false) {
                alert(flag[1]);
                return;
            }
            net.NetLogin.C2SLogin(this.accountInput.text, function () {
                ViewManager.Ins().close(_this);
                ViewManager.Ins().open(home.LoadingPanel);
                1;
            }, this);
        };
        LoginPanel.prototype.test = function () {
            var head = new home.HeadIcon();
            head.info.packData(1, 1);
            this.addChild(head);
        };
        return LoginPanel;
    }(ViewBase));
    home.LoginPanel = LoginPanel;
    __reflect(LoginPanel.prototype, "home.LoginPanel");
})(home || (home = {}));
//# sourceMappingURL=LoginPanel.js.map