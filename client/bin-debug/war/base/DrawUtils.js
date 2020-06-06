var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var war;
(function (war) {
    var DrawUtils = (function () {
        function DrawUtils() {
        }
        DrawUtils.Destroy = function () {
            for (var key in this.pathMap.map) {
                var item = this.pathMap.get(Number(key));
                item.parent != null && item.parent.removeChild(item);
                item = null;
            }
            this.pathMap.destroy();
        };
        DrawUtils.DrawGrid = function (group) {
            if (DrawUtils.isTest == false)
                return;
            var space = war.WarDataMgr.Ins().grid.space;
            var rows = war.WarDataMgr.Ins().grid.numCols;
            var cols = war.WarDataMgr.Ins().grid.numRows;
            var shape = new egret.Shape();
            shape.graphics.lineStyle(1, 0x00ff00);
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
        DrawUtils.DrawPath = function (entity, group) {
            if (group === void 0) { group = null; }
            if (DrawUtils.isTest == false)
                return;
            if (this.pathMap.has(entity.id) == false) {
                var testShap_1 = new egret.Shape();
                testShap_1.x = war.WarDataMgr.Ins().grid.startX;
                testShap_1.y = war.WarDataMgr.Ins().grid.startY;
                group != null && group.addChild(testShap_1);
                this.pathMap.set(entity.id, testShap_1);
            }
            var testShap = this.pathMap.get(entity.id);
            var space = war.WarDataMgr.Ins().grid.space;
            var pCom = entity.getCom(war.COMPONENT.PATH);
            if (pCom != null) {
                testShap.graphics.clear();
                testShap.graphics.lineStyle(2, 0xff0000);
                testShap.graphics.moveTo(entity.x - war.WarDataMgr.Ins().grid.startX, entity.y - war.WarDataMgr.Ins().grid.startY);
                var path = pCom.getLeftPath();
                var index = 1;
                for (var i = 1; i < path.length; i++) {
                    var node = path[i];
                    testShap.graphics.lineTo(space * node.x, space * node.y);
                }
                testShap.graphics.endFill();
            }
            else {
                testShap.parent != null && testShap.parent.removeChild(testShap);
            }
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
        DrawUtils.DrawHeroId = function (hero) {
            if (DrawUtils.isTest == false)
                return;
            var lb = new eui.Label;
            lb.text = "" + hero.id;
            lb.stroke = 2;
            lb.strokeColor = 0x000;
            lb.x = hero.width >> 1;
            lb.y = -50;
            hero.addChild(lb);
        };
        DrawUtils.isTest = false;
        DrawUtils.pathMap = new Hash();
        return DrawUtils;
    }());
    war.DrawUtils = DrawUtils;
    __reflect(DrawUtils.prototype, "war.DrawUtils");
})(war || (war = {}));
//# sourceMappingURL=DrawUtils.js.map