var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/**
 * A星寻路
 */
var astar;
(function (astar) {
    var AStar = (function () {
        function AStar() {
            this.straightCost = 1.0; //上下左右走的代价
            this.diagCost = Math.SQRT2; //斜着走的代价 
            this.heuristic = this.diagonal;
        }
        // 寻路
        AStar.prototype.findPath = function (grid) {
            this.grid = grid;
            this.open = [];
            this.closed = [];
            this.startNode = this.grid.startNode;
            this.endNode = this.grid.endNode;
            this.startNode.g = 0;
            this.startNode.h = this.heuristic(this.startNode);
            this.startNode.f = this.startNode.g + this.startNode.h;
            return this.search();
        };
        // 查找路径
        AStar.prototype.search = function () {
            var node = this.startNode;
            while (node != this.endNode) {
                var startX = Math.max(0, node.x - 1);
                var endX = Math.min(this.grid.numCols - 1, node.x + 1);
                var startY = Math.max(0, node.y - 1);
                var endY = Math.min(this.grid.numRows - 1, node.y + 1);
                for (var i = startX; i <= endX; i++) {
                    for (var j = startY; j <= endY; j++) {
                        //不让斜着走
                        // if(i != node.x && j != node.y){
                        //     continue;
                        // }
                        var test = this.grid.getNode(i, j);
                        if (test == node ||
                            !test.walkable ||
                            !this.grid.getNode(node.x, test.y).walkable ||
                            !this.grid.getNode(test.x, node.y).walkable) {
                            continue;
                        }
                        var cost = this.straightCost;
                        if (!((node.x == test.x) || (node.y == test.y))) {
                            cost = this.diagCost;
                        }
                        var g = node.g + cost * test.costMultiplier;
                        var h = this.heuristic(test);
                        var f = g + h;
                        if (this.isOpen(test) || this.isClosed(test)) {
                            if (test.f > f) {
                                test.f = f;
                                test.g = g;
                                test.h = h;
                                test.parent = node;
                            }
                        }
                        else {
                            test.f = f;
                            test.g = g;
                            test.h = h;
                            test.parent = node;
                            this.open.push(test);
                        }
                    }
                }
                for (var o = 0; o < this.open.length; o++) {
                }
                this.closed.push(node);
                if (this.open.length == 0) {
                    console.log("AStar >> no path found");
                    return false;
                }
                var openLen = this.open.length;
                for (var m = 0; m < openLen; m++) {
                    for (var n = m + 1; n < openLen; n++) {
                        if (this.open[m].f > this.open[n].f) {
                            var temp = this.open[m];
                            this.open[m] = this.open[n];
                            this.open[n] = temp;
                        }
                    }
                }
                node = this.open.shift();
            }
            this.buildPath();
            return true;
        };
        //获取路径
        AStar.prototype.buildPath = function () {
            this.path = new Array();
            var node = this.endNode;
            this.path.push(node);
            while (node != this.startNode) {
                node = node.parent;
                this.path.unshift(node);
            }
        };
        // 是否待检查
        AStar.prototype.isOpen = function (node) {
            for (var i = 0; i < this.open.length; i++) {
                if (this.open[i] == node) {
                    return true;
                }
            }
            return false;
        };
        // 是否已检查
        AStar.prototype.isClosed = function (node) {
            for (var i = 0; i < this.closed.length; i++) {
                if (this.closed[i] == node) {
                    return true;
                }
            }
            return false;
        };
        // 曼哈顿算法
        AStar.prototype.manhattan = function (node) {
            return Math.abs(node.x - this.endNode.x) * this.straightCost + Math.abs(node.y + this.endNode.y) * this.straightCost;
        };
        AStar.prototype.euclidian = function (node) {
            var dx = node.x - this.endNode.x;
            var dy = node.y - this.endNode.y;
            return Math.sqrt(dx * dx + dy * dy) * this.straightCost;
        };
        AStar.prototype.diagonal = function (node) {
            var dx = Math.abs(node.x - this.endNode.x);
            var dy = Math.abs(node.y - this.endNode.y);
            var diag = Math.min(dx, dy);
            var straight = dx + dy;
            return this.diagCost * diag + this.straightCost * (straight - 2 * diag);
        };
        Object.defineProperty(AStar.prototype, "visited", {
            get: function () {
                return this.closed.concat(this.open);
            },
            enumerable: true,
            configurable: true
        });
        AStar.prototype.destroy = function () {
        };
        return AStar;
    }());
    astar.AStar = AStar;
    __reflect(AStar.prototype, "astar.AStar");
})(astar || (astar = {}));
//# sourceMappingURL=AStar.js.map