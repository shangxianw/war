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
var astar;
(function (astar) {
    var AStarTest = (function (_super) {
        __extends(AStarTest, _super);
        function AStarTest() {
            var _this = _super.call(this) || this;
            _this.init();
            _this.touchChildren = false;
            _this.touchEnabled = true;
            return _this;
        }
        AStarTest.prototype.init = function () {
            this.numCols = 100;
            this.numRows = 200;
            this.space = 10;
            this.astar = new astar.AStar();
            this.initData();
        };
        AStarTest.prototype.destroy = function () {
            this.grid.destroy();
            this.grid = null;
            this.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.OnTap, this);
        };
        AStarTest.prototype.initData = function () {
            var tect = new eui.Rect();
            tect.width = this.space * this.numCols;
            tect.height = this.space * this.numRows;
            this.addChild(tect);
            var gridMap = new egret.Shape();
            var walkMap = new egret.Shape();
            gridMap.graphics.lineStyle(1, 0xffff00);
            walkMap.graphics.beginFill(0xffff00);
            this.grid = new astar.Grid();
            this.grid.init(this.numRows, this.numCols, this.space);
            for (var i = 0, len = this.numRows; i < len; i++) {
                for (var j = 0, len2 = this.numCols; j < len2; j++) {
                    var x = j * this.space;
                    var y = i * this.space;
                    gridMap.graphics.drawRect(x, y, this.space, this.space);
                    // let walkable = Math.random() > 0.8;
                    // if(walkable == false)
                    // {
                    // 	walkMap.graphics.drawRect(x, y, this.space, this.space);
                    // 	let flag = this.grid.setWalkable(j, i, false);
                    // 	if(flag == false)
                    // 		1;
                    // }
                }
            }
            gridMap.graphics.endFill();
            walkMap.graphics.endFill();
            this.addChild(gridMap);
            this.addChild(walkMap);
            this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.OnTap, this);
        };
        AStarTest.prototype.OnTap = function (e) {
            var x = Math.floor(e.localX / this.space);
            var y = Math.floor(e.localY / this.space);
            if (this.pathShap == null) {
                this.pathShap = new egret.Shape();
                this.addChild(this.pathShap);
            }
            this.pathShap.graphics.clear();
            this.pathShap.graphics.beginFill(0xff0000);
            if (this.astar.startNode == null && this.astar.endNode == null) {
                this.astar.startNode = this.grid.getNode(0, 0);
                this.astar.endNode = this.grid.getNode(x, y);
            }
            else {
                this.astar.startNode = this.astar.endNode;
                this.astar.endNode = this.grid.getNode(x, y);
            }
            var path = this.astar.findPath(this.astar.startNode.x, this.astar.startNode.y, this.astar.endNode.x, this.astar.endNode.y, this.grid);
            // let path = this.astar.findPath(9, 19, x, y, this.grid);
            for (var _i = 0, path_1 = path; _i < path_1.length; _i++) {
                var node = path_1[_i];
                this.pathShap.graphics.drawRect(node.x * this.space, node.y * this.space, this.space, this.space);
            }
            this.pathShap.graphics.endFill();
        };
        return AStarTest;
    }(eui.Component));
    astar.AStarTest = AStarTest;
    __reflect(AStarTest.prototype, "astar.AStarTest");
})(astar || (astar = {}));
//# sourceMappingURL=AStarTest.js.map