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
            var space = war.WarDataMgr.Ins().grid.space;
            var localX = war.WarDataMgr.Ins().grid.startX + space * Math.floor(war.WarDataMgr.Ins().grid.numCols / 4);
            var localY = war.WarDataMgr.Ins().grid.startY + space * Math.floor(war.WarDataMgr.Ins().grid.numRows / 4);
            var queen1 = new war.QueenEntity();
            queen1.getCom(war.COMPONENT.ACTION).setDir(war.DIRECTION.DOWN);
            queen1.x = localX;
            queen1.y = localY;
            this.entityGroup.addChild(queen1);
            this.queen1Id = queen1.id;
            var queen2 = new war.QueenEntity();
            localX = war.WarDataMgr.Ins().grid.startX + space * Math.floor(war.WarDataMgr.Ins().grid.numCols - war.WarDataMgr.Ins().grid.numCols / 4);
            localY = war.WarDataMgr.Ins().grid.startY + space * Math.floor(war.WarDataMgr.Ins().grid.numRows / 4);
            queen2.x = localX;
            queen2.y = localY;
            queen2.getCom(war.COMPONENT.ACTION).setDir(war.DIRECTION.DOWN);
            this.entityGroup.addChild(queen2);
            war.WarDataMgr.Ins().addEntity(queen1);
            war.WarDataMgr.Ins().addEntity(queen2);
            this.testGrid.addEventListener(egret.TouchEvent.TOUCH_TAP, this.OnGridTap, this);
        };
        WarPanel.prototype.OnUpdate = function (e) {
            war.WarDataMgr.Ins().update();
        };
        // ---------------------------------------------------------------------- test
        WarPanel.prototype.OnGridTap = function (e) {
            var w = this.testGrid.width;
            var h = this.testGrid.height;
            var space = war.WarDataMgr.Ins().grid.space;
            var endX = 6; //Math.floor(Math.random() * WarDataMgr.Ins().grid.numCols); 
            var endY = 10; //Math.floor(Math.random() * WarDataMgr.Ins().grid.numRows);
            // let queen:QueenEntity = WarDataMgr.Ins().entityMap.get(this.queen1Id);
            // let endX = Math.floor((queen.x - WarDataMgr.Ins().grid.startX)/space);
            // let endY = Math.floor((queen.y - WarDataMgr.Ins().grid.startY)/space);
            var x = Math.floor(e.localX / space);
            var y = Math.floor(e.localY / space);
            // 创建英雄
            var hero = PoolManager.Ins().pop(war.HeroEntity);
            hero.x = war.WarDataMgr.Ins().grid.startX + space * x; // e.stageX//
            hero.y = war.WarDataMgr.Ins().grid.startY + space * y; // e.stageY;
            var sCom = PoolManager.Ins().pop(war.SpeedCom);
            sCom.speed = 0.8;
            hero.setCom(sCom);
            var dirCom = hero.getCom(war.COMPONENT.ACTION);
            dirCom.setActionAndDir(war.ACTION.RUN, Math.ceil(Math.random() * 8));
            var pathCom = PoolManager.Ins().pop(war.PathCom);
            var path = war.WarDataMgr.Ins().findPath([x, y], [endX, endY]);
            pathCom.setPath(path);
            hero.setCom(pathCom);
            this.entityGroup.addChild(hero);
            war.WarDataMgr.Ins().addEntity(hero);
            war.DrawUtils.DrawPath(hero, this.drawGroup);
        };
        return WarPanel;
    }(ViewBase));
    war.WarPanel = WarPanel;
    __reflect(WarPanel.prototype, "war.WarPanel");
})(war || (war = {}));
//# sourceMappingURL=WarPanel.js.map