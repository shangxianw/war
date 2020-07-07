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
    /**
     * 伤害计算系统（只处理攻击和受击）
     */
    var AttackSystem = (function (_super) {
        __extends(AttackSystem, _super);
        function AttackSystem() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        AttackSystem.prototype.init = function () {
            this.systemId = war.System.Attack;
        };
        AttackSystem.prototype.destroy = function () {
        };
        AttackSystem.prototype.update = function (entity, deltaTime) {
            if (entity == null)
                return;
            if (entity.attackCom.range == null)
                return;
            // 普攻且只会攻击一个人的情况
            this.calcCommonAttack(entity, deltaTime);
        };
        // 目标是不会移动的实体
        AttackSystem.prototype.calcCommonAttack = function (entity, deltaTime) {
            if (entity.attackCom.atkTarArray.length <= 0) {
                var entityArray = DataUtils.CopyArray(war.WarDataMgr.Ins().entityMap.values());
                var distance = 0;
                for (var _i = 0, entityArray_1 = entityArray; _i < entityArray_1.length; _i++) {
                    var tarEntity_1 = entityArray_1[_i];
                    if (tarEntity_1 == null)
                        continue;
                    if (entity.iii == tarEntity_1.iii)
                        continue;
                    // 同阵营
                    var camp = entity.campCom.camp;
                    var tarCamp = tarEntity_1.campCom.camp;
                    if (camp == null || tarCamp == null || camp == tarCamp)
                        continue;
                    // 射程范围外
                    var range = entity.attackCom.range;
                    distance = MathUtils.CalcTwoPointDistance(entity.x, entity.y, tarEntity_1.x, tarEntity_1.y, true);
                    if (distance > range)
                        continue;
                    // 此处只对第一个人进行攻击
                    entity.actionCom.setAction(war.Action.Attack);
                    entity.speedCom.setSpeed(0);
                    entity.attackCom.setTarArray([tarEntity_1]);
                    break;
                }
            }
            // 攻击
            var tarEntity = entity.attackCom.atkTarArray[0]; // 只打一个人
            if (entity.actionCom.action == war.Action.Attack && entity.attackLoopOK == true && tarEntity != null) {
                var entityInfo = war.WarDataMgr.Ins().infoMap.get(tarEntity.iii);
                if (entityInfo == null)
                    return;
                tarEntity.healthCom.setHealth(-entity.attackCom.attack * deltaTime);
                if (tarEntity.healthCom.isDie() == true) {
                    var infoView = war.WarDataMgr.Ins().infoMap.get(tarEntity.iii);
                    if (infoView != null && infoView.parent != null && infoView.parent.getChildIndex(infoView) >= 0)
                        infoView.parent.removeChild(infoView);
                    if (tarEntity != null && tarEntity.parent != null && tarEntity.parent.getChildIndex(tarEntity) >= 0) {
                        war.WarDataMgr.Ins().removeEntity(tarEntity.iii);
                        tarEntity.parent.removeChild(tarEntity);
                    }
                    entity.actionCom.setAction(war.Action.None);
                    entity.attackCom.setTarArray([]);
                }
                entity.attackLoopOK = false;
            }
        };
        return AttackSystem;
    }(war.SystemBase));
    war.AttackSystem = AttackSystem;
    __reflect(AttackSystem.prototype, "war.AttackSystem");
})(war || (war = {}));
//# sourceMappingURL=AttackSystem.js.map