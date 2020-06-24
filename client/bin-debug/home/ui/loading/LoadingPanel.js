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
            this.resGroup = ["loading"];
            this.layer = LayerManager.Ins().Panel;
        };
        LoadingPanelData.prototype.destroy = function () {
        };
        LoadingPanelData.prototype.packData = function () {
            this.currCount = 0;
            this.resGroupArray = ["common_preload", "war_preload"]; // war_preload 对应的英雄应该在matchpanel的时候加载的~
            this.cfgGroupArray = ["hero_json", "upgrade_json"];
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
        };
        LoadingPanel.prototype.initData = function (data) {
            this.info.packData();
        };
        LoadingPanel.prototype.initView = function () {
            this.loadRes();
            Utils.showBreathTween(this.bg, true, { time: 1000 });
        };
        // ---------------------------------------------------------------------- 加载资源组
        LoadingPanel.prototype.loadRes = function () {
            this.bar.minimum = 0;
            this.bar.value = 0;
            ResManager.Ins().loadGroup(this.info.resGroupArray, this.OnLoadGroupOk, this, this.OnLoadGroupProgress, this.OnLoadGroupError);
        };
        LoadingPanel.prototype.OnLoadGroupOk = function (e) {
            this.loadCfg();
        };
        LoadingPanel.prototype.OnLoadGroupProgress = function (e) {
            this.bar.maximum = e.itemsTotal;
            this.bar.value = e.itemsLoaded;
        };
        LoadingPanel.prototype.OnLoadGroupError = function (e) {
        };
        // ---------------------------------------------------------------------- 加载配置表
        LoadingPanel.prototype.loadCfg = function () {
            var _this = this;
            ResManager.Ins().loadGroup(["config_preload"], function () {
                var array = RES.getGroupByName("config_preload");
                for (var _i = 0, array_1 = array; _i < array_1.length; _i++) {
                    var item = array_1[_i];
                    ConfigManager.Ins().set(item.name, RES.getRes(item.name));
                }
                _this.loadOK();
            }, this);
        };
        // ---------------------------------------------------------------------- 加载完成
        LoadingPanel.prototype.loadOK = function () {
            ViewManager.Ins().close(this);
            ViewManager.Ins().open(home.HomePanel);
        };
        return LoadingPanel;
    }(ViewBase));
    home.LoadingPanel = LoadingPanel;
    __reflect(LoadingPanel.prototype, "home.LoadingPanel");
})(home || (home = {}));
//# sourceMappingURL=LoadingPanel.js.map