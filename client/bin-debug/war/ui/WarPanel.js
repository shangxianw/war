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
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.kaX = [396, 556, 718, 880];
            _this.kaY = 632;
            _this.anchorOffsetX = 106;
            _this.anchorOffsetY = 68;
            _this.scale = 0.74;
            _this.initX = 198;
            _this.initY = 656;
            _this.initScale = 0.6;
            _this.shiftY = -20;
            return _this;
        }
        WarPanelData.prototype.init = function () {
            this.resGroup = [];
            this.layer = LayerManager.Ins().Panel;
        };
        WarPanelData.prototype.destroy = function () {
            war.WarDataMgr.Ins().endWar();
            war.WarDataMgr.Ins().destroyAll();
        };
        WarPanelData.prototype.packData = function () {
            war.WarDataMgr.Ins();
            war.WarDataMgr.Ins().startWar();
            this.myKaArray = [10010, 10020, 10030, 10040, 10050, 10060, 10070, 10080];
            this.enemyKaArray = [10010, 10020, 10030, 10040, 10050, 10060, 10070, 10080];
        };
        return WarPanelData;
    }(ViewData));
    war.WarPanelData = WarPanelData;
    __reflect(WarPanelData.prototype, "war.WarPanelData");
    var WarPanel = (function (_super) {
        __extends(WarPanel, _super);
        function WarPanel() {
            return _super.call(this, "WarPanelSkin", WarPanelData) || this;
        }
        WarPanel.prototype.init = function () {
        };
        WarPanel.prototype.destroy = function () {
            if (this.info != null)
                this.info.destroyAll();
        };
        WarPanel.prototype.initData = function (data) {
            this.info.packData();
        };
        WarPanel.prototype.initView = function () {
            war.DrawUtils.DrawGrid(this.testGrid);
            this.initKa();
            this.mapImg.source = Utils.GetMap(1001);
            var barData = new war.CostBarData();
            barData.packData(2);
            this.costBar.initData(barData);
        };
        WarPanel.prototype.initKa = function () {
            var _this = this;
            var kaArray = this.info.myKaArray.slice(0, 5);
            for (var i = 0, len = 5; i < len; i++) {
                var kaId = kaArray[i];
                var ka = PoolManager.Ins().pop(war.Ka1);
                var kaData = PoolManager.Ins().pop(war.Ka1Data);
                kaData.packData(kaId);
                ka.initData(kaData);
                ka.x = this.info.initX;
                ka.y = this.info.initY;
                ka.scaleX = ka.scaleY = this.info.initScale;
                ka.anchorOffsetX = this.info.anchorOffsetX;
                ka.anchorOffsetY = this.info.anchorOffsetY;
                this.kaGroup.addChild(ka);
                this.addEvent(ka, egret.TouchEvent.TOUCH_BEGIN, this.OnKaTouchBegin, this);
            }
            setTimeout(function () {
                _this.showInitKaTween();
            }, 1000);
        };
        WarPanel.prototype.showInitKaTween = function () {
            for (var i = 1, len = 5; i < len; i++) {
                var ka = this.kaGroup.getChildAt(i);
                egret.Tween.removeTweens(ka);
                egret.Tween.get(ka)
                    .to({
                    x: this.info.kaX[i - 1],
                    y: this.info.kaY,
                    scaleX: this.info.scale,
                    scaleY: this.info.scale
                }, 250 * i);
            }
        };
        WarPanel.prototype.OnKaTouchBegin = function (e) {
            var ka = e.target;
            var kaIndex = this.kaGroup.getChildIndex(ka);
            if (kaIndex <= 0)
                return;
            ka.y += this.info.shiftY;
            this.info.currKa = ka;
            this.addEvent(ka, egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, this.OnKaTouchOutside, this);
            this.addEvent(ka, egret.TouchEvent.TOUCH_END, this.OnKaTouchEnd, this);
            this.addEvent(ka, egret.TouchEvent.TOUCH_MOVE, this.OnKaTouchMove, this);
        };
        WarPanel.prototype.OnKaTouchOutside = function (e) {
            this.info.currKa.y -= this.info.shiftY;
            this.removeEvent(this.info.currKa, egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, this.OnKaTouchOutside, this);
            this.removeEvent(this.info.currKa, egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, this.OnKaTouchEnd, this);
            this.removeEvent(this.info.currKa, egret.TouchEvent.TOUCH_MOVE, this.OnKaTouchMove, this);
        };
        WarPanel.prototype.OnKaTouchEnd = function (e) {
            var kaIndex = this.kaGroup.getChildIndex(this.info.currKa);
            if (kaIndex >= 0) {
                this.info.currKa.x = this.info.kaX[kaIndex - 1];
                this.info.currKa.y = this.info.kaY;
            }
            this.removeEvent(this.info.currKa, egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, this.OnKaTouchOutside, this);
            this.removeEvent(this.info.currKa, egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, this.OnKaTouchEnd, this);
            this.removeEvent(this.info.currKa, egret.TouchEvent.TOUCH_MOVE, this.OnKaTouchMove, this);
        };
        WarPanel.prototype.OnKaTouchMove = function (e) {
            this.info.currKa.x = e.stageX;
            this.info.currKa.y = e.stageY;
        };
        return WarPanel;
    }(ViewBase));
    war.WarPanel = WarPanel;
    __reflect(WarPanel.prototype, "war.WarPanel");
})(war || (war = {}));
//# sourceMappingURL=WarPanel.js.map