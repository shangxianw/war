var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var CalcPath = (function () {
    function CalcPath() {
        this.nodeArray = [];
        this.allPathMap = {};
    }
    CalcPath.prototype.calc = function () {
        this.grid = new astar.Grid(10, 10, 20, 0, 0);
        for (var i = 0, len = this.grid.nodes.length; i < len; i++) {
            for (var j = 0, len2 = this.grid.nodes.length; j < len2; j++) {
                this.nodeArray.push(this.grid.nodes[i][j]);
            }
        }
    };
    CalcPath.prototype.calc2 = function () {
        var aStar = new astar.AStar();
        for (var i = 0, len = this.nodeArray.length; i < len; i++) {
            this.grid.startNode = this.nodeArray[i];
            for (var j = i + 1, len2 = this.nodeArray.length; j < len2; j++) {
                this.grid.endNode = this.nodeArray[j];
                if (aStar.findPath(this.grid)) {
                    var arr = [];
                    for (var _i = 0, _a = aStar.path; _i < _a.length; _i++) {
                        var node = _a[_i];
                        arr.push([node.x, node.y]);
                    }
                    this.allPathMap[arr[0][0] + "_" + arr[0][1] + "_" + arr[arr.length - 1][0] + "_" + arr[arr.length - 1][1]] = arr;
                }
            }
        }
    };
    return CalcPath;
}());
__reflect(CalcPath.prototype, "CalcPath");
//# sourceMappingURL=CalcPath.js.map