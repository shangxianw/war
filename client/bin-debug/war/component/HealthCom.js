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
     * 健康系统
     * 主要保存血量和蓝量(当然这里没有)
     */
    var HealthCom = (function (_super) {
        __extends(HealthCom, _super);
        function HealthCom() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        HealthCom.prototype.init = function () {
            this.comId = war.Component.Health;
            this.hp = 0;
        };
        HealthCom.prototype.destroy = function () {
        };
        HealthCom.prototype.setHealth = function (addHp) {
            this.hp = this.hp + addHp;
            this.flushAttr("hp");
        };
        HealthCom.prototype.isDie = function () {
            return this.hp <= 0;
        };
        return HealthCom;
    }(war.ComBase));
    war.HealthCom = HealthCom;
    __reflect(HealthCom.prototype, "war.HealthCom");
})(war || (war = {}));
//# sourceMappingURL=HealthCom.js.map