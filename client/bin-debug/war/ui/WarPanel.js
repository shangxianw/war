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
        };
        return WarPanelData;
    }(DataBase));
    war.WarPanelData = WarPanelData;
    __reflect(WarPanelData.prototype, "war.WarPanelData");
    var WarPanel = (function (_super) {
        __extends(WarPanel, _super);
        function WarPanel() {
            return _super.call(this, "WarPanelSkin") || this;
        }
        WarPanel.prototype.init = function () {
            this.PanelId = ViewIdConst.WarPanel;
            this.Layer = LayerManager.Ins().War;
            this.addEventListener(egret.Event.ENTER_FRAME, this.OnUpdate, this);
            // WarDataMgr.Ins().startWar();
            this.addEventListener(egret.Event.ENTER_FRAME, function () {
                war.WarDataMgr.Ins().update();
            }, this);
        };
        WarPanel.prototype.destroy = function () {
            this.testGrid.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.OnGridTap, this);
            this.removeEventListener(egret.Event.ENTER_FRAME, this.OnUpdate, this);
        };
        WarPanel.prototype.initData = function (info) {
            war.DrawUtils.DrawGrid(this.drawGroup);
            // let space = WarDataMgr.Ins().grid.space;
            // let localX = WarDataMgr.Ins().grid.startX + space * Math.floor(WarDataMgr.Ins().grid.numCols/4);
            // let localY = WarDataMgr.Ins().grid.startY + space * Math.floor(WarDataMgr.Ins().grid.numRows/4);
            // let queen1:QueenEntity = new QueenEntity();
            // (queen1.getCom(COMPONENT.ACTION) as ActionCom).setDir(DIRECTION.DOWN);
            // queen1.x = localX;
            // queen1.y = localY;
            // this.entityGroup.addChild(queen1);
            // this.queen1Id = queen1.id;
            // let queen2:QueenEntity = new QueenEntity();
            // localX = WarDataMgr.Ins().grid.startX + space * Math.floor(WarDataMgr.Ins().grid.numCols - WarDataMgr.Ins().grid.numCols/4);
            // localY = WarDataMgr.Ins().grid.startY + space * Math.floor(WarDataMgr.Ins().grid.numRows/4);
            // queen2.x = localX;
            // queen2.y = localY;
            // (queen2.getCom(COMPONENT.ACTION) as ActionCom).setDir(DIRECTION.DOWN);
            // this.entityGroup.addChild(queen2);
            // WarDataMgr.Ins().addEntity(queen1);
            // WarDataMgr.Ins().addEntity(queen2);
            this.testGrid.addEventListener(egret.TouchEvent.TOUCH_TAP, this.OnGridTap, this);
        };
        WarPanel.prototype.OnUpdate = function (e) {
            war.WarDataMgr.Ins().update();
        };
        // ---------------------------------------------------------------------- test
        WarPanel.prototype.OnGridTap = function (e) {
            var w = this.testGrid.width;
            var h = this.testGrid.height;
            var space = war.WarDataMgr.Ins().space;
            var endX = 3;
            var endY = 7;
            var x = Math.floor(e.localX / space);
            var y = Math.floor(e.localY / space);
            // 创建英雄
            var hero = new war.HeroEntity; //PoolManager.Ins().pop(HeroEntity);
            hero.x = war.WarUtils.ToRealX(x);
            hero.y = war.WarUtils.ToRealY(y);
            var sCom = PoolManager.Ins().pop(war.SpeedCom);
            sCom.speed = 0.4;
            sCom.angle = 0;
            hero.setCom(sCom);
            var pathCom = PoolManager.Ins().pop(war.PathCom);
            var path = war.WarDataMgr.Ins().findPath(x, y, endX, endY);
            pathCom.setPath(path);
            hero.setCom(pathCom);
            // let aCom:AttackCom = PoolManager.Ins().pop(AttackCom);
            // aCom.setRange(50);
            // hero.setCom(aCom);
            // DrawUtils.DrawAttackRange(hero);
            var rCom = new war.RigidCom();
            rCom.radius = 20;
            hero.setCom(rCom);
            war.DrawUtils.DrawGrigd(hero);
            this.entityGroup.addChild(hero);
            war.WarDataMgr.Ins().addEntity(hero);
            // DrawUtils.DrawPath(hero, this.drawGroup);
        };
        return WarPanel;
    }(ViewBase));
    war.WarPanel = WarPanel;
    __reflect(WarPanel.prototype, "war.WarPanel");
})(war || (war = {}));
//# sourceMappingURL=WarPanel.js.map