var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/**
 * 网格类
 */
var astar;
(function (astar) {
    var Grid = (function () {
        function Grid(numCols, numRows) {
            this.numCols = numCols;
            this.numRows = numRows;
            this.nodes = [];
            for (var i = 0; i < numCols; i++) {
                this.nodes[i] = [];
                for (var j = 0; j < numRows; j++) {
                    this.nodes[i][j] = new astar.Node(i, j);
                }
            }
        }
        Grid.prototype.getNode = function (x, y) {
            return this.nodes[x][y];
        };
        Grid.prototype.setEndNode = function (x, y) {
            this.endNode = this.nodes[x][y];
        };
        Grid.prototype.setStartNode = function (x, y) {
            this.startNode = this.nodes[x][y];
        };
        Grid.prototype.setWalkable = function (x, y, value) {
            this.nodes[x][y].walkable = value;
        };
        return Grid;
    }());
    astar.Grid = Grid;
    __reflect(Grid.prototype, "astar.Grid");
})(astar || (astar = {}));
//# sourceMappingURL=Grid.js.map