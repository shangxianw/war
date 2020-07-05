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
            this.systemId = war.SYSTEM.ATTACK;
        };
        AttackSystem.prototype.destroy = function () {
        };
        AttackSystem.prototype.update = function (entity, deltaTime) {
            if (entity == null)
                return;
            // 攻击
            if (entity.action == war.ACTION.ATTACK && entity.attackLoopOK == true) {
                var tarEntity = entity.attackTargets[0]; // 只打一个人
                if (tarEntity == null)
                    return;
                var entityInfo = war.WarDataMgr.Ins().infoMap.get(tarEntity.uniqueCode);
                if (entityInfo == null)
                    return;
                tarEntity.health -= entity.attack;
                entityInfo.updateHealth(tarEntity.health);
                if (tarEntity.health <= 0) {
                    var infoView = war.WarDataMgr.Ins().infoMap.get(tarEntity.uniqueCode);
                    if (infoView != null && infoView.parent != null && infoView.parent.getChildIndex(infoView) >= 0)
                        infoView.parent.removeChild(infoView);
                    if (tarEntity != null && tarEntity.parent != null && tarEntity.parent.getChildIndex(tarEntity) >= 0) {
                        war.WarDataMgr.Ins().removeEntity(tarEntity.uniqueCode);
                        tarEntity.parent.removeChild(tarEntity);
                    }
                    entity.action = war.ACTION.RUN;
                    entity.speed = 20;
                }
            }
            entity.attackLoopOK = false;
        };
        return AttackSystem;
    }(war.SystemBase));
    war.AttackSystem = AttackSystem;
    __reflect(AttackSystem.prototype, "war.AttackSystem");
})(war || (war = {}));
//# sourceMappingURL=AttackSystem.js.map