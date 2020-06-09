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
    var AttackCom = (function (_super) {
        __extends(AttackCom, _super);
        function AttackCom() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        AttackCom.prototype.init = function () {
            this.componentId = war.COMPONENT.ATTACK;
        };
        AttackCom.prototype.destroy = function () {
        };
        AttackCom.prototype.setRange = function (range) {
            this.range = range;
        };
        return AttackCom;
    }(war.ComBase));
    war.AttackCom = AttackCom;
    __reflect(AttackCom.prototype, "war.AttackCom");
})(war || (war = {}));
//# sourceMappingURL=AttackCom.js.map