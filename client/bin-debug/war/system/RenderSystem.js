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
     * 渲染系统
     */
    var RenderSystem = (function (_super) {
        __extends(RenderSystem, _super);
        function RenderSystem() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        RenderSystem.prototype.init = function () {
            this.systemId = war.System.Render;
        };
        RenderSystem.prototype.destroy = function () {
        };
        RenderSystem.prototype.update = function (entity, deltaTime) {
            if (entity == null)
                return;
            if (entity.entityType == war.Entity.Queen) {
                // 暂时不处理，是个bug，会导致不能移动
                // this.showRenderByQueen(entity, entity.action);
            }
            else {
                if (entity.actionCom.action == war.Action.Stand) {
                    this.showRender(entity, "stand");
                }
                else if (entity.actionCom.action == war.Action.Run) {
                    this.showRender(entity, "run");
                }
                else if (entity.actionCom.action == war.Action.Attack) {
                    this.showRender(entity, "attack");
                }
            }
        };
        RenderSystem.prototype.showRender = function (entity, action) {
            var dir = entity.dirCom.direction;
            if (dir == war.Direction.Right) {
                entity.mc.scaleX = 1;
                entity.mc.play(action + "2", -1);
            }
            else if (dir == war.Direction.RightDown) {
                entity.mc.scaleX = 1;
                entity.mc.play(action + "3", -1);
            }
            else if (dir == war.Direction.Down) {
                entity.mc.scaleX = 1;
                entity.mc.play(action + "4", -1);
            }
            else if (dir == war.Direction.LeftDown) {
                entity.mc.scaleX = -1;
                entity.mc.play(action + "3", -1);
            }
            else if (dir == war.Direction.Left) {
                entity.mc.scaleX = -1;
                entity.mc.play(action + "2", -1);
            }
            else if (dir == war.Direction.LeftUp) {
                entity.mc.scaleX = -1;
                entity.mc.play(action + "1", -1);
            }
            else if (dir == war.Direction.Up) {
                entity.mc.scaleX = -1;
                entity.mc.play(action + "0", -1);
            }
            else if (dir == war.Direction.RightUp) {
                entity.mc.scaleX = 1;
                entity.mc.play(action + "1", -1);
            }
        };
        RenderSystem.prototype.showRenderByQueen = function (entity, action) {
            var actionName = Utils.GetActionName(action);
            entity.mc.play("" + action, -1);
        };
        return RenderSystem;
    }(war.SystemBase));
    war.RenderSystem = RenderSystem;
    __reflect(RenderSystem.prototype, "war.RenderSystem");
})(war || (war = {}));
//# sourceMappingURL=RenderSystem.js.map