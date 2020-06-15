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
            this.isNext = false;
        };
        LoadingPanelData.prototype.destroy = function () {
        };
        LoadingPanelData.prototype.packData = function () {
            this.isNext = false;
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
            Utils.showBreathTween(this.bg, false);
            TimerManager.Ins().removeTimer(this.OnLoadRes, this);
        };
        LoadingPanel.prototype.initData = function (data) {
            this.info.packData();
        };
        LoadingPanel.prototype.initView = function () {
            Utils.showBreathTween(this.bg, true, { time: 1000 });
            TimerManager.Ins().addTimer(100, this.OnLoadRes, this);
        };
        LoadingPanel.prototype.OnLoadRes = function () {
        };
        return LoadingPanel;
    }(ViewBase));
    home.LoadingPanel = LoadingPanel;
    __reflect(LoadingPanel.prototype, "home.LoadingPanel");
})(home || (home = {}));
//# sourceMappingURL=LoadingPanel.js.map