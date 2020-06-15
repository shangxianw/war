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
    var LoadingPanelData = (function (_super) {
        __extends(LoadingPanelData, _super);
        function LoadingPanelData() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        LoadingPanelData.prototype.init = function () {
            this.resGroup = "preload";
            this.layer = LayerManager.Ins().Panel;
        };
        LoadingPanelData.prototype.destroy = function () {
        };
        LoadingPanelData.prototype.packData = function () {
            this.count = 0;
        };
        return LoadingPanelData;
    }(ViewData));
    home.LoadingPanelData = LoadingPanelData;
    __reflect(LoadingPanelData.prototype, "home.LoadingPanelData");
    var LoadingPanel = (function (_super) {
        __extends(LoadingPanel, _super);
        function LoadingPanel() {
            return _super.call(this, "LoadingPanelSkin", LoadingPanelData) || this;
        }
        LoadingPanel.prototype.init = function () {
            this.info.packData();
        };
        LoadingPanel.prototype.destroy = function () {
            if (this.info != null)
                this.info.destroyAll();
            TimerManager.Ins().removeTimer(this.OnTimer, this);
        };
        LoadingPanel.prototype.initData = function (data) {
            this.info.packData();
        };
        LoadingPanel.prototype.initView = function () {
            TimerManager.Ins().addTimer(1000, this.OnTimer, this);
            home.HomeDataMgr.Ins(); // 看看哪里初始化的
        };
        LoadingPanel.prototype.OnTimer = function () {
            if (this.info.count <= 10) {
                this.tips.text = "loading..." + this.info.count + "/10";
                this.info.count++;
                return true;
            }
            else {
                ViewManager.Ins().close(home.LoadingPanel);
                ViewManager.Ins().open(home.HomePanel);
                return false;
            }
        };
        return LoadingPanel;
    }(ViewBase));
    home.LoadingPanel = LoadingPanel;
    __reflect(LoadingPanel.prototype, "home.LoadingPanel");
})(home || (home = {}));
//# sourceMappingURL=LoadingPanel.js.map