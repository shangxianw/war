var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var astar;
(function (astar) {
    /**
     * A星算法
     * 参考文章：https://blog.csdn.net/hitwhylz/article/details/23089415
     * 1、把起点加入到openList
     * 2、重复以下过程：
     * 		a、遍历openList，找到F值最小的节点，把它当做当前要处理的节点。
     * 		b、把这个节点加入到closeList。
     * 		c、对这个节点周围的8个相邻节点遍历：
     * 			1)、如果它不可抵达或已在closeList中，忽略它。
     * 			2)、如果它不在openList，则把它加入到openList，并将它的父节点设置为当前节点，计算FGH值。
     * 			3)、如果它已经在openList中，比较一下该节点原先的g值与当前计算的g值，去最小的为准，如果新值更小，则将它的父节点设置单位当前节点。
     * 		d、结束标志：
     * 			1)、当把终点加入到openList中，此时终点找到。
     * 			2)、查找终点失败，openList为空，此时没有路径。
     *
     */
    var AStar = (function () {
        function AStar() {
            this.init();
        }
        AStar.prototype.init = function () {
            this.hCost = 10;
            this.costArray = [
                14, 10, 14,
                10, 10,
                14, 10, 14
            ];
            this.posArray = [
                [-1, -1], [0, -1], [1, -1],
                [-1, 0], [1, 0],
                [-1, 1], [0, 1], [1, 1]
            ];
        };
        AStar.prototype.destroy = function () {
        };
        AStar.prototype.findPath = function (startX, startY, endX, endY, grid) {
            this.grid = grid;
            this.openArray = [];
            this.closeArray = [];
            this.startNode = this.grid.getNode(startX, startY);
            this.endNode = this.grid.getNode(endX, endY);
            this.grid = grid;
            this.tmpPath = this.search();
            var p = this.floydPath(this.tmpPath);
            return p;
        };
        AStar.prototype.search = function () {
            var currNode = this.startNode;
            this.openArray.push(currNode);
            while (currNode != this.endNode) {
                currNode = this.getMinFNode();
                if (currNode == null)
                    break;
                this.closeArray.push(currNode);
                var node = void 0;
                for (var i = 0, len = 8; i < len; i++) {
                    node = this.grid.getNode(currNode.x + this.posArray[i][0], currNode.y + this.posArray[i][1]);
                    if (node == null)
                        continue;
                    if (node.x == this.endNode.x && node.y == this.endNode.y) {
                        node.parent = currNode;
                        return this.packPath();
                    }
                    if (this.closeArray.indexOf(node) >= 0)
                        continue;
                    if (node.walkable == false)
                        continue;
                    if (node.g != 0 && currNode.g + this.costArray[i] > node.g)
                        continue;
                    node.parent = currNode;
                    node.g = node.parent.g + this.costArray[i];
                    node.h = (Math.abs(this.endNode.y - node.y) + Math.abs(this.endNode.x - node.x)) * this.hCost;
                    node.f = node.g + node.h;
                    this.openArray.push(node);
                }
                if (this.openArray.length <= 0) {
                    return [];
                }
            }
            return [];
        };
        AStar.prototype.floydPath = function (path) {
            var a;
            var b;
            var c;
            // 去掉同一直线上的点，只保留端点
            var rateA;
            var rateB;
            for (var i = 0; i < path.length; i++) {
                a = path[i];
                b = path[i + 1];
                c = path[i + 2];
                if (a == null || b == null || c == null)
                    break;
                if ((b.y - a.y == 0 && c.y - b.y == 0) == true ||
                    (b.x - a.x == 0 && c.x - b.x == 0) == true) {
                    path.splice(i + 1, 1);
                    i--;
                    continue;
                }
                rateA = (b.x - a.x) / (b.y - a.y);
                rateB = (c.x - b.x) / (c.y - b.y);
                if (rateA == rateB) {
                    path.splice(i + 1, 1);
                    i--;
                }
            }
            // 消除拐点
            var len = path.length;
            var ret;
            for (var i = len - 1; i >= 0; i--) {
                for (var j = 0; j <= i - 2; j++) {
                    // ret = true;// 判断线段是否穿过节点，没穿过
                    ret = this.checkIsCross(path[i].x, path[i].y, path[j].x, path[j].y);
                    if (!ret) {
                        for (var k = i - 1; k > j; k--) {
                            path.splice(k, 1);
                        }
                        i = j + 1;
                        len = path.length;
                        break;
                    }
                }
            }
            return path;
        };
        AStar.prototype.packPath = function () {
            var currNode = this.endNode;
            var path = [this.grid.getNode(currNode.x, currNode.y)];
            while (currNode != this.startNode) {
                currNode = currNode.parent;
                if (currNode == null)
                    break;
                path.unshift(this.grid.getNode(currNode.x, currNode.y));
            }
            var arr = [].concat(this.openArray, this.closeArray);
            for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
                var node = arr_1[_i];
                node.resetGHF();
            }
            return path;
        };
        AStar.prototype.getMinFNode = function () {
            var minIndex;
            var currIndex = 0;
            for (var _i = 0, _a = this.openArray; _i < _a.length; _i++) {
                var openNode = _a[_i];
                if (minIndex == null) {
                    minIndex = currIndex;
                }
                else {
                    if (openNode.f < this.openArray[minIndex].f) {
                        minIndex = currIndex;
                    }
                }
                currIndex++;
            }
            return this.openArray.splice(minIndex, 1)[0];
        };
        AStar.prototype.checkIsCross = function (x1, y1, x2, y2) {
            var cellSize = war.WarDataMgr.Ins().grid.space;
            var startX = x1 * cellSize + cellSize * 0.5;
            var startY = y1 * cellSize + cellSize * 0.5;
            var endX = x2 * cellSize + cellSize * 0.5;
            var endY = y2 * cellSize + cellSize * 0.5;
            var nodeArray = this.grid.getNodeArray();
            for (var _i = 0, nodeArray_1 = nodeArray; _i < nodeArray_1.length; _i++) {
                var node = nodeArray_1[_i];
                if (!node.walkable && this.isLineCross(node, startX, startY, endX, endY))
                    return true;
            }
            return false;
        };
        //判断线段是否穿过该节点
        AStar.prototype.isLineCross = function (node, x1, y1, x2, y2) {
            function dcmp(_x) {
                if (Math.abs(_x) < 0.001)
                    return 0;
                else
                    return _x < 0 ? -1 : 1;
            }
            function dot(ax, ay, bx, by) {
                return ax * bx + ay * by;
            }
            function cross(ax, ay, bx, by) {
                return ax * by - ay * bx;
            }
            function inSegment(px, py, ax, ay, bx, by) {
                return dcmp(cross(ax - px, ay - py, bx - px, by - py)) == 0 && dcmp(dot(ax - px, ay - py, bx - px, by - py)) <= 0;
            }
            function segmentIntersection(a1x, a1y, a2x, a2y, b1x, b1y, b2x, b2y) {
                var c1 = cross(a2x - a1x, a2y - a1y, b1x - a1x, b1y - a1y);
                var c2 = cross(a2x - a1x, a2y - a1y, b2x - a1x, b2y - a1y);
                var c3 = cross(b2x - b1x, b2y - b1y, a1x - b1x, a1y - b1y);
                var c4 = cross(b2x - b1x, b2y - b1y, a2x - b1x, a2y - b1y);
                if (dcmp(c1) * dcmp(c2) < 0 && dcmp(c3) * dcmp(c4) < 0)
                    return true;
                if (dcmp(c1) == 0 && inSegment(b1x, b1y, a1x, a1y, a2x, a2y))
                    return true;
                if (dcmp(c2) == 0 && inSegment(b2x, b2y, a1x, a1y, a2x, a2y))
                    return true;
                if (dcmp(c3) == 0 && inSegment(a1x, a1y, b1x, b1y, b2x, b2y))
                    return true;
                if (dcmp(c4) == 0 && inSegment(a2x, a2y, b1x, b1y, b2x, b2y))
                    return true;
                return false;
            }
            var cellSize = war.WarDataMgr.Ins().grid.space;
            var xmin = node.x * cellSize;
            var xmax = xmin + cellSize;
            var ymin = node.y * cellSize;
            var ymax = ymin + cellSize;
            if (x1 >= xmin && x1 <= xmax
                && x2 >= xmin && x2 <= xmax
                && y1 >= ymin && y1 <= ymax
                && y2 >= ymin && y2 <= ymax)
                return true;
            if (x1 == x2 && y1 == y2) {
                return false;
            }
            //格子中心点到线段的距离 大于 cellSize*1.414 则线段和网格肯定不相交 通过这个过滤大部分情况 提高效率
            var dis = this.distanceFromPointToLine(xmin + cellSize / 2, ymin + cellSize / 2, x1, y1, x2, y2);
            if (dis >= cellSize * 1.42)
                return false;
            //线段和格子的四个边框相交判断
            if (segmentIntersection(x1, y1, x2, y2, xmin, ymin, xmax, ymin))
                return true;
            if (segmentIntersection(x1, y1, x2, y2, xmax, ymin, xmax, ymax))
                return true;
            if (segmentIntersection(x1, y1, x2, y2, xmax, ymax, xmin, ymax))
                return true;
            if (segmentIntersection(x1, y1, x2, y2, xmin, ymax, xmin, ymin))
                return true;
            return false;
        };
        // 计算点(x, y)到经过两点(x1, y1)和(x2, y2)的直线的距离 (点到直线的垂直距离)
        AStar.prototype.distanceFromPointToLine = function (x, y, x1, y1, x2, y2) {
            var a = y2 - y1;
            var b = x1 - x2;
            var c = x2 * y1 - x1 * y2;
            if (Math.abs(a) > 0 || Math.abs(b) > 0)
                return Math.abs(a * x + b * y + c) / Math.sqrt(a * a + b * b);
            else
                return 0;
        };
        return AStar;
    }());
    astar.AStar = AStar;
    __reflect(AStar.prototype, "astar.AStar");
})(astar || (astar = {}));
//# sourceMappingURL=AStar.js.map