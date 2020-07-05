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
            this.entityType = war.Entity.King;
            this.anchorOffsetX = this.width >> 1;
            this.anchorOffsetY = this.height;
            war.DrawUtils.DrawEntityId(this);
        };
        KingEntity.prototype.destroy = function () {
        };
        return KingEntity;
    }(war.EntityBase));
    war.KingEntity = KingEntity;
    __reflect(KingEntity.prototype, "war.KingEntity");
})(war || (war = {}));
//# sourceMappingURL=KingEntity.js.map