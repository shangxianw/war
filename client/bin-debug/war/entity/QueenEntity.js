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
            this.entityType = war.ENTITY.QUEEN;
            this.anchorOffsetX = this.width >> 1;
            this.anchorOffsetY = this.height;
            war.DrawUtils.DrawEntityId(this);
        };
        QueenEntity.prototype.destroy = function () {
        };
        return QueenEntity;
    }(war.EntityBase));
    war.QueenEntity = QueenEntity;
    __reflect(QueenEntity.prototype, "war.QueenEntity");
})(war || (war = {}));
//# sourceMappingURL=QueenEntity.js.map