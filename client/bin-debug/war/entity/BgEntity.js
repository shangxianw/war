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
    var BgEntity = (function (_super) {
        __extends(BgEntity, _super);
        function BgEntity() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        BgEntity.prototype.init = function () {
            this.entityType = war.Entity.Bg;
        };
        BgEntity.prototype.destroy = function () {
        };
        return BgEntity;
    }(war.EntityBase));
    war.BgEntity = BgEntity;
    __reflect(BgEntity.prototype, "war.BgEntity");
})(war || (war = {}));
//# sourceMappingURL=BgEntity.js.map