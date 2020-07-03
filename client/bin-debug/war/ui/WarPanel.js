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
            _this.lastTime = 0;
            _this.currEnergy = 0;
            _this.speed = 2;
            _this.kaX = [396, 556, 718, 880];
            _this.kaY = 632;
            _this.anchorOffsetX = 106;
            _this.anchorOffsetY = 68;
            _this.scale = 0.74;
            _this.initX = 198;
            _this.initY = 656;
            _this.initScale = 0.6;
            _this.shiftY = -10;
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
            this.myCurrStep = 0;
            this.myKaArray = [10010, 10040, 10050, 10070, 10080, 10090, 10100, 10110];
            this.enemyKaArray = [10010, 10040, 10050, 10070, 10080, 10090, 10100, 10110];
        };
        WarPanelData.prototype.getMyNextKa = function () {
            this.myCurrStep++;
            if (this.myCurrStep >= this.myKaArray.length)
                this.myCurrStep = 0;
            return this.myKaArray[this.myCurrStep];
        };
        WarPanelData.prototype.comsumeKa = function (kaId) {
            var cfg = ConfigManager.Ins().get(CONFIG.HERO)[kaId];
            if (cfg == null)
                return;
            this.currEnergy -= cfg.cost;
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
            barData.packData(this.info.speed);
            this.costBar.initData(barData);
            this.addEvent(this, egret.Event.ENTER_FRAME, this.ShowEnergy, this);
        };
        // ---------------------------------------------------------------------- 能量充盈
        WarPanel.prototype.ShowEnergy = function () {
            var currTime = egret.getTimer();
            var deltaTime = (currTime - this.info.lastTime) / 1000;
            this.info.lastTime = currTime;
            this.costBar.OnUpdate();
            this.info.currEnergy += (this.info.speed * deltaTime) / 10;
            this.info.currEnergy = Math.min(10, this.info.currEnergy);
            this.preKa.info.refreshCost(this.info.currEnergy);
            for (var i = 0, len = this.kaGroup.numChildren; i < len; i++) {
                var ka = this.kaGroup.getChildAt(i);
                ka.info.refreshCost(this.info.currEnergy);
            }
        };
        // ---------------------------------------------------------------------- 初始化卡牌
        WarPanel.prototype.initKa = function () {
            var _this = this;
            var kaId = this.info.getMyNextKa();
            var kaData = PoolManager.Ins().pop(war.Ka1Data);
            kaData.packData(kaId, this.preKa.x, this.preKa.y, 0);
            this.preKa.initData(kaData);
            var kaArray = this.info.myKaArray.slice(0, 4);
            for (var i = 0, len = 4; i < len; i++) {
                var kaId_1 = this.info.getMyNextKa();
                var ka = PoolManager.Ins().pop(war.Ka1);
                var kaData_1 = PoolManager.Ins().pop(war.Ka1Data);
                kaData_1.packData(kaId_1, this.info.kaX[i], this.info.kaY, 0);
                ka.initData(kaData_1);
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
            }, 500);
        };
        // ---------------------------------------------------------------------- 初始化卡牌动画		
        WarPanel.prototype.showInitKaTween = function () {
            for (var i = 0, len = 4; i < len; i++) {
                var ka = this.kaGroup.getChildAt(i);
                egret.Tween.removeTweens(ka);
                egret.Tween.get(ka)
                    .to({
                    x: this.info.kaX[i],
                    y: this.info.kaY,
                    scaleX: this.info.scale,
                    scaleY: this.info.scale
                }, 250 * i);
            }
        };
        // ---------------------------------------------------------------------- 拖卡
        WarPanel.prototype.OnKaTouchBegin = function (e) {
            var ka = e.target;
            var kaIndex = this.kaGroup.getChildIndex(ka);
            if (kaIndex < 0)
                return;
            this.kaGroup.setChildIndex(ka, 777);
            ka.y += this.info.shiftY;
            this.info.currKa = ka;
            this.addEvent(ka, egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, this.OnKaTouchOutside, this);
            this.addEvent(ka, egret.TouchEvent.TOUCH_END, this.OnKaTouchEnd, this);
            this.addEvent(ka, egret.TouchEvent.TOUCH_MOVE, this.OnKaTouchMove, this);
        };
        WarPanel.prototype.OnKaTouchOutside = function (e) {
            this.info.currKa.y -= this.info.shiftY;
            this.info.currKa.alpha = 1;
            this.removeEvent(this.info.currKa, egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, this.OnKaTouchOutside, this);
            this.removeEvent(this.info.currKa, egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, this.OnKaTouchEnd, this);
            this.removeEvent(this.info.currKa, egret.TouchEvent.TOUCH_MOVE, this.OnKaTouchMove, this);
        };
        WarPanel.prototype.OnKaTouchEnd = function (e) {
            var kaIndex = this.kaGroup.getChildIndex(this.info.currKa);
            if (kaIndex >= 0) {
                // this.info.currKa.x = this.info.currKa.info.initX;
                // this.info.currKa.y = this.info.currKa.info.initY;
                this.info.currKa.alpha = 1;
                this.addToEntityGroup();
            }
            this.removeEvent(this.info.currKa, egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, this.OnKaTouchOutside, this);
            this.removeEvent(this.info.currKa, egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, this.OnKaTouchEnd, this);
            this.removeEvent(this.info.currKa, egret.TouchEvent.TOUCH_MOVE, this.OnKaTouchMove, this);
        };
        WarPanel.prototype.OnKaTouchMove = function (e) {
            this.info.currKa.x = e.stageX;
            this.info.currKa.y = e.stageY;
            this.info.currKa.alpha = 0;
            war.DrawUtils.DrawActiveCeil(e.stageX, e.stageY, this.drawGroup);
            if (this.info.createKa == null) {
                this.info.createKa = this.createKa(this.info.currKa.info.kaId, e.stageX, e.stageY);
                this.optionGroup.addChild(this.info.createKa);
            }
            var xy = war.WarUtils.GetRealXY(e.stageX, e.stageY);
            this.info.createKa.x = xy[0];
            this.info.createKa.y = xy[1];
        };
        // ---------------------------------------------------------------------- 创建英雄
        WarPanel.prototype.createKa = function (kaId, x, y) {
            var hero = PoolManager.Ins().pop(war.HeroEntity);
            hero.x = war.WarUtils.ToLocalX(x);
            hero.y = war.WarUtils.ToLocalY(y);
            hero.mc.initData("hero_10010", "hero_10010", "stand4", -1);
            return hero;
        };
        WarPanel.prototype.addToEntityGroup = function () {
            if (this.info.createKa == null)
                return;
            var speedc = PoolManager.Ins().pop(war.SpeedCom);
            speedc.angle = 0;
            speedc.speed = 10;
            this.info.createKa.setCom(speedc);
            var pathc = PoolManager.Ins().pop(war.PathCom);
            var x = war.WarUtils.ToGridX(this.info.createKa.x);
            var y = war.WarUtils.ToGridY(this.info.createKa.y);
            var path = war.WarDataMgr.Ins().findPath(x, y, 40, 15);
            pathc.setPath(path);
            this.info.createKa.setCom(pathc);
            this.optionGroup.removeChild(this.info.createKa);
            var hero = this.info.createKa;
            this.entityGroup.addChild(hero);
            war.WarDataMgr.Ins().addEntity(hero);
            var preKaData = this.preKa.info;
            this.info.currKa.info.refreshKa(preKaData.kaId);
            this.preKa.info.refreshKa(this.info.getMyNextKa());
            this.info.currKa.x = this.info.initX;
            this.info.currKa.y = this.info.initY;
            this.info.currKa.scaleX = this.info.currKa.scaleY = this.info.initScale;
            egret.Tween.removeTweens(this.info.currKa);
            egret.Tween.get(this.info.currKa)
                .to({
                x: this.info.currKa.info.kaX,
                y: this.info.currKa.info.kaY,
                scaleX: this.info.scale,
                scaleY: this.info.scale
            }, 250);
            this.info.comsumeKa(this.info.currKa.info.kaId);
            this.info.createKa = null;
        };
        return WarPanel;
    }(ViewBase));
    war.WarPanel = WarPanel;
    __reflect(WarPanel.prototype, "war.WarPanel");
})(war || (war = {}));
//# sourceMappingURL=WarPanel.js.map