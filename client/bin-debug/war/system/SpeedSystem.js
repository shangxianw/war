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
     * 速度系统
     * 主要是计算速度的方向，供移动系统使用
     */
    var SpeedSystem = (function (_super) {
        __extends(SpeedSystem, _super);
        function SpeedSystem() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        SpeedSystem.prototype.init = function () {
            this.systemId = war.SYSTEM.PATH;
        };
        SpeedSystem.prototype.destroy = function () {
        };
        SpeedSystem.prototype.update = function (entity, deltaTime) {
            if (entity == null)
                return;
            if (entity.action == war.ACTION.RUN)
                this.calcByPath(entity);
            else if (entity.action == war.ACTION.ATTACK)
                this.calcByAttack(entity);
        };
        SpeedSystem.prototype.calcByAttack = function (entity) {
            var attackTarEntity = entity.attackTargets[0];
            if (attackTarEntity == null)
                return;
            var startX = war.WarUtils.ToLocalX(entity.x);
            var startY = war.WarUtils.ToLocalY(entity.y);
            var endX = war.WarUtils.ToLocalX(attackTarEntity.x);
            var endY = war.WarUtils.ToLocalY(attackTarEntity.y);
            var angle = MathUtils.CalcAngle(startX, startY, endX, endY);
            entity.angle = angle;
            this.setDir(entity, entity.angle);
        };
        SpeedSystem.prototype.calcByPath = function (entity) {
            var pCom = entity.getCom(war.COMPONENT.PATH);
            if (pCom != null) {
                var currStartNode = pCom.getCurrStartNode();
                if (currStartNode != null) {
                    var currEndNode = pCom.getCurrEndNode();
                    if (currEndNode == null)
                        return;
                    var startX = war.WarUtils.ToLocalX(currStartNode.x);
                    var startY = war.WarUtils.ToLocalY(currStartNode.y);
                    var endX = war.WarUtils.ToLocalX(currEndNode.x);
                    var endY = war.WarUtils.ToLocalY(currEndNode.y);
                    var angle = MathUtils.CalcAngle(startX, startY, endX, endY);
                    entity.angle = angle;
                    this.setDir(entity, entity.angle);
                }
            }
        };
        SpeedSystem.prototype.setDir = function (entity, angle) {
            if (angle > 337.5 || angle <= 22.5) {
                entity.dir = war.DIRECTION.RIGHT;
            }
            else if (angle > 22.5 && angle <= 67.5) {
                entity.dir = war.DIRECTION.RIGHT_DOWN;
            }
            else if (angle > 67.5 && angle <= 112.5) {
                entity.dir = war.DIRECTION.DOWN;
            }
            else if (angle > 112.5 && angle <= 157.5) {
                entity.dir = war.DIRECTION.LEFT_DOWN;
            }
            else if (angle > 157.5 && angle <= 202.5) {
                entity.dir = war.DIRECTION.LEFT;
            }
            else if (angle > 202.5 && angle <= 247.5) {
                entity.dir = war.DIRECTION.LEFT_UP;
            }
            else if (angle > 247.5 && angle <= 292.5) {
                entity.dir = war.DIRECTION.UP;
            }
            else if (angle > 292.5 && angle <= 337.5) {
                entity.dir = war.DIRECTION.RIGHT_UP;
            }
        };
        return SpeedSystem;
    }(war.SystemBase));
    war.SpeedSystem = SpeedSystem;
    __reflect(SpeedSystem.prototype, "war.SpeedSystem");
})(war || (war = {}));
//# sourceMappingURL=SpeedSystem.js.map