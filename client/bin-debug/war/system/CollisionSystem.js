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
     * 碰撞系统
     * 拥有刚体组件，便认为该实体可以移动
     * 负责刷新实体的位置
     */
    var CollisionSystem = (function (_super) {
        __extends(CollisionSystem, _super);
        function CollisionSystem() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        CollisionSystem.prototype.init = function () {
            this.systemId = war.SYSTEM.COLLISION;
        };
        CollisionSystem.prototype.destroy = function () {
        };
        CollisionSystem.prototype.update = function (deltaTime) {
            var entity1;
            var entity2;
            var rCom1;
            var rCom2;
            var warData = war.WarDataMgr.Ins();
            var entityArray = warData.entityMap.values;
            for (var i = 0, len = entityArray.length; i < len; i++) {
                entity1 = entityArray[i];
                if (entity1 == null)
                    continue;
                rCom1 = entity1.getCom(war.COMPONENT.GRIGD);
                if (rCom1 == null)
                    continue;
                for (var j = i + 1, len2 = entityArray.length; j < len2; j++) {
                    entity2 = entityArray[j];
                    if (entity2 == null)
                        continue;
                    rCom2 = entity2.getCom(war.COMPONENT.GRIGD);
                    if (rCom2 == null)
                        continue;
                    var flag = MathUtils.IsCircleIntersect(entity1.x, entity1.y, rCom1.radius, entity2.x, entity2.y, rCom2.radius);
                    if (flag == false)
                        continue;
                    // 以下是碰撞处理
                    var aCom = entity2.getCom(war.COMPONENT.ACTION);
                    if (aCom != null) {
                        // aCom.setAction(ACTION.ATTACK);
                        // entity2.removeCom(COMPONENT.SPEED);
                        var pathCom = entity2.getCom(war.COMPONENT.PATH);
                        var endNode = pathCom.getEndNode();
                        var currNode = pathCom.getCurr();
                        var path = war.WarDataMgr.Ins().findPath(currNode.x, currNode.y - 1, endNode.x, endNode.y);
                        if (MathUtils.IsCircleIntersect(entity1.x, entity1.y, rCom1.radius, path[0].x, path[0].y, rCom2.radius) == false)
                            pathCom.setPath(path);
                        else {
                            path = war.WarDataMgr.Ins().findPath(currNode.x + 1, currNode.y - 1, endNode.x, endNode.y);
                            if (MathUtils.IsCircleIntersect(entity1.x, entity1.y, rCom1.radius, path[0].x, path[0].y, rCom2.radius) == false)
                                pathCom.setPath(path);
                        }
                    }
                }
            }
        };
        return CollisionSystem;
    }(war.SystemBase));
    war.CollisionSystem = CollisionSystem;
    __reflect(CollisionSystem.prototype, "war.CollisionSystem");
})(war || (war = {}));
//# sourceMappingURL=CollisionSystem.js.map