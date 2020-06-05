var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var war;
(function (war) {
    var DrawUtils = (function () {
        function DrawUtils() {
        }
        DrawUtils.DrawGrid = function (group) {
            if (DrawUtils.isTest == false)
                return;
            var space = war.WarDataMgr.Ins().grid.space;
            var rows = war.WarDataMgr.Ins().grid.numCols;
            var cols = war.WarDataMgr.Ins().grid.numRows;
            var shape = new egret.Shape();
            shape.graphics.lineStyle(1, 0xff0000);
            shape.x = war.WarDataMgr.Ins().grid.startX;
            shape.y = war.WarDataMgr.Ins().grid.startY;
            for (var i = 0, len = rows; i < len; i++) {
                for (var j = 0, len2 = cols; j < len2; j++) {
                    shape.graphics.drawRect(space * i, space * j, space, space);
                }
            }
            shape.graphics.endFill();
            group.addChild(shape);
        };
        DrawUtils.DrawPath = function (start, end, testShap, group) {
            if (DrawUtils.isTest == false)
                return;
            var space = war.WarDataMgr.Ins().grid.space;
            if (testShap == null) {
                testShap = new egret.Shape();
                testShap.x = war.WarDataMgr.Ins().grid.startX;
                testShap.y = war.WarDataMgr.Ins().grid.startY;
                group.addChild(testShap);
            }
            testShap.graphics.clear();
            testShap.graphics.beginFill(0xff0000);
            var path = war.WarDataMgr.Ins().findPath([start[0], start[1]], [end[0], end[1]]);
            for (var _i = 0, path_1 = path; _i < path_1.length; _i++) {
                var node = path_1[_i];
                testShap.graphics.drawRect(space * node.x, space * node.y, space, space);
            }
            testShap.graphics.endFill();
            return testShap;
        };
        DrawUtils.DrawHeroAnchor = function (hero) {
            if (DrawUtils.isTest == false)
                return;
            var shape = new egret.Shape();
            shape.graphics.beginFill(0xffff00);
            shape.graphics.lineStyle(1, 0x000000);
            shape.graphics.drawCircle(0, 0, 4);
            shape.graphics.endFill();
            hero.addChild(shape);
        };
        DrawUtils.isTest = true;
        return DrawUtils;
    }());
    war.DrawUtils = DrawUtils;
    __reflect(DrawUtils.prototype, "war.DrawUtils");
})(war || (war = {}));
//# sourceMappingURL=DrawUtils.js.map