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
    var InputSystem = (function (_super) {
        __extends(InputSystem, _super);
        function InputSystem() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        InputSystem.prototype.init = function () {
            this.systemId = war.SYSTEM.MOVE;
        };
        InputSystem.prototype.destroy = function () {
        };
        InputSystem.prototype.update = function (deltaTime) {
            var warData = war.WarDataMgr.Ins();
            while (warData.inputArray.length > 0) {
                var iCom = warData.inputArray.shift();
                if (iCom == null)
                    continue;
                if (iCom.inputType == war.INPUT.CREATE_HERO)
                    this.createHero(iCom);
            }
        };
        InputSystem.prototype.createHero = function (inputCom) {
            var hero = PoolManager.Ins().pop(war.HeroEntity);
            hero.x = war.WarUtils.ToLocalX(inputCom.x1);
            hero.y = war.WarUtils.ToLocalY(inputCom.y1);
            var sCom = PoolManager.Ins().pop(war.SpeedCom);
            sCom.speed = Math.random();
            sCom.angle = 0;
            hero.setCom(sCom);
            var pathCom = PoolManager.Ins().pop(war.PathCom);
            var path = war.WarDataMgr.Ins().findPath(inputCom.x1, inputCom.y1, inputCom.x2, inputCom.y2);
            pathCom.setPath(path);
            hero.setCom(pathCom);
            var aCom = new war.ActionCom();
            aCom.setActionAndDir(war.ACTION.RUN, war.DIRECTION.DOWN);
            hero.setCom(aCom);
            var rCom = new war.RigidCom();
            rCom.radius = 20;
            hero.setCom(rCom);
            var cCom = new war.CampCom();
            cCom.camp = Math.random() > 0.5 ? war.CAMP.WE : war.CAMP.ENEMY;
            hero.setCom(cCom);
            war.DrawUtils.DrawGrigd(hero);
            war.DrawUtils.DrawHeroAnchor(hero);
            inputCom.parent.addChild(hero);
            war.WarDataMgr.Ins().addEntity(hero);
        };
        return InputSystem;
    }(war.SystemBase));
    war.InputSystem = InputSystem;
    __reflect(InputSystem.prototype, "war.InputSystem");
})(war || (war = {}));
//# sourceMappingURL=InputSystem.js.map