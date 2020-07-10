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
    var DecaySystem = (function (_super) {
        __extends(DecaySystem, _super);
        function DecaySystem() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DecaySystem.prototype.init = function () {
            this.sysType = war.System.Decay;
        };
        DecaySystem.prototype.destroy = function () {
        };
        DecaySystem.prototype.update = function (entity, deltaTime) {
            if (entity == null)
                return;
            var healthCom = entity.getComponent(war.Component.Health);
            if (healthCom == null)
                return;
            var ctrlCom = entity.getComponent(war.Component.Ctrl);
            if (healthCom.hp <= 5) {
                war.WarUtils.RemoveEntity(entity);
                if (ctrlCom != null) {
                    war.WarDataMgr.Ins().endWar();
                }
                return;
            }
            var posCom = entity.getComponent(war.Component.Pos);
            if (posCom == null)
                return;
            var newHp = healthCom.hp - 0.5;
            healthCom.setHp(newHp);
            posCom.setScaleXY(healthCom.hp / 100, healthCom.hp / 100);
            return;
        };
        return DecaySystem;
    }(war.SystemBase));
    war.DecaySystem = DecaySystem;
    __reflect(DecaySystem.prototype, "war.DecaySystem");
})(war || (war = {}));
//# sourceMappingURL=DecaySystem.js.map