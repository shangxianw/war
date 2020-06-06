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
                var pCom = entity.getCom(war.COMPONENT.PATH);
                if (pCom != null) {
                    var sCom = entity.getCom(war.COMPONENT.SPEED);
                    if (sCom != null) {
                        var currTar = pCom.getCurr();
                        if (currTar != null) {
                            var aCom = entity.getCom(war.COMPONENT.ACTION);
                            var localX = warData.grid.startX + warData.grid.space * currTar.x;
                            var localY = warData.grid.startY + warData.grid.space * currTar.y;
                            if (entity.x == localX && entity.y == localY)
                                pCom.toNext();
                            else if (entity.x < localX && entity.y == localY) {
                                aCom.setDir(war.DIRECTION.RIGHT);
                                this.setRun(entity, war.DIRECTION.RIGHT);
                            }
                            else if (entity.x > localX && entity.y == localY) {
                                aCom.setDir(war.DIRECTION.LEFT);
                                this.setRun(entity, war.DIRECTION.LEFT);
                            }
                            else if (entity.x == localX && entity.y < localY) {
                                aCom.setDir(war.DIRECTION.DOWN);
                                this.setRun(entity, war.DIRECTION.DOWN);
                            }
                            else if (entity.x == localX && entity.y > localY) {
                                aCom.setDir(war.DIRECTION.UP);
                                this.setRun(entity, war.DIRECTION.UP);
                            }
                            else if (entity.x < localX && entity.y < localY) {
                                aCom.setDir(war.DIRECTION.DOWN);
                                this.setRun(entity, war.DIRECTION.RIGHT_DOWN);
                            }
                            else if (entity.x < localX && entity.y > localY) {
                                aCom.setDir(war.DIRECTION.UP);
                                this.setRun(entity, war.DIRECTION.RIGHT_UP);
                            }
                            else if (entity.x > localX && entity.y < localY) {
                                aCom.setDir(war.DIRECTION.DOWN);
                                this.setRun(entity, war.DIRECTION.LEFT_DOWN);
                            }
                            else if (entity.x > localX && entity.y > localY) {
                                aCom.setDir(war.DIRECTION.UP);
                                this.setRun(entity, war.DIRECTION.LEFT_UP);
                            }
                        }
                        else {
                            this.setStand(entity, 3);
                            entity.removeCom(war.COMPONENT.PATH);
                            entity.removeCom(war.COMPONENT.SPEED);
                        }
                    }
                    else {
                    }
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