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
    var PathSystem = (function (_super) {
        __extends(PathSystem, _super);
        function PathSystem() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        PathSystem.prototype.init = function () {
            this.sysType = war.System.Path;
        };
        PathSystem.prototype.destroy = function () {
        };
        PathSystem.prototype.update = function (entity, dt) {
            if (entity == null)
                return;
            var pathCom = entity.getComponent(war.Component.Path);
            var speedCom = entity.getComponent(war.Component.Speed);
            var posCom = entity.getComponent(war.Component.Pos);
            if (pathCom == null || speedCom == null || posCom == null)
                return;
            var node = pathCom.getCurrNode();
            if (node == null) {
                entity.removeComponent(war.Component.Path);
                var gridX = war.WarUtils.LocalX2GridX(posCom.x);
                var gridY = war.WarUtils.LocalX2GridX(posCom.y);
                var node_1 = war.WarDataMgr.Ins().getCanWalkNodeByRandom();
                var pathCom_1 = new war.PathCom();
                var path = war.WarDataMgr.Ins().findPath(gridX, gridY, node_1.x, node_1.y);
                pathCom_1.setPath(path);
                entity.setComponent(pathCom_1);
                return;
            }
            var localX = war.WarUtils.GridX2LocalX(node.x);
            var localY = war.WarUtils.GridX2LocalX(node.y);
            var x = posCom.x;
            var y = posCom.y;
            var angle = speedCom.angle;
            if (angle == 0 && x < localX)
                return;
            if (angle == 90 && y < localY)
                return;
            if (angle == 180 && x > localX)
                return;
            if (angle == 270 && y > localY)
                return;
            if (angle > 0 && angle < 90)
                if ((x > localX && y > localY) == false)
                    return;
            if (angle > 90 && angle < 180)
                if ((x < localX && y > localY) == false)
                    return;
            if (angle > 180 && angle < 270)
                if ((x < localX && y < localY) == false)
                    return;
            if (angle > 270 && angle < 360)
                if ((x > localX && y < localY) == false)
                    return;
            node = pathCom.toNextNode();
            node.destroy();
            node = null;
        };
        return PathSystem;
    }(war.SystemBase));
    war.PathSystem = PathSystem;
    __reflect(PathSystem.prototype, "war.PathSystem");
})(war || (war = {}));
//# sourceMappingURL=PathSystem.js.map