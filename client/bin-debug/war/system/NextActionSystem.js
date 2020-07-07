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
     * 下一步操作系统
     * 当实体做完一个动作之后，就会停在原地，此时应该分配他做下一个操作
     */
    var NextActionSystem = (function (_super) {
        __extends(NextActionSystem, _super);
        function NextActionSystem() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        NextActionSystem.prototype.init = function () {
            this.systemId = war.System.NextAction;
        };
        NextActionSystem.prototype.destroy = function () {
        };
        NextActionSystem.prototype.update = function (entity, deltaTime) {
            if (entity == null)
                return;
            if (entity.actionCom.action != war.Action.None)
                return;
            var pathC = entity.getCom(war.Component.Path);
            if (pathC != null) {
                entity.actionCom.setAction(war.Action.Run);
                entity.speedCom.setSpeed(40);
                return;
            }
            else if (entity.entityType == war.Entity.Hero) {
                var pathc = WarPool.Ins().pop(war.PathCom);
                var x = war.WarUtils.ToGridX(entity.x);
                var y = war.WarUtils.ToGridY(entity.y);
                var pos = war.WarDataMgr.Ins().getEnemyTarget(entity);
                var path = war.WarDataMgr.Ins().findPath(x, y, pos[0], pos[1]);
                pathc.setPath(path);
                entity.setCom(pathc);
            }
            if (entity.entityType == war.Entity.King || entity.entityType == war.Entity.Queen) {
                entity.actionCom.setAction(war.Action.Stand);
            }
        };
        return NextActionSystem;
    }(war.SystemBase));
    war.NextActionSystem = NextActionSystem;
    __reflect(NextActionSystem.prototype, "war.NextActionSystem");
})(war || (war = {}));
//# sourceMappingURL=NextActionSystem.js.map