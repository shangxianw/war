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
        ActionSystem.prototype.update = function (entity, deltaTime) {
            var dirCom = entity.getCom(war.COMPONENT.ACTION);
            var action = dirCom.getAction();
            var dir = dirCom.getDir();
            if (dirCom.hasChanged == true) {
                dirCom.hasChanged = false;
                if (action == war.ACTION.RUN) {
                    this.setRun(entity, dir);
                }
                else if (action == war.ACTION.STAND) {
                    this.setStand(entity, dir);
                }
                else if (action == war.ACTION.ATTACK) {
                    this.setAttack(entity, dir);
                }
            }
        };
        ActionSystem.prototype.setAttack = function (entity, dir) {
            if (dir == war.DIRECTION.UP) {
                entity.mc.scaleX = 1;
                entity.mc.startPlay("attack0", -1);
            }
            else if (dir == war.DIRECTION.RIGHT_UP) {
                entity.mc.scaleX = 1;
                entity.mc.startPlay("attack1", -1);
            }
            else if (dir == war.DIRECTION.RIGHT) {
                entity.mc.scaleX = 1;
                entity.mc.startPlay("attack2", -1);
            }
            else if (dir == war.DIRECTION.RIGHT_DOWN) {
                entity.mc.scaleX = 1;
                entity.mc.startPlay("attack3", -1);
            }
            else if (dir == war.DIRECTION.DOWN) {
                entity.mc.scaleX = 1;
                entity.mc.startPlay("attack4", -1);
            }
            else if (dir == war.DIRECTION.LEFT_DOWN) {
                entity.mc.scaleX = -1;
                entity.mc.startPlay("attack3", -1);
            }
            else if (dir == war.DIRECTION.LEFT) {
                entity.mc.scaleX = -1;
                entity.mc.startPlay("attack2", -1);
            }
            else if (dir == war.DIRECTION.LEFT_UP) {
                entity.mc.scaleX = -1;
                entity.mc.startPlay("attack1", -1);
            }
        };
        ActionSystem.prototype.setStand = function (entity, dir) {
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
        ActionSystem.prototype.setRun = function (entity, dir) {
            if (dir == war.DIRECTION.UP) {
                entity.mc.scaleX = 1;
                entity.mc.startPlay("run0", -1);
            }
            else if (dir == war.DIRECTION.RIGHT_UP) {
                entity.mc.scaleX = 1;
                entity.mc.startPlay("run1", -1);
            }
            else if (dir == war.DIRECTION.RIGHT) {
                entity.mc.scaleX = 1;
                entity.mc.startPlay("run2", -1);
            }
            else if (dir == war.DIRECTION.RIGHT_DOWN) {
                entity.mc.scaleX = 1;
                entity.mc.startPlay("run3", -1);
            }
            else if (dir == war.DIRECTION.DOWN) {
                entity.mc.scaleX = 1;
                entity.mc.startPlay("run4", -1);
            }
            else if (dir == war.DIRECTION.LEFT_DOWN) {
                entity.mc.scaleX = -1;
                entity.mc.startPlay("run3", -1);
            }
            else if (dir == war.DIRECTION.LEFT) {
                entity.mc.scaleX = -1;
                entity.mc.startPlay("run2", -1);
            }
            else if (dir == war.DIRECTION.LEFT_UP) {
                entity.mc.scaleX = -1;
                entity.mc.startPlay("run1", -1);
            }
        };
        return ActionSystem;
    }(war.SystemBase));
    war.ActionSystem = ActionSystem;
    __reflect(ActionSystem.prototype, "war.ActionSystem");
})(war || (war = {}));
//# sourceMappingURL=ActionSystem.js.map