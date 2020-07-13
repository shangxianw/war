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
            var posCom = entity.getComponent(war.Component.Pos);
            if (posCom == null)
                return;
            var renderCom = entity.getComponent(war.Component.Render);
            if (renderCom == null)
                return;
            renderCom.render.x = posCom.x;
            renderCom.render.y = posCom.y;
            renderCom.render.width = posCom.width;
            renderCom.render.height = posCom.height;
            renderCom.render.anchorOffsetX = posCom.width >> 1;
            renderCom.render.anchorOffsetY = posCom.height;
            renderCom.updateRender(posCom);
            war.DrawUtils.DrawHasCode(entity);
        };
        return RenderSystem;
    }(war.SystemBase));
    war.RenderSystem = RenderSystem;
    __reflect(RenderSystem.prototype, "war.RenderSystem");
})(war || (war = {}));
