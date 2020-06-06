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
            for (var idStr in warData.entityMap.map) {
                entity = warData.entityMap.get(Number(idStr));
                if (entity == null)
                    continue;
                // 当有路径又有速度时，就执行跑的动作
                var pCom = entity.getCom(war.COMPONENT.PATH);
                var sCom = entity.getCom(war.COMPONENT.SPEED);
                if (pCom != null && sCom != null) {
                    var currTar = pCom.getCurr();
                    var aCom = entity.getCom(war.COMPONENT.ACTION);
                    if (currTar != null) {
                        var localX = warData.grid.startX + warData.grid.space * currTar.x;
                        var localY = warData.grid.startY + warData.grid.space * currTar.y;
                        this.setRun(entity, aCom.getDir(), localX, localY);
                    }
                    else {
                        entity.removeCom(war.COMPONENT.PATH);
                        entity.removeCom(war.COMPONENT.SPEED);
                        aCom.setAction(war.ACTION.STAND);
                    }
                }
                else {
                    var aCom = entity.getCom(war.COMPONENT.ACTION);
                    if (aCom.getAction() == war.ACTION.STAND) {
                        this.setStand(entity, aCom.getDir());
                    }
                }
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
        ActionSystem.prototype.setRun = function (entity, dir, localX, localY) {
            var pCom = entity.getCom(war.COMPONENT.PATH);
            var sCom = entity.getCom(war.COMPONENT.SPEED);
            var aCom = entity.getCom(war.COMPONENT.ACTION);
            if (entity.x == localX && entity.y == localY)
                pCom.toNext();
            else if (entity.x < localX && entity.y == localY) {
                aCom.setDir(war.DIRECTION.RIGHT);
                entity.mc.scaleX = 1;
                entity.mc.startPlay("run3", -1);
            }
            else if (entity.x > localX && entity.y == localY) {
                aCom.setDir(war.DIRECTION.LEFT);
                entity.mc.scaleX = -1;
                entity.mc.startPlay("run3", -1);
            }
            else if (entity.x == localX && entity.y < localY) {
                aCom.setDir(war.DIRECTION.DOWN);
                entity.mc.scaleX = 1;
                entity.mc.startPlay("run5", -1);
            }
            else if (entity.x == localX && entity.y > localY) {
                aCom.setDir(war.DIRECTION.UP);
                entity.mc.scaleX = 1;
                entity.mc.startPlay("run0", -1);
            }
            else if (entity.x < localX && entity.y < localY) {
                aCom.setDir(war.DIRECTION.DOWN);
                entity.mc.scaleX = 1;
                entity.mc.startPlay("run4", -1);
            }
            else if (entity.x < localX && entity.y > localY) {
                aCom.setDir(war.DIRECTION.UP);
                entity.mc.scaleX = 1;
                entity.mc.startPlay("run2", -1);
            }
            else if (entity.x > localX && entity.y < localY) {
                aCom.setDir(war.DIRECTION.DOWN);
                entity.mc.scaleX = -1;
                entity.mc.startPlay("run4", -1);
            }
            else if (entity.x > localX && entity.y > localY) {
                aCom.setDir(war.DIRECTION.UP);
                entity.mc.scaleX = -1;
                entity.mc.startPlay("run2", -1);
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
        return ActionSystem;
    }(war.SystemBase));
    war.ActionSystem = ActionSystem;
    __reflect(ActionSystem.prototype, "war.ActionSystem");
})(war || (war = {}));
//# sourceMappingURL=ActionSystem.js.map