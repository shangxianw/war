var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var war;
(function (war) {
    var DrawUtils = (function () {
        function DrawUtils() {
        }
        DrawUtils.DrawHasCode = function (entiy) {
            if (DrawUtils.isTest == false)
                return;
            var renderCom = entiy.getComponent(war.Component.Render);
            if (renderCom == null)
                return;
            var a = new eui.Label();
            a.text = String(entiy.hasCode);
            a.size = 24;
            a.x = 0;
            a.y = 0;
            a.validateNow();
            a.anchorOffsetX = a.width >> 1;
            a.anchorOffsetY = a.height >> 1;
            a.textColor = 0x000000;
            renderCom.render.addChildAt(a, 999);
        };
        DrawUtils.isTest = true;
        return DrawUtils;
    }());
    war.DrawUtils = DrawUtils;
    __reflect(DrawUtils.prototype, "war.DrawUtils");
})(war || (war = {}));
//# sourceMappingURL=DrawUtils.js.map