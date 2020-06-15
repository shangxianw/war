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
            this.isNext = true;
            this.heroArray = [];
            this.currIndex = 0;
        };
        LoadingPanelData.prototype.destroy = function () {
            this.heroArray.length = 0;
            this.currIndex = 0;
        };
        LoadingPanelData.prototype.packData = function () {
            this.isNext = true;
            this.currIndex = 0;
            this.heroArray = [10080, 10090, 10010, 10040, 10070, 10150, 10120, 10130];
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
            if (this.info.isNext == true) {
                if (this.info.currIndex >= this.info.heroArray.length) {
                    TimerManager.Ins().removeTimer(this.OnLoadRes, this);
                    return false;
                }
                this.info.isNext = false;
                var heroId = this.info.heroArray[this.info.currIndex];
                var resName = "herobg_" + heroId + "_png";
                ResManager.Ins().loadResAsync(resName, this.OnLoadHeroOk, this);
            }
            return true;
        };
        LoadingPanel.prototype.OnLoadHeroOk = function () {
            console.log(this.info.currIndex);
            var heroModel = new eui.Image;
            heroModel.source = "herobg_" + this.info.heroArray[this.info.currIndex] + "_png";
            this.addChild(heroModel);
            heroModel.x = Math.random() * 1280;
            heroModel.y = Math.random() * 720;
            heroModel.scaleX = heroModel.scaleY = 0.5;
            this.info.isNext = true;
            this.info.currIndex++;
        };
        return LoadingPanel;
    }(ViewBase));
    home.LoadingPanel = LoadingPanel;
    __reflect(LoadingPanel.prototype, "home.LoadingPanel");
})(home || (home = {}));
//# sourceMappingURL=LoadingPanel.js.map