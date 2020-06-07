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
     */
    var PathSystem = (function (_super) {
        __extends(PathSystem, _super);
        function PathSystem() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        PathSystem.prototype.init = function () {
            this.systemId = war.SYSTEM.PATH;
        };
        PathSystem.prototype.destroy = function () {
        };
        PathSystem.prototype.update = function (deltaTime) {
            var entity;
            var warData = war.WarDataMgr.Ins();
            for (var idStr in warData.entityMap.map) {
                entity = warData.entityMap.get(Number(idStr));
                if (entity == null)
                    continue;
                var pCom = entity.getCom(war.COMPONENT.PATH);
                if (pCom == null)
                    continue;
                var currNode = pCom.getCurr();
                var lastNode = pCom.getLast();
                if (currNode == null)
                    continue;
                if (lastNode != null) {
                    var localXY1 = warData.calcLocalXY(lastNode.x, lastNode.y);
                    var localXY2 = warData.calcLocalXY(currNode.x, currNode.y);
                    var d1 = MathUtils.CalcDistance(localXY1[0], localXY1[1], localXY2[0], localXY2[1]);
                    var d2 = MathUtils.CalcDistance(localXY1[0], localXY1[1], entity.x, entity.y);
                    if (d2 >= d1)
                        pCom.toNext();
                }
                else {
                    pCom.toNext();
                }
            }
        };
        return PathSystem;
    }(war.SystemBase));
    war.PathSystem = PathSystem;
    __reflect(PathSystem.prototype, "war.PathSystem");
})(war || (war = {}));
//# sourceMappingURL=PathSystem.js.map