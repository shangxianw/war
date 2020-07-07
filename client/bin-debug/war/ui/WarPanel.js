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
            _this.resGroup = [];
            _this.layer = LayerManager.Ins().War;
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
    }(DataBase));
    war.WarPanelData = WarPanelData;
    __reflect(WarPanelData.prototype, "war.WarPanelData", ["IViewData"]);
    var WarPanel = (function (_super) {
        __extends(WarPanel, _super);
        function WarPanel() {
            return _super.call(this, "WarPanelSkin") || this;
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
            this.initTower();
            this.initQueen();
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
            this.preKa.info.packData(kaId, this.preKa.x, this.preKa.y, 0);
            var kaArray = this.info.myKaArray.slice(0, 4);
            for (var i = 0, len = 4; i < len; i++) {
                var kaId_1 = this.info.getMyNextKa();
                var ka = PoolManager.Ins().pop(war.Ka1);
                ka.info.packData(kaId_1, this.info.kaX[i], this.info.kaY, 0);
                ka.initView();
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
        WarPanel.prototype.resetKa = function () {
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
            var hero = war.WarUtils.CreateEntity(war.Entity.Hero, 10010, true);
            hero.x = this.info.createKa.x;
            hero.y = this.info.createKa.y;
            war.DrawUtils.DrawEntityRange(hero);
            var pathc = WarPool.Ins().pop(war.PathCom);
            var x = war.WarUtils.ToGridX(this.info.createKa.x);
            var y = war.WarUtils.ToGridY(this.info.createKa.y);
            var pos = war.WarDataMgr.Ins().getEnemyTarget(hero);
            var path = war.WarDataMgr.Ins().findPath(x, y, pos[0], pos[1]);
            pathc.setPath(path);
            hero.setCom(pathc);
            var tmpHero = this.optionGroup.removeChild(this.info.createKa);
            tmpHero.destroyAll();
            WarPool.Ins().push(tmpHero);
            this.entityGroup.addChild(hero);
            var preKaData = this.preKa.info;
            this.info.currKa.info.refreshKa(preKaData.kaId);
            this.preKa.info.refreshKa(this.info.getMyNextKa());
            // 血量条
            var entityInfo = war.WarDataMgr.Ins().infoMap.get(hero.iii);
            if (entityInfo != null) {
                entityInfo.x = hero.x;
                entityInfo.y = hero.y;
                this.entityInfoGroup.addChild(entityInfo);
            }
            this.resetKa();
        };
        WarPanel.prototype.initTower = function () {
            var king = war.WarUtils.CreateEntity(war.Entity.King, 99040, true);
            king.x = war.WarUtils.ToLocalX(6);
            king.y = war.WarUtils.ToLocalY(12);
            war.DrawUtils.DrawEntityRange(king);
            this.entityGroup.addChild(king);
            // 血量条
            var entityInfo = war.WarDataMgr.Ins().infoMap.get(king.iii);
            if (entityInfo != null) {
                this.entityInfoGroup.addChild(entityInfo);
            }
            king = war.WarUtils.CreateEntity(war.Entity.King, 99040, false);
            king.x = war.WarUtils.ToLocalX(47);
            king.y = war.WarUtils.ToLocalY(12);
            war.DrawUtils.DrawEntityRange(king);
            this.entityGroup.addChild(king);
            // 血量条
            entityInfo = war.WarDataMgr.Ins().infoMap.get(king.iii);
            if (entityInfo != null) {
                this.entityInfoGroup.addChild(entityInfo);
            }
        };
        WarPanel.prototype.initQueen = function () {
            var queen = war.WarUtils.CreateEntity(war.Entity.Queen, 19020, true);
            queen.x = war.WarUtils.ToLocalX(12);
            queen.y = war.WarUtils.ToLocalY(4);
            war.DrawUtils.DrawEntityRange(queen);
            this.entityGroup.addChild(queen);
            // 血量条
            var entityInfo = war.WarDataMgr.Ins().infoMap.get(queen.iii);
            if (entityInfo != null) {
                this.entityInfoGroup.addChild(entityInfo);
            }
            // ---------------------------------------------------------------------------
            queen = war.WarUtils.CreateEntity(war.Entity.Queen, 19020, true);
            queen.x = war.WarUtils.ToLocalX(12);
            queen.y = war.WarUtils.ToLocalY(18);
            war.DrawUtils.DrawEntityRange(queen);
            this.entityGroup.addChild(queen);
            // 血量条
            entityInfo = war.WarDataMgr.Ins().infoMap.get(queen.iii);
            if (entityInfo != null) {
                this.entityInfoGroup.addChild(entityInfo);
            }
            // --------------------------------------------------------------------------- ENEMY
            queen = war.WarUtils.CreateEntity(war.Entity.Queen, 19021, false);
            queen.x = war.WarUtils.ToLocalX(41);
            queen.y = war.WarUtils.ToLocalY(4);
            war.DrawUtils.DrawEntityRange(queen);
            this.entityGroup.addChild(queen);
            // 血量条
            entityInfo = war.WarDataMgr.Ins().infoMap.get(queen.iii);
            if (entityInfo != null) {
                this.entityInfoGroup.addChild(entityInfo);
            }
            // ---------------------------------------------------------------------------
            queen = war.WarUtils.CreateEntity(war.Entity.Queen, 19021, false);
            queen.x = war.WarUtils.ToLocalX(41);
            queen.y = war.WarUtils.ToLocalY(18);
            war.DrawUtils.DrawEntityRange(queen);
            this.entityGroup.addChild(queen);
            // 血量条
            entityInfo = war.WarDataMgr.Ins().infoMap.get(queen.iii);
            if (entityInfo != null) {
                this.entityInfoGroup.addChild(entityInfo);
            }
        };
        return WarPanel;
    }(ViewBase));
    war.WarPanel = WarPanel;
    __reflect(WarPanel.prototype, "war.WarPanel");
})(war || (war = {}));
//# sourceMappingURL=WarPanel.js.map