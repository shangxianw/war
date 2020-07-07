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
     * 路径系统
     * 判断需不需要进行下一个阶段
     * 而不会要求计算是否获取新的路径
     */
    var PathSystem = (function (_super) {
        __extends(PathSystem, _super);
        function PathSystem() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        PathSystem.prototype.init = function () {
            this.systemId = war.System.Path;
        };
        PathSystem.prototype.destroy = function () {
        };
        PathSystem.prototype.update = function (entity, deltaTime) {
            var warData = war.WarDataMgr.Ins();
            if (entity == null)
                return;
            var pCom = entity.getCom(war.Component.Path);
            if (pCom == null)
                return;
            var currStartNode = pCom.getCurrStartNode();
            if (currStartNode != null) {
                var currEndNode = pCom.getCurrEndNode();
                if (currEndNode == null) {
                    entity.removeCom(war.Component.Path);
                    entity.actionCom.setAction(war.Action.None);
                    return;
                }
                var startX = war.WarUtils.ToLocalX(currStartNode.x);
                var startY = war.WarUtils.ToLocalY(currStartNode.y);
                var endX = war.WarUtils.ToLocalX(currEndNode.x);
                var endY = war.WarUtils.ToLocalY(currEndNode.y);
                var d1 = MathUtils.CalcTwoPointDistance(startX, startY, endX, endY);
                var d2 = MathUtils.CalcTwoPointDistance(startX, startY, entity.x, entity.y);
                if (d2 >= d1) {
                    pCom.toNextNode();
                }
                war.DrawUtils.DrawPath(entity);
            }
            else {
            }
        };
        return PathSystem;
    }(war.SystemBase));
    war.PathSystem = PathSystem;
    __reflect(PathSystem.prototype, "war.PathSystem");
})(war || (war = {}));
//# sourceMappingURL=PathSystem.js.map