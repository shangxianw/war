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
            // ---------------------------------------------------------------------- 帧率测试
            _this.logicFps = 1;
            _this.renderFps = 60;
            _this.lastLogic = 0;
            _this.lastRender = 0;
            _this.updateLogic = 0;
            _this.updateRender = 0;
            _this.testX = 0;
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
            this.showFrame();
        };
        HomePanel.prototype.OnFightTap = function (e) {
            SceneManager.Ins().changeScene(SceneType.War);
        };
        HomePanel.prototype.showFrame = function () {
            egret.startTick(this.OnUpdateLogic, this);
            egret.startTick(this.OnUpdaterRender, this);
        };
        HomePanel.prototype.OnUpdateLogic = function (t) {
            var dt = t - this.lastLogic;
            var delay = 1000 / this.logicFps;
            this.updateLogic += dt;
            if (this.updateLogic < delay)
                return true;
            this.lastLogic = t;
            this.updateLogic -= delay;
            this.logicLb.text = "logic:" + t;
            this.testX = Math.floor(t / 10);
            return true;
        };
        HomePanel.prototype.OnUpdaterRender = function (t) {
            var dt = t - this.lastRender;
            var delay = 1000 / this.renderFps;
            this.updateRender += dt;
            if (this.updateRender < delay)
                return true;
            this.lastRender = t;
            this.updateRender -= delay;
            // let distance = this.testX - this.frameTest.x
            // this.frameTest.x += distance / dt;
            this.frameTest0.x = Math.floor(t / 10);
            this.frameTest.x = this.testX;
            this.renderLb.text = "render:" + t;
            return true;
        };
        return HomePanel;
    }(ViewBase));
    home.HomePanel = HomePanel;
    __reflect(HomePanel.prototype, "home.HomePanel");
})(home || (home = {}));
//# sourceMappingURL=HomePanel.js.map