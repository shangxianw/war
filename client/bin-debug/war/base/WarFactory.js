var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var war;
(function (war) {
    var WarFactory = (function () {
        function WarFactory() {
        }
        WarFactory.CreateHero = function (heroId, localX, localY) {
            var entity = new war.HeroEntity();
            var posCom = new war.PosCom();
            var gridX = war.WarUtils.LocalX2GridX(localX);
            var gridY = war.WarUtils.LocalY2GridY(localY);
            posCom.x = war.WarUtils.GridX2LocalX(gridX);
            posCom.y = war.WarUtils.GridX2LocalX(gridY);
            entity.setComponent(posCom);
            var speedCom = new war.SpeedCom();
            speedCom.setData(60, 30);
            entity.setComponent(speedCom);
            var renderCom = new war.RenderCom();
            var render = new war.HeroRender();
            render.initData(heroId);
            render.x = posCom.x;
            render.y = posCom.y;
            renderCom.setRender(render);
            entity.setComponent(renderCom);
            var pathCom = new war.PathCom();
            var path = war.WarDataMgr.Ins().findPath(gridX, gridY, 20, 15);
            pathCom.setPath(path);
            entity.setComponent(pathCom);
            war.WarDataMgr.Ins().addEntity(entity);
            LayerManager.Ins().body.addChild(render);
        };
        return WarFactory;
    }());
    war.WarFactory = WarFactory;
    __reflect(WarFactory.prototype, "war.WarFactory");
})(war || (war = {}));
//# sourceMappingURL=WarFactory.js.map