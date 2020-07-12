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
    var DemoRender = (function (_super) {
        __extends(DemoRender, _super);
        function DemoRender() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DemoRender.prototype.init = function () {
            this.renderType = war.Render.Demo;
        };
        DemoRender.prototype.destroy = function () {
        };
        DemoRender.prototype.updateRender = function () {
        };
        return DemoRender;
    }(war.RenderBase));
    war.DemoRender = DemoRender;
    __reflect(DemoRender.prototype, "war.DemoRender");
})(war || (war = {}));
//# sourceMappingURL=DemoRender.js.map