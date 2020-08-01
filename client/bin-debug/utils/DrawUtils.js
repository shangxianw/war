var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var war;
(function (war) {
    var DrawUtils = (function () {
        function DrawUtils() {
        }
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
        DrawUtils.isTest = false;
        return DrawUtils;
    }());
    war.DrawUtils = DrawUtils;
    __reflect(DrawUtils.prototype, "war.DrawUtils");
})(war || (war = {}));
//# sourceMappingURL=DrawUtils.js.map