var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var war;
(function (war) {
    var WarFactory = (function () {
        function WarFactory() {
        }
        WarFactory.RemoveHero = function (hasCode) {
            var entity = war.WarDataMgr.Ins().getEntity(hasCode);
            war.WarDataMgr.Ins().removeEntity(entity);
            var renderCom = entity.getComponent(war.Component.Render);
            renderCom.render.parent.removeChild(renderCom.render);
            entity.destroyAll();
        };
        WarFactory.CreateHero = function (heroId, localX, localY) {
            var entity = new war.HeroEntity();
            var posCom = new war.PosCom();
            var gridX = war.WarUtils.LocalX2GridX(localX);
            var gridY = war.WarUtils.LocalY2GridY(localY);
            posCom.x = war.WarUtils.GridX2LocalX(gridX);
            posCom.y = war.WarUtils.GridX2LocalX(gridY);
            entity.setComponent(posCom);
            var speedCom = new war.SpeedCom();
            speedCom.setData(0.06, 0);
            entity.setComponent(speedCom);
            var renderCom = new war.RenderCom();
            var render = new war.HeroRender();
            // render.initData(heroId)
            render.x = posCom.x;
            render.y = posCom.y;
            renderCom.setRender(render);
            entity.setComponent(renderCom);
            // let collisionCom = new CollisionCom()
            // collisionCom.type = Collision.Circle;
            // collisionCom.range = 30
            // entity.setComponent(collisionCom)
            var attackCom = new war.AttackCom();
            attackCom.range = 20 + Math.floor(Math.random() * 40);
            entity.setComponent(attackCom);
            var actionCom = new war.ActionCom();
            actionCom.action = war.Action.Run;
            entity.setComponent(actionCom);
            var pathCom = new war.PathCom();
            var path = war.WarDataMgr.Ins().findPath(gridX, gridY, Math.floor(Math.random() * war.WarDataMgr.Ins().Ncols), Math.floor(Math.random() * war.WarDataMgr.Ins().Nrows));
            pathCom.setPath(path);
            entity.setComponent(pathCom);
            war.WarDataMgr.Ins().addEntity(entity);
            LayerManager.Ins().war.body.addChild(render);
        };
        return WarFactory;
    }());
    war.WarFactory = WarFactory;
    __reflect(WarFactory.prototype, "war.WarFactory");
})(war || (war = {}));
//# sourceMappingURL=WarFactory.js.map