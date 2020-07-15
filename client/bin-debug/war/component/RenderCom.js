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
    var RenderCom = (function (_super) {
        __extends(RenderCom, _super);
        function RenderCom() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        RenderCom.prototype.init = function () {
            this.comType = war.Component.Render;
        };
        RenderCom.prototype.destroy = function () {
            this.render.destroyAll();
            if (this.render.parent != null)
                this.render.parent.removeChild(this.render);
        };
        RenderCom.prototype.setRender = function (render) {
            this.render = render;
        };
        RenderCom.prototype.updateRender = function (posCom) {
            this.render.updateRender(posCom);
        };
        return RenderCom;
    }(war.ComBase));
    war.RenderCom = RenderCom;
    __reflect(RenderCom.prototype, "war.RenderCom");
})(war || (war = {}));
//# sourceMappingURL=RenderCom.js.map