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
        };
        WarPanelData.prototype.destroy = function () {
            war.WarDataMgr.Ins().endWar();
            war.WarDataMgr.Ins().destroyAll();
        };
        WarPanelData.prototype.startWar = function () {
            this.score = 0;
            war.WarDataMgr.Ins();
            war.WarDataMgr.Ins().startWar();
        };
        WarPanelData.prototype.endWar = function () {
        };
        return WarPanelData;
    }(war.DataBase));
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
            if (this.info != null)
                this.info.destroyAll();
            this.startBtn.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.OnStarTap, this);
            this.gameArea.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.OnTouchBegin, this);
            this.gameArea.removeEventListener(egret.TouchEvent.TOUCH_MOVE, this.OnTouchMove, this);
            this.gameArea.removeEventListener(egret.TouchEvent.TOUCH_END, this.OnTouchEnd, this);
            this.gameArea.removeEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, this.OnTouchRelease, this);
        };
        WarPanel.prototype.initData = function (data) {
            this.info = data;
            war.WarDataMgr.Ins().warPanel = this;
        };
        WarPanel.prototype.initView = function () {
            this.startBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.OnStarTap, this);
            this.gameArea.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.OnTouchBegin, this);
            this.gameArea.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.OnTouchMove, this);
            this.gameArea.addEventListener(egret.TouchEvent.TOUCH_END, this.OnTouchEnd, this);
            this.gameArea.addEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, this.OnTouchRelease, this);
        };
        WarPanel.prototype.OnStarTap = function (e) {
            this.optionGroup.visible = false;
            this.info.startWar();
            war.WarUtils.CreateBgEntity(0, 0, this.gameArea.width, this.gameArea.height, this.gameArea);
            var p = this.optionGroup.localToGlobal(e.stageX, e.stageY);
            var p2 = this.gameArea.globalToLocal(p.x, p.y);
            war.WarUtils.CreateMe(p2.x, p2.y, 50, 50, this.gameArea);
        };
        WarPanel.prototype.OnTouchBegin = function (e) {
            var p = this.optionGroup.localToGlobal(e.stageX, e.stageY);
            var p2 = this.gameArea.globalToLocal(p.x, p.y);
            war.WarDataMgr.Ins().mouseX = p2.x;
            war.WarDataMgr.Ins().mouseY = p2.y;
        };
        WarPanel.prototype.OnTouchMove = function (e) {
            var p = this.optionGroup.localToGlobal(e.stageX, e.stageY);
            var p2 = this.gameArea.globalToLocal(p.x, p.y);
            if (p2.x < 0)
                p2.x = 0;
            else if (p2.x > this.gameArea.width)
                p2.x = this.gameArea.width;
            if (p2.y < 0)
                p2.y = 0;
            else if (p2.y > this.gameArea.height)
                p2.y = this.gameArea.height;
            war.WarDataMgr.Ins().mouseX = p2.x;
            war.WarDataMgr.Ins().mouseY = p2.y;
        };
        WarPanel.prototype.OnTouchEnd = function (e) {
            war.WarDataMgr.Ins().mouseX = null;
            war.WarDataMgr.Ins().mouseY = null;
        };
        WarPanel.prototype.OnTouchRelease = function (e) {
            war.WarDataMgr.Ins().mouseX = null;
            war.WarDataMgr.Ins().mouseY = null;
        };
        WarPanel.prototype.OnEndWar = function () {
            this.optionGroup.visible = true;
            this.startBtn.label = "\u91CD\u65B0\u5F00\u59CB";
            this.info.score = 0;
            this.score.text = "\u5206\u6570:" + this.info.score;
            this.destroyGameArea();
        };
        WarPanel.prototype.OnRefreshScore = function (addScore) {
            this.info.score += addScore;
            this.score.text = "\u5206\u6570:" + this.info.score;
        };
        WarPanel.prototype.destroyGameArea = function () {
            while (this.gameArea.numChildren > 0) {
                var child = this.gameArea.removeChildAt(0);
                child.destroyAll();
            }
        };
        return WarPanel;
    }(eui.Component));
    war.WarPanel = WarPanel;
    __reflect(WarPanel.prototype, "war.WarPanel");
})(war || (war = {}));
//# sourceMappingURL=WarPanel.js.map