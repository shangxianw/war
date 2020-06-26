var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var astar;
(function (astar) {
    var Node = (function () {
        function Node() {
            this.walkable = true;
        }
        Node.prototype.init = function (x, y, walkable) {
            this.resetGHF();
            this.x = x;
            this.y = y;
            this.walkable = walkable;
        };
        Node.prototype.destroy = function () {
        };
        Node.prototype.resetGHF = function () {
            this.g = 0;
            this.h = 0;
            this.f = this.g + this.h;
        };
        return Node;
    }());
    astar.Node = Node;
    __reflect(Node.prototype, "astar.Node");
})(astar || (astar = {}));
//# sourceMappingURL=Node.js.map