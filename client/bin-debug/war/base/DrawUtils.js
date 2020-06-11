var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var war;
(function (war) {
    var DrawUtils = (function () {
        function DrawUtils() {
        }
        DrawUtils.Destroy = function () {
            if (this.pathMap != null) {
                for (var _i = 0, _a = this.pathMap.keys; _i < _a.length; _i++) {
                    var key = _a[_i];
                    var item = this.pathMap.get(Number(key));
                    item.parent != null && item.parent.removeChild(item);
                    item = null;
                }
                this.pathMap.destroy();
            }
            if (this.colorMap != null) {
                for (var _b = 0, _c = this.colorMap.values; _b < _c.length; _b++) {
                    var value = _c[_b];
                    value.matrix = null;
                    value = null;
                }
                this.pathMap.destroy();
            }
        };
        DrawUtils.DrawGrid = function (group) {
            if (DrawUtils.isTest == false)
                return;
            var space = war.WarDataMgr.Ins().grid.space;
            var rows = war.WarDataMgr.Ins().grid.numCols;
            var cols = war.WarDataMgr.Ins().grid.numRows;
            var shape = new egret.Shape();
            shape.graphics.lineStyle(1, 0x00ff00);
            shape.x = war.WarDataMgr.Ins().startX;
            shape.y = war.WarDataMgr.Ins().startY;
            var mapCfg = MapCfg["1001"];
            for (var i = 0, len = rows; i < len; i++) {
                for (var j = 0, len2 = cols; j < len2; j++) {
                    var x = space * i;
                    var y = space * j;
                    if (mapCfg[j][i] == false) {
                        var a = new egret.Shape();
                        a.x = shape.x;
                        a.y = shape.y;
                        a.graphics.beginFill(0x0000ff);
                        a.graphics.drawRect(x, y, space, space);
                        a.graphics.endFill();
                        group.addChild(a);
                    }
                    shape.graphics.drawRect(x, y, space, space);
                }
            }
            shape.graphics.endFill();
            group.addChild(shape);
        };
        DrawUtils.DrawPath = function (entity) {
            if (DrawUtils.isTest == false)
                return;
            var group = ViewManager.Ins().uiMap.get(ViewIdConst.WarPanel).drawGroup;
            if (this.pathMap == null)
                this.pathMap = new Hash();
            if (this.pathMap.has(entity.id) == false) {
                var testShap_1 = new egret.Shape();
                testShap_1.x = war.WarDataMgr.Ins().startX;
                testShap_1.y = war.WarDataMgr.Ins().startY;
                group != null && group.addChild(testShap_1);
                this.pathMap.set(entity.id, testShap_1);
            }
            var testShap = this.pathMap.get(entity.id);
            var space = war.WarDataMgr.Ins().grid.space;
            var pCom = entity.getCom(war.COMPONENT.PATH);
            if (pCom != null) {
                testShap.graphics.clear();
                testShap.graphics.lineStyle(2, 0xff0000);
                testShap.graphics.moveTo(entity.x - war.WarDataMgr.Ins().startX, entity.y - war.WarDataMgr.Ins().startY);
                var path = pCom.getLeftPath();
                var index = 1;
                for (var i = 1; i < path.length; i++) {
                    var node = path[i];
                    testShap.graphics.lineTo(space * node.x + space / 2, space * node.y + space / 2);
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
            var cCom = hero.getCom(war.COMPONENT.CAMP);
            if (cCom == null)
                return;
            var shape = new egret.Shape();
            if (cCom.camp == war.CAMP.WE)
                shape.graphics.beginFill(0xffffff);
            else if (cCom.camp == war.CAMP.ENEMY)
                shape.graphics.beginFill(0x000000);
            shape.graphics.lineStyle(2, 0x000000);
            shape.graphics.drawCircle(0, 0, 4);
            shape.graphics.endFill();
            hero.addChildAt(shape, 777);
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
        DrawUtils.DrawGrigd = function (entity) {
            if (entity.hasCom(war.COMPONENT.GRIGD) == false)
                return;
            var rCom = entity.getCom(war.COMPONENT.GRIGD);
            var shape = new egret.Shape();
            shape.graphics.beginFill(0xffff00);
            shape.graphics.lineStyle(1, 0x000000);
            shape.graphics.drawCircle(0, 0, rCom.radius);
            shape.graphics.endFill();
            entity.addChildAt(shape, 0);
        };
        DrawUtils.SetColor = function (entity, show, r, g, b, strength) {
            if (strength === void 0) { strength = 1; }
            if (this.colorMap == null)
                this.colorMap = new Hash();
            if (this.colorMap.has(entity.id) == false) {
                var colorFilter_1 = new egret.ColorMatrixFilter();
                this.colorMap.set(entity.id, colorFilter_1);
                entity.filters = [colorFilter_1];
            }
            var colorFilter = this.colorMap.get(entity.id);
            if (show == false) {
                colorFilter.matrix = null;
                return;
            }
            var color = (r << 16) + (g << 8) + b;
            if (!egret.WebGLUtils.checkCanUseWebGL()) {
                entity.tint = color;
                return;
            }
            if (r == 256 && g == 256 && b == 256) {
                entity.filters = null;
            }
            else {
                var colorMatrix = [
                    1, 0, 0, 0, 100,
                    0, 1, 0, 0, 100,
                    0, 0, 1, 0, 100,
                    0, 0, 0, 1, 0
                ];
                colorMatrix[0] = r / 255;
                colorMatrix[6] = g / 255;
                colorMatrix[12] = b / 255;
                colorMatrix[4] = strength;
                colorMatrix[9] = strength;
                colorMatrix[14] = strength;
                colorFilter.matrix = colorMatrix;
            }
        };
        DrawUtils.DrawAttackRange = function (entity) {
            if (DrawUtils.isTest == false)
                return;
            var aCom = entity.getCom(war.COMPONENT.ATTACK);
            if (aCom == null)
                return;
            var rangeShape = new egret.Shape();
            rangeShape.name = "attackCom_" + entity.id;
            rangeShape.graphics.beginFill(0xffff00);
            rangeShape.graphics.lineStyle(1, 0x000);
            rangeShape.graphics.drawCircle(0, 0, aCom.range);
            rangeShape.graphics.endFill();
            entity.addChildAt(rangeShape, 0);
        };
        DrawUtils.isTest = true;
        return DrawUtils;
    }());
    war.DrawUtils = DrawUtils;
    __reflect(DrawUtils.prototype, "war.DrawUtils");
})(war || (war = {}));
//# sourceMappingURL=DrawUtils.js.map