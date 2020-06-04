var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/**
 * Node 节点
 */
var astar;
(function (astar) {
    var NodeItem = (function () {
        function NodeItem(x, y) {
            this.walkable = true;
            this.costMultiplier = 1.0;
            this.x = x;
            this.y = y;
        }
        NodeItem.prototype.destroy = function () {
        };
        return NodeItem;
    }());
    astar.NodeItem = NodeItem;
    __reflect(NodeItem.prototype, "astar.NodeItem");
})(astar || (astar = {}));
//# sourceMappingURL=Node.js.map