var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var astar;
(function (astar) {
    var Grid = (function () {
        function Grid() {
        }
        Grid.prototype.init = function (numRows, numCols, space) {
            this.numRows = numRows;
            this.numCols = numCols;
            this.space = space;
            this.nodeArray = [];
            var x, y;
            var cannotWalk = [
                [24, 0], [25, 0], [26, 0], [27, 0], [28, 0], [29, 0],
                [24, 1], [25, 1], [26, 1], [27, 1], [28, 1], [29, 1],
                [24, 2], [25, 2], [26, 2], [27, 2], [28, 2], [29, 2],
                [24, 7], [25, 7], [26, 7], [27, 7], [28, 7], [29, 7],
                [24, 8], [25, 8], [26, 8], [27, 8], [28, 8], [29, 8],
                [24, 9], [25, 9], [26, 9], [27, 9], [28, 9], [29, 9],
                [24, 10], [25, 10], [26, 10], [27, 10], [28, 10], [29, 10],
                [24, 11], [25, 11], [26, 11], [27, 11], [28, 11], [29, 11],
                [24, 12], [25, 12], [26, 12], [27, 12], [28, 12], [29, 12],
                [24, 13], [25, 13], [26, 13], [27, 13], [28, 13], [29, 13],
                [24, 14], [25, 14], [26, 14], [27, 14], [28, 14], [29, 14],
                [24, 15], [25, 15], [26, 15], [27, 15], [28, 15], [29, 15],
                [24, 16], [25, 16], [26, 16], [27, 16], [28, 16], [29, 16],
                [24, 20], [25, 20], [26, 20], [27, 20], [28, 20], [29, 20],
                [24, 21], [25, 21], [26, 21], [27, 21], [28, 21], [29, 21],
                [24, 22], [25, 22], [26, 22], [27, 22], [28, 22], [29, 22],
                [24, 23], [25, 23], [26, 23], [27, 23], [28, 23], [29, 23],
            ];
            for (var i = 0, len = this.numRows; i < len; i++) {
                var rowArray = [];
                for (var j = 0, len2 = this.numCols; j < len2; j++) {
                    x = j;
                    y = i;
                    var node = new astar.Node();
                    var walkable = true;
                    for (var _i = 0, cannotWalk_1 = cannotWalk; _i < cannotWalk_1.length; _i++) {
                        var pos = cannotWalk_1[_i];
                        if (pos[0] == x && pos[1] == y) {
                            walkable = false;
                            break;
                        }
                    }
                    node.init(x, y, walkable);
                    rowArray.push(node);
                }
                this.nodeArray.push(rowArray);
            }
        };
        Grid.prototype.destroy = function () {
            for (var i = 0, len = this.numRows; i < len; i++) {
                for (var j = 0, len2 = this.numCols; j < len2; j++) {
                    this.nodeArray[i][j].destroy();
                    this.nodeArray[i][j] = null;
                }
                this.nodeArray[i].length = 0;
                this.nodeArray[i] = null;
            }
            this.nodeArray.length = 0;
            this.nodeArray = null;
        };
        Grid.prototype.getNode = function (x, y) {
            // 第一个是y，第二个是x，容易搞反
            if (this.nodeArray[y] == null)
                return null;
            return this.nodeArray[y][x];
        };
        Grid.prototype.setWalkable = function (x, y, walkable) {
            if (this.nodeArray[y] == null || this.nodeArray[y][x] == null)
                return false;
            this.nodeArray[y][x].walkable = walkable;
            return true;
        };
        Grid.prototype.getNodeArray = function () {
            var tarArray = [];
            for (var _i = 0, _a = this.nodeArray; _i < _a.length; _i++) {
                var nodeArray = _a[_i];
                for (var _b = 0, nodeArray_1 = nodeArray; _b < nodeArray_1.length; _b++) {
                    var node = nodeArray_1[_b];
                    tarArray.push(node);
                }
            }
            return tarArray;
        };
        return Grid;
    }());
    astar.Grid = Grid;
    __reflect(Grid.prototype, "astar.Grid");
})(astar || (astar = {}));
//# sourceMappingURL=Grid.js.map