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
var war;
(function (war) {
    var WarPanelData = (function (_super) {
        __extends(WarPanelData, _super);
        function WarPanelData() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        WarPanelData.prototype.init = function () {
            this.resGroup = [];
            this.layer = LayerManager.Ins().war;
        };
        WarPanelData.prototype.destroy = function () {
        };
        WarPanelData.prototype.startWar = function () {
            war.WarDataMgr.Ins().updateStepLevel();
            war.WarDataMgr.Ins().startWar();
        };
        WarPanelData.prototype.endWar = function () {
            war.WarDataMgr.Ins().endWar();
        };
        return WarPanelData;
    }(ViewData));
    war.WarPanelData = WarPanelData;
    __reflect(WarPanelData.prototype, "war.WarPanelData");
    var WarPanel = (function (_super) {
        __extends(WarPanel, _super);
        function WarPanel() {
            var _this = _super.call(this) || this;
            _this.skinName = "WarPanelSkin";
            return _this;
        }
        WarPanel.prototype.init = function () {
        };
        WarPanel.prototype.destroy = function () {
            // MessageMgr.Ins().unObserve(1, this.OnRefreshScore, this);
            MessageManager.Ins().unSubscribe(2, this.OnRefreshScro, this);
            MessageManager.Ins().unSubscribe(3, this.OnEndGame, this);
            this.optionGroup.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.OnOptionTap, this);
            this.optionGroup.removeEventListener(egret.TouchEvent.TOUCH_MOVE, this.OnOptionMoveTap, this);
            this.optionGroup.removeEventListener(egret.TouchEvent.TOUCH_END, this.OnOptionEndTap, this);
            this.optionGroup.removeEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, this.OnOptionOutsideTap, this);
            this.restartBtn2.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.OnReStartTap, this);
            this.restartBtn2.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.OnReStart2Tap, this);
        };
        WarPanel.prototype.open = function () {
            this.endGameGroup.visible = false;
            this.score.text = "\u5206\u6570\uFF1A" + 0;
            this.gameScro.viewport.scrollV = 0;
            this.info.startWar();
            war.WarUtils.CreatePlayerEntity(200, 1000, this.gameArea);
            // WarUtils.CreateStepEntity(360, 1280, 720, 50, this.gameArea);
            war.WarUtils.CreateStepEntity(360, 1200, 720, 50, this.gameArea);
            // WarUtils.CreateStepEntity(360, 500, 720, 50, this.gameArea);
            // WarUtils.CreateStepEntity(360, 200, 720, 50, this.gameArea);
            // WarUtils.CreateStepEntity(360, -100, 720, 50, this.gameArea);
            // WarUtils.CreateStepEntity(360, -400, 720, 50, this.gameArea);
            MessageManager.Ins().subscribe(1, this.OnRefreshScore, this);
            MessageManager.Ins().subscribe(2, this.OnRefreshScro, this);
            MessageManager.Ins().subscribe(3, this.OnEndGame, this);
            this.optionGroup.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.OnOptionTap, this);
            this.optionGroup.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.OnOptionMoveTap, this);
            this.optionGroup.addEventListener(egret.TouchEvent.TOUCH_END, this.OnOptionEndTap, this);
            this.optionGroup.addEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, this.OnOptionOutsideTap, this);
            this.restartBtn2.addEventListener(egret.TouchEvent.TOUCH_TAP, this.OnReStartTap, this);
            this.restartBtn2.addEventListener(egret.TouchEvent.TOUCH_TAP, this.OnReStart2Tap, this);
            war.DrawUtils.DrawStandardLine(war.WarDataMgr.Ins().currStepLevel, this.gameArea);
        };
        WarPanel.prototype.OnRefreshScore = function (score) {
            this.score.text = "\u5206\u6570\uFF1A" + score;
        };
        WarPanel.prototype.OnRefreshScro = function (addScro) {
            this.gameScro.viewport.scrollV += addScro;
            this.score.text = "\u5206\u6570\uFF1A" + Math.floor(Math.abs(this.gameScro.viewport.scrollV)) + " stepCount:" + war.WarDataMgr.Ins().MaxStepCount;
            // WarDataMgr.Ins().updateStepLevel(WarDataMgr.Ins().currStepLevel - addScro);
        };
        WarPanel.prototype.OnEndGame = function () {
            this.info.endWar();
            this.endGameGroup.visible = true;
        };
        // ---------------------------------------------------------------------- Event
        WarPanel.prototype.OnOptionTap = function (e) {
            war.WarDataMgr.Ins().beginX = e.localX;
            war.WarDataMgr.Ins().endX = e.localX;
        };
        WarPanel.prototype.OnOptionMoveTap = function (e) {
            war.WarDataMgr.Ins().beginX;
            war.WarDataMgr.Ins().endX = e.localX;
            console.log(war.WarDataMgr.Ins().beginX, war.WarDataMgr.Ins().endX);
        };
        WarPanel.prototype.OnOptionEndTap = function (e) {
            war.WarDataMgr.Ins().beginX = 0;
            war.WarDataMgr.Ins().endX = 0;
        };
        WarPanel.prototype.OnOptionOutsideTap = function (e) {
            war.WarDataMgr.Ins().beginX = 0;
            war.WarDataMgr.Ins().endX = 0;
        };
        WarPanel.prototype.OnReStartTap = function () {
            this.info.endWar();
            this.destroy();
            this.open();
        };
        WarPanel.prototype.OnReStart2Tap = function () {
            this.endGameGroup.visible = false;
            this.info.startWar();
        };
        return WarPanel;
    }(ViewBase));
    war.WarPanel = WarPanel;
    __reflect(WarPanel.prototype, "war.WarPanel");
})(war || (war = {}));
//# sourceMappingURL=WarPanel.js.map