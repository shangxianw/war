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
    var HeroEntity = (function (_super) {
        __extends(HeroEntity, _super);
        function HeroEntity() {
            return _super.call(this) || this;
        }
        HeroEntity.prototype.init = function () {
            this.anchorOffsetX = this.width >> 1;
            this.anchorOffsetY = this.height;
            this.mc = new war.MovieClip();
            this.mc.initData("hero_10010", "hero_10010");
            this.mc.startPlay("run0", -1);
            // this.mc.visible = false;
            this.addChild(this.mc);
            war.DrawUtils.DrawHeroId(this);
        };
        HeroEntity.prototype.destroy = function () {
        };
        return HeroEntity;
    }(war.EntityBase));
    war.HeroEntity = HeroEntity;
    __reflect(HeroEntity.prototype, "war.HeroEntity");
})(war || (war = {}));
//# sourceMappingURL=HeroEntity.js.map