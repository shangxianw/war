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
     * 射程系统
     * 检测实体是否在射程范围内
     */
    var RangeSystem = (function (_super) {
        __extends(RangeSystem, _super);
        function RangeSystem() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        RangeSystem.prototype.init = function () {
            this.systemId = war.SYSTEM.RANGE;
        };
        RangeSystem.prototype.destroy = function () {
        };
        RangeSystem.prototype.update = function (entity, deltaTime) {
            if (entity == null)
                return;
            if (entity.range == null)
                return;
            var entityArray = DataUtils.CopyArray(war.WarDataMgr.Ins().entityMap.values());
            var distance = 0;
            for (var _i = 0, entityArray_1 = entityArray; _i < entityArray_1.length; _i++) {
                var tarEntity = entityArray_1[_i];
                if (tarEntity == null)
                    continue;
                if (entity.uniqueCode == tarEntity.uniqueCode)
                    continue;
                // 同阵营
                var camp = entity.camp;
                var tarCamp = tarEntity.camp;
                if (camp == null || tarCamp == null || camp == tarCamp)
                    continue;
                // 射程范围外
                var range = entity.range;
                distance = MathUtils.CalcDistance(entity.x, entity.y, tarEntity.x, tarEntity.y, true);
                if (distance > range)
                    continue;
                // 此处只对第一个人进行攻击
                entity.action = war.ACTION.ATTACK;
                entity.speed = 0;
                entity.attackTargets = [];
                entity.attackTargets.push(tarEntity);
                break;
            }
        };
        return RangeSystem;
    }(war.SystemBase));
    war.RangeSystem = RangeSystem;
    __reflect(RangeSystem.prototype, "war.RangeSystem");
})(war || (war = {}));
//# sourceMappingURL=RangeSystem.js.map