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
    var CampCom = (function (_super) {
        __extends(CampCom, _super);
        function CampCom() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        CampCom.prototype.init = function () {
            this.comId = war.Component.Demo;
            this.camp = war.Component.Camp;
        };
        CampCom.prototype.destroy = function () {
        };
        CampCom.prototype.setCamp = function (camp) {
            this.camp = camp;
        };
        return CampCom;
    }(war.ComBase));
    war.CampCom = CampCom;
    __reflect(CampCom.prototype, "war.CampCom");
})(war || (war = {}));
//# sourceMappingURL=CampCom.js.map