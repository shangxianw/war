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
    var RenderBase = (function (_super) {
        __extends(RenderBase, _super);
        function RenderBase() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        RenderBase.prototype.initAll = function () {
            this.width = 0;
            this.height = 0;
            this.renderType = war.Render.Bg;
            this.rect = new eui.Rect();
            this.addChild(this.rect);
            _super.prototype.initAll.call(this);
        };
        RenderBase.prototype.destroyAll = function () {
            _super.prototype.destroyAll.call(this);
        };
        return RenderBase;
    }(war.UIBase));
    war.RenderBase = RenderBase;
    __reflect(RenderBase.prototype, "war.RenderBase");
})(war || (war = {}));
//# sourceMappingURL=RenderBase.js.map