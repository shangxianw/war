var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var war;
(function (war) {
    var WarUtils = (function () {
        function WarUtils() {
        }
        WarUtils.Init = function () {
        };
        WarUtils.Destroy = function () {
        };
        WarUtils.CreateMe = function (x, y, w, h, parent) {
            var hero = new war.HeroEntity();
            var posCom = new war.PosCom();
            posCom.setXY(x, y);
            posCom.setSize(w, h);
            posCom.setAnchorXY(w >> 1, h >> 1);
            posCom.setColor(war.EntityColor.Me);
            hero.setComponent(posCom);
            var renderCom = new war.RenderCom();
            var heroRender = new war.HeroRender();
            parent.addChild(heroRender);
            renderCom.setRender(heroRender, parent);
            hero.setComponent(renderCom);
            var ctrlCom = new war.ControlCom();
            hero.setComponent(ctrlCom);
            var healthCom = new war.HealthCom();
            healthCom.setHp(100);
            posCom.setScaleXY(1, 1);
            hero.setComponent(healthCom);
            war.WarDataMgr.Ins().addEntity(hero);
            war.DrawUtils.DrawHasCode(hero);
        };
        WarUtils.CreateAI = function (x, y, w, h, parent) {
            var hero = new war.HeroEntity();
            var renderCom = new war.RenderCom();
            var heroRender = new war.HeroRender();
            parent.addChild(heroRender);
            renderCom.setRender(heroRender, parent);
            hero.setComponent(renderCom);
            var aiType = Math.random() > 0.5 ? war.AIType.Nice : war.AIType.Bad;
            var aiCom = new war.AICom();
            aiCom.setAiType(aiType);
            hero.setComponent(aiCom);
            var posCom = new war.PosCom();
            posCom.setXY(x, y);
            posCom.setSize(w, h);
            posCom.setAnchorXY(w >> 1, h >> 1);
            var color = aiType == war.AIType.Nice ? war.EntityColor.NiceAI : war.EntityColor.BadAI;
            posCom.setColor(color);
            hero.setComponent(posCom);
            var healthCom = new war.HealthCom();
            healthCom.setHp(100);
            posCom.setScaleXY(1, 1);
            hero.setComponent(healthCom);
            war.WarDataMgr.Ins().addEntity(hero);
            war.DrawUtils.DrawHasCode(hero);
        };
        WarUtils.CreateBgEntity = function (x, y, w, h, parent) {
            var bg = new war.BgEntity();
            var posCom = new war.PosCom();
            posCom.setXY(x, y);
            posCom.setSize(w, h);
            posCom.setColor(war.EntityColor.Bg);
            bg.setComponent(posCom);
            var renderCom = new war.RenderCom();
            var bgRender = new war.BgRender();
            parent.addChildAt(bgRender, 0);
            renderCom.setRender(bgRender, parent);
            bg.setComponent(renderCom);
            war.WarDataMgr.Ins().addEntity(bg);
            war.WarDataMgr.Ins().bgEntity = bg;
        };
        WarUtils.RemoveEntity = function (entity) {
            var entity2 = war.WarDataMgr.Ins().removeEntity(entity.hasCode);
            entity.destroyAll();
            entity = null;
            entity2 = null;
        };
        return WarUtils;
    }());
    war.WarUtils = WarUtils;
    __reflect(WarUtils.prototype, "war.WarUtils");
})(war || (war = {}));
//# sourceMappingURL=WarUtils.js.map