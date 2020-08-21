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
            var count = 1;
            for (var i = 0, len = this.numRows; i < len; i++) {
                var rowArray = [];
                for (var j = 0, len2 = this.numCols; j < len2; j++) {
                    x = j;
                    y = i;
                    var node = new astar.Node();
                    var walkable = Math.random() > 0.1;
                    // if(Math.random() > 0.8 && count <= 10)
                    // {
                    // 	walkable = true;
                    // 	count += 1
                    // }
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