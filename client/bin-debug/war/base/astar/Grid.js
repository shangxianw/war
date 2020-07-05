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
                // [24, 20], [25, 20], [26, 20], [27, 20], [28, 20], [29, 20],
                [24, 21], [25, 21], [26, 21], [27, 21], [28, 21], [29, 21],
                [24, 22], [25, 22], [26, 22], [27, 22], [28, 22], [29, 22],
                [24, 23], [25, 23], [26, 23], [27, 23], [28, 23], [29, 23],
                // king
                [4, 10], [5, 10], [6, 10], [7, 10],
                [4, 11], [5, 11], [6, 11], [7, 11],
                [4, 12], [5, 12], [6, 12], [7, 12],
                [4, 13], [5, 13], [6, 13], [7, 13],
                [46, 10], [47, 10], [48, 10], [49, 10],
                [46, 11], [47, 11], [48, 11], [49, 11],
                [46, 12], [47, 12], [48, 12], [49, 12],
                [46, 13], [47, 13], [48, 13], [49, 13],
                // 公主塔
                [11, 3], [12, 3], [13, 3],
                [11, 4], [12, 4], [13, 4],
                [11, 5], [12, 5], [13, 5],
                [11, 6], [12, 6], [13, 6],
                [11, 17], [12, 17], [13, 17],
                [11, 18], [12, 18], [13, 18],
                [11, 19], [12, 19], [13, 19],
                [11, 20], [12, 20], [13, 20],
                [40, 3], [41, 3], [42, 3],
                [40, 4], [41, 4], [42, 4],
                [40, 5], [41, 5], [42, 5],
                [40, 6], [41, 6], [42, 6],
                [40, 17], [41, 17], [42, 17],
                [40, 18], [41, 18], [42, 18],
                [40, 19], [41, 19], [42, 19],
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