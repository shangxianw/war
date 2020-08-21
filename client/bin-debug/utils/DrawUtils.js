var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var war;
(function (war) {
    var DrawUtils = (function () {
        function DrawUtils() {
        }
        DrawUtils.DrawMapGrid = function (nCols, nRows) {
            if (this.isTest == false)
                return;
            var shiftX = war.WarDataMgr.Ins().MapStartX;
            var shiftY = war.WarDataMgr.Ins().MapStartY;
            var shape = new egret.Shape();
            var shape2 = new egret.Shape();
            shape.graphics.lineStyle(0.5, 0xff0000);
            shape2.graphics.beginFill(0xff0000, 0.5);
            for (var i = 0, len = nCols; i < len; i++) {
                for (var j = 0, len2 = nRows; j < len2; j++) {
                    var size = war.WarDataMgr.Ins().CeilSize;
                    var x = i * size + shiftX;
                    var y = j * size + shiftY;
                    var node = war.WarDataMgr.Ins().grid.getNode(i, j);
                    if (node.walkable == false)
                        shape2.graphics.drawRect(x, y, size, size);
                    shape.graphics.drawRect(x, y, size, size);
                }
            }
            shape.graphics.endFill();
            shape2.graphics.endFill();
            LayerManager.Ins().war.map.addChild(shape);
            LayerManager.Ins().war.map.addChild(shape2);
        };
        DrawUtils.DrawPath = function (entity) {
            if (this.isTest == false)
                return;
            var renderCom = entity.getComponent(war.Component.Render);
            var posCom = entity.getComponent(war.Component.Pos);
            var pathCom = entity.getComponent(war.Component.Path);
            if (pathCom == null || posCom == null || renderCom == null)
                return;
            if (renderCom.pathShap == null) {
                renderCom.pathShap = new egret.Shape;
                LayerManager.Ins().war.map.addChild(renderCom.pathShap);
            }
            renderCom.pathShap.graphics.clear();
            renderCom.pathShap.graphics.lineStyle(2, 0xffff00);
            renderCom.pathShap.graphics.moveTo(posCom.x, posCom.y);
            for (var _i = 0, _a = pathCom.path; _i < _a.length; _i++) {
                var node = _a[_i];
                var localX = war.WarUtils.GridX2LocalX(node.x);
                var localY = war.WarUtils.GridY2LocalY(node.y);
                renderCom.pathShap.graphics.lineTo(localX, localY);
            }
            renderCom.pathShap.graphics.endFill();
        };
        DrawUtils.DrawHasCode = function (entity) {
            if (DrawUtils.isTest == false)
                return;
        };
        DrawUtils.DrawRectCollision = function (render) {
            if (DrawUtils.isTest == false)
                return;
        };
        // ---------------------------------------------------------------------- 画中心点
        DrawUtils.DrawAnchorCenter = function (render) {
            if (DrawUtils.isTest == false)
                return;
            if (render.collisionShape == null) {
                render.collisionShape = new egret.Shape();
                render.addChildAt(render.collisionShape, 999);
            }
            render.collisionShape.graphics.clear();
            render.collisionShape.graphics.beginFill(0xffff00, 1);
            render.collisionShape.graphics.lineStyle(2, 0x000000);
            render.collisionShape.anchorOffsetX = -render.anchorOffsetX;
            render.collisionShape.anchorOffsetY = -render.anchorOffsetY;
            render.collisionShape.graphics.drawCircle(0, 0, 5); // 这个是没有设置锚点的，所以直接在0，0上即可
            render.collisionShape.graphics.endFill();
        };
        DrawUtils.isTest = true;
        return DrawUtils;
    }());
    war.DrawUtils = DrawUtils;
    __reflect(DrawUtils.prototype, "war.DrawUtils");
})(war || (war = {}));
//# sourceMappingURL=DrawUtils.js.map