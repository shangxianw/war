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
    var KingEntity = (function (_super) {
        __extends(KingEntity, _super);
        function KingEntity() {
            return _super.call(this) || this;
        }
        KingEntity.prototype.init = function () {
            this.anchorOffsetX = this.width >> 1;
            this.anchorOffsetY = this.height;
            this.mc = new war.MovieClip();
            this.mc.initData("hero_10010", "hero_10010");
            this.mc.startPlay("stand4", -1);
            this.addChild(this.mc);
            var rCom2 = new war.RangeCom();
            rCom2.radius = 30;
            this.setCom(rCom2);
            war.DrawUtils.DrawHeroId(this);
            // DrawUtils.DrawGrigd(this);
            war.DrawUtils.DrawHeroAnchor(this);
        };
        KingEntity.prototype.destroy = function () {
        };
        return KingEntity;
    }(war.EntityBase));
    war.KingEntity = KingEntity;
    __reflect(KingEntity.prototype, "war.KingEntity");
})(war || (war = {}));
//# sourceMappingURL=KingEntity.js.map