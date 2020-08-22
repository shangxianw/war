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
    var AttackSystem = (function (_super) {
        __extends(AttackSystem, _super);
        function AttackSystem() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        AttackSystem.prototype.init = function () {
            this.sysType = war.System.Attack;
        };
        AttackSystem.prototype.destroy = function () {
        };
        AttackSystem.prototype.update = function (entity, dt) {
            if (entity == null)
                return;
            var posCom = entity.getComponent(war.Component.Pos);
            var atkCom = entity.getComponent(war.Component.Attack);
            var actionCom = entity.getComponent(war.Component.Action);
            if (posCom == null || atkCom == null || actionCom == null)
                return;
            var currAction = actionCom.action;
            var tarEntity = null;
            var array = DataUtils.CopyArray(war.WarDataMgr.Ins().entityMap.values());
            for (var _i = 0, array_1 = array; _i < array_1.length; _i++) {
                var entity2 = array_1[_i];
                if (entity2 == null)
                    continue;
                if (entity.hasCode == entity2.hasCode)
                    continue;
                // 攻击不需要考虑对方也在射程内
                // let atkCom2 = entity2.getComponent(Component.Attack) as AttackCom
                // if(atkCom2 == null) // 当二者都是刚体时才
                // 	continue
                var posCom2 = entity2.getComponent(war.Component.Pos);
                if (posCom2 == null)
                    continue;
                var distance = MathUtils.TwoPointDistance(posCom.x, posCom.y, posCom2.x, posCom2.y);
                if (distance > atkCom.range)
                    continue;
                tarEntity = entity2;
                // WarFactory.RemoveHero(entity2.hasCode)
                break;
            }
            if (tarEntity == null) {
                actionCom.action = war.Action.Run;
                return;
            }
            else {
                if (actionCom.action == war.Action.Attack)
                    return;
            }
            // 确定目标
            actionCom.action = war.Action.Attack;
        };
        return AttackSystem;
    }(war.SystemBase));
    war.AttackSystem = AttackSystem;
    __reflect(AttackSystem.prototype, "war.AttackSystem");
})(war || (war = {}));
//# sourceMappingURL=AttackSystem.js.map