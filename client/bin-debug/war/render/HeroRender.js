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
    var HeroRender = (function (_super) {
        __extends(HeroRender, _super);
        function HeroRender() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        HeroRender.prototype.init = function () {
            this.renderType = war.Render.Hero;
            this.mc = new MovieClip();
            this.addChild(this.mc);
            this.width = this.height = 0;
        };
        HeroRender.prototype.destroy = function () {
        };
        HeroRender.prototype.initData = function (heroId) {
            this.mc.initData("hero_" + heroId, "hero_" + heroId, "run4", -1);
        };
        HeroRender.prototype.updateRender = function () {
        };
        return HeroRender;
    }(war.RenderBase));
    war.HeroRender = HeroRender;
    __reflect(HeroRender.prototype, "war.HeroRender");
})(war || (war = {}));
//# sourceMappingURL=HeroRender.js.map