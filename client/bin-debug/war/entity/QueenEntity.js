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
    var QueenEntity = (function (_super) {
        __extends(QueenEntity, _super);
        function QueenEntity() {
            return _super.call(this) || this;
        }
        QueenEntity.prototype.init = function () {
            this.anchorOffsetX = this.width >> 1;
            this.anchorOffsetY = this.height;
            this.mc = new war.MovieClip();
            this.mc.initData("hero_10010", "hero_10010");
            this.mc.startPlay("stand4", -1);
            this.addChild(this.mc);
            war.DrawUtils.DrawHeroId(this);
            // DrawUtils.DrawGrigd(this);
            war.DrawUtils.DrawHeroAnchor(this);
        };
        QueenEntity.prototype.destroy = function () {
        };
        return QueenEntity;
    }(war.EntityBase));
    war.QueenEntity = QueenEntity;
    __reflect(QueenEntity.prototype, "war.QueenEntity");
})(war || (war = {}));
//# sourceMappingURL=QueenEntity.js.map