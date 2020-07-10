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
var war;
(function (war) {
    var RenderSystem = (function (_super) {
        __extends(RenderSystem, _super);
        function RenderSystem() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        RenderSystem.prototype.init = function () {
            this.sysType = war.System.Render;
        };
        RenderSystem.prototype.destroy = function () {
        };
        RenderSystem.prototype.update = function (entity, deltaTime) {
            if (entity == null)
                return;
            var renderCom = entity.getComponent(war.Component.Render);
            if (renderCom == null)
                return;
            var posCom = entity.getComponent(war.Component.Pos);
            if (posCom == null)
                return;
            var render = renderCom.render;
            render.scaleX = posCom.scaleX;
            render.scaleY = posCom.scaleY;
            render.x = posCom.x;
            render.y = posCom.y;
            render.rect.anchorOffsetX = posCom.anchorX;
            render.rect.anchorOffsetY = posCom.anchorY;
            render.rect.width = posCom.width;
            render.rect.height = posCom.height;
            render.rect.fillColor = posCom.color;
            if (entity.entityType == war.Entity.Bg) {
                posCom.alpha = posCom.alpha - 2 * deltaTime;
                render.rect.alpha = posCom.alpha;
            }
        };
        return RenderSystem;
    }(war.SystemBase));
    war.RenderSystem = RenderSystem;
    __reflect(RenderSystem.prototype, "war.RenderSystem");
})(war || (war = {}));
//# sourceMappingURL=RenderSystem.js.map