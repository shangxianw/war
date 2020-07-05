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
    /**
     * 普攻属性
     * 攻击应该是有射程范围的，而且还是有攻速的(攻速比较复杂，后面再加)
     * 同理释放技能，技能也是有一个射程范围，或者监测范围，所以range应该是每个攻击组件的一个字段，而不应该提出来
     */
    var AttackCom = (function (_super) {
        __extends(AttackCom, _super);
        function AttackCom() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        AttackCom.prototype.init = function () {
            this.comId = war.Component.Attack;
            this.attack = 0;
            this.range = 0;
            this.atkTarArray = [];
        };
        AttackCom.prototype.destroy = function () {
            this.atkTarArray.length = 0;
        };
        AttackCom.prototype.setAttack = function (attack, range) {
            this.attack = attack;
            this.range = range;
        };
        AttackCom.prototype.setTarArray = function (list) {
            this.atkTarArray.length = 0;
            this.atkTarArray = list;
        };
        return AttackCom;
    }(war.ComBase));
    war.AttackCom = AttackCom;
    __reflect(AttackCom.prototype, "war.AttackCom");
})(war || (war = {}));
//# sourceMappingURL=AttackCom.js.map