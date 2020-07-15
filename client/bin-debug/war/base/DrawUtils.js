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
            var renderCom = entity.getComponent(war.Component.Render);
            var render = renderCom.render;
            if (render.hasCodeLb == null) {
                render.hasCodeLb = new eui.Label;
                render.hasCodeLb.size = 50;
                render.hasCodeLb.stroke = 2;
                render.addChildAt(render.hasCodeLb, 999);
            }
            render.hasCodeLb.text = "" + entity.hasCode;
            render.hasCodeLb.x = (render.width >> 1) - render.hasCodeLb.width / 2;
            render.hasCodeLb.y = render.height >> 1;
        };
        DrawUtils.DrawRectCollision = function (render) {
            if (DrawUtils.isTest == false)
                return;
            if (render.collisionShape == null) {
                render.collisionShape = new egret.Shape();
                render.addChildAt(render.collisionShape, 0);
            }
            render.collisionShape.graphics.clear();
            render.collisionShape.graphics.beginFill(0xffff00, 1);
            render.collisionShape.graphics.lineStyle(2, 0x000000);
            render.collisionShape.graphics.drawRect(0, 0, render.width, render.height); // 这个是没有设置锚点的，所以直接在0，0上即可
            render.collisionShape.graphics.endFill();
        };
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
        DrawUtils.DrawStandardLine = function (y, parent) {
            if (parent === void 0) { parent = null; }
            if (this.standerLineShap == null) {
                this.standerLineShap = new egret.Shape();
                parent.addChild(this.standerLineShap);
            }
            this.standerLineShap.graphics.clear();
            this.standerLineShap.graphics.lineStyle(5, 0xff0000);
            this.standerLineShap.graphics.moveTo(0, y);
            this.standerLineShap.graphics.lineTo(war.WarDataMgr.Ins().StageWidth, y);
            this.standerLineShap.graphics.endFill();
        };
        DrawUtils.isTest = false;
        return DrawUtils;
    }());
    war.DrawUtils = DrawUtils;
    __reflect(DrawUtils.prototype, "war.DrawUtils");
})(war || (war = {}));
//# sourceMappingURL=DrawUtils.js.map