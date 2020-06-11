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
     * 行为系统
     * 如果拥有路径组件，则为跑，添加速度组件
     * 如果没有路径组件，则为站或者攻击。
     */
    var ActionSystem = (function (_super) {
        __extends(ActionSystem, _super);
        function ActionSystem() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        ActionSystem.prototype.init = function () {
            this.systemId = war.SYSTEM.ACTION;
        };
        ActionSystem.prototype.destroy = function () {
        };
        ActionSystem.prototype.update = function (deltaTime) {
            var entity;
            var warData = war.WarDataMgr.Ins();
            for (var _i = 0, _a = warData.entityMap.values(); _i < _a.length; _i++) {
                var entity_1 = _a[_i];
                if (entity_1 == null)
                    continue;
                var aCom = entity_1.getCom(war.COMPONENT.ACTION);
                if (aCom == null)
                    continue;
                var sCom = entity_1.getCom(war.COMPONENT.SPEED);
                if (sCom == null)
                    continue;
                if (aCom.action == war.ACTION.RUN) {
                    this.setRun(entity_1);
                }
                else if (aCom.action == war.ACTION.STAND) {
                    this.setStand(entity_1);
                }
                else if (aCom.action == war.ACTION.ATTACK) {
                    this.setAttack(entity_1);
                }
            }
        };
        ActionSystem.prototype.setStand = function (entity) {
            var aCom = entity.getCom(war.COMPONENT.ACTION);
            var dir = aCom.direction;
            if (dir == war.DIRECTION.UP) {
                entity.mc.scaleX = 1;
                entity.mc.startPlay("stand0", -1);
            }
            else if (dir == war.DIRECTION.RIGHT_UP) {
                entity.mc.scaleX = 1;
                entity.mc.startPlay("stand1", -1);
            }
            else if (dir == war.DIRECTION.RIGHT) {
                entity.mc.scaleX = 1;
                entity.mc.startPlay("stand2", -1);
            }
            else if (dir == war.DIRECTION.RIGHT_DOWN) {
                entity.mc.scaleX = 1;
                entity.mc.startPlay("stand3", -1);
            }
            else if (dir == war.DIRECTION.DOWN) {
                entity.mc.scaleX = 1;
                entity.mc.startPlay("stand4", -1);
            }
            else if (dir == war.DIRECTION.LEFT_DOWN) {
                entity.mc.scaleX = -1;
                entity.mc.startPlay("stand3", -1);
            }
            else if (dir == war.DIRECTION.LEFT) {
                entity.mc.scaleX = -1;
                entity.mc.startPlay("stand2", -1);
            }
            else if (dir == war.DIRECTION.LEFT_UP) {
                entity.mc.scaleX = -1;
                entity.mc.startPlay("stand1", -1);
            }
        };
        ActionSystem.prototype.setRun = function (entity) {
            var sCom = entity.getCom(war.COMPONENT.SPEED);
            var aCom = entity.getCom(war.COMPONENT.ACTION);
            var angle = sCom.angle;
            var warData = war.WarDataMgr.Ins();
            if (angle > war.ANGLE.UP[0] && angle <= war.ANGLE.UP[1]) {
                aCom.setDir(war.DIRECTION.UP);
                entity.mc.scaleX = 1;
                entity.mc.startPlay("run0", -1);
            }
            else if (angle > war.ANGLE.RIGHT_UP[0] && angle <= war.ANGLE.RIGHT_UP[1]) {
                aCom.setDir(war.DIRECTION.RIGHT_UP);
                entity.mc.scaleX = 1;
                entity.mc.startPlay("run1", -1);
            }
            else if (angle > war.ANGLE.RIGHT[0] || angle <= war.ANGLE.RIGHT[1]) {
                aCom.setDir(war.DIRECTION.RIGHT);
                entity.mc.scaleX = 1;
                entity.mc.startPlay("run2", -1);
            }
            else if (angle > war.ANGLE.RIGHT_DOWN[0] && angle <= war.ANGLE.RIGHT_DOWN[1]) {
                aCom.setDir(war.DIRECTION.RIGHT_DOWN);
                entity.mc.scaleX = 1;
                entity.mc.startPlay("run3", -1);
            }
            else if (angle > war.ANGLE.DOWN[0] && angle <= war.ANGLE.DOWN[1]) {
                aCom.setDir(war.DIRECTION.DOWN);
                entity.mc.scaleX = 1;
                entity.mc.startPlay("run4", -1);
            }
            else if (angle > war.ANGLE.LEFT_DOWN[0] && angle <= war.ANGLE.LEFT_DOWN[1]) {
                aCom.setDir(war.DIRECTION.LEFT_DOWN);
                entity.mc.scaleX = -1;
                entity.mc.startPlay("run3", -1);
            }
            else if (angle > war.ANGLE.LEFT[0] && angle <= war.ANGLE.LEFT[1]) {
                aCom.setDir(war.DIRECTION.LEFT);
                entity.mc.scaleX = -1;
                entity.mc.startPlay("run2", -1);
            }
            else if (angle > war.ANGLE.LEFT_UP[0] && angle <= war.ANGLE.LEFT_UP[1]) {
                aCom.setDir(war.DIRECTION.LEFT_UP);
                entity.mc.scaleX = -1;
                entity.mc.startPlay("run1", -1);
            }
        };
        ActionSystem.prototype.setAttack = function (entity) {
            var sCom = entity.getCom(war.COMPONENT.SPEED);
            var aCom = entity.getCom(war.COMPONENT.ACTION);
            var angle = sCom.angle;
            var warData = war.WarDataMgr.Ins();
            if (angle > war.ANGLE.UP[0] && angle <= war.ANGLE.UP[1]) {
                aCom.setDir(war.DIRECTION.UP);
                entity.mc.scaleX = 1;
                entity.mc.startPlay("attack0", -1);
            }
            else if (angle > war.ANGLE.RIGHT_UP[0] && angle <= war.ANGLE.RIGHT_UP[1]) {
                aCom.setDir(war.DIRECTION.RIGHT_UP);
                entity.mc.scaleX = 1;
                entity.mc.startPlay("attack1", -1);
            }
            else if (angle > war.ANGLE.RIGHT[0] || angle <= war.ANGLE.RIGHT[1]) {
                aCom.setDir(war.DIRECTION.RIGHT);
                entity.mc.scaleX = 1;
                entity.mc.startPlay("attack2", -1);
            }
            else if (angle > war.ANGLE.RIGHT_DOWN[0] && angle <= war.ANGLE.RIGHT_DOWN[1]) {
                aCom.setDir(war.DIRECTION.RIGHT_DOWN);
                entity.mc.scaleX = 1;
                entity.mc.startPlay("attack3", -1);
            }
            else if (angle > war.ANGLE.DOWN[0] && angle <= war.ANGLE.DOWN[1]) {
                aCom.setDir(war.DIRECTION.DOWN);
                entity.mc.scaleX = 1;
                entity.mc.startPlay("attack4", -1);
            }
            else if (angle > war.ANGLE.LEFT_DOWN[0] && angle <= war.ANGLE.LEFT_DOWN[1]) {
                aCom.setDir(war.DIRECTION.LEFT_DOWN);
                entity.mc.scaleX = -1;
                entity.mc.startPlay("attack3", -1);
            }
            else if (angle > war.ANGLE.LEFT[0] && angle <= war.ANGLE.LEFT[1]) {
                aCom.setDir(war.DIRECTION.LEFT);
                entity.mc.scaleX = -1;
                entity.mc.startPlay("attack2", -1);
            }
            else if (angle > war.ANGLE.LEFT_UP[0] && angle <= war.ANGLE.LEFT_UP[1]) {
                aCom.setDir(war.DIRECTION.LEFT_UP);
                entity.mc.scaleX = -1;
                entity.mc.startPlay("attack1", -1);
            }
        };
        return ActionSystem;
    }(war.SystemBase));
    war.ActionSystem = ActionSystem;
    __reflect(ActionSystem.prototype, "war.ActionSystem");
})(war || (war = {}));
//# sourceMappingURL=ActionSystem.js.map