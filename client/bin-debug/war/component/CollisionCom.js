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
    var CollisionCom = (function (_super) {
        __extends(CollisionCom, _super);
        function CollisionCom() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        CollisionCom.prototype.init = function () {
            this.comType = war.Component.Collision;
            this.type = war.Collision.Circle;
        };
        CollisionCom.prototype.destroy = function () {
        };
        return CollisionCom;
    }(war.ComBase));
    war.CollisionCom = CollisionCom;
    __reflect(CollisionCom.prototype, "war.CollisionCom");
})(war || (war = {}));
//# sourceMappingURL=CollisionCom.js.map