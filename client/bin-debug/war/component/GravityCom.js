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
    var GravityCom = (function (_super) {
        __extends(GravityCom, _super);
        function GravityCom() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        GravityCom.prototype.init = function () {
            this.g = war.WarDataMgr.Ins().G;
            this.comType = war.Component.Gravity;
        };
        GravityCom.prototype.destroy = function () {
        };
        GravityCom.prototype.setG = function (g) {
            this.g = g;
        };
        return GravityCom;
    }(war.ComBase));
    war.GravityCom = GravityCom;
    __reflect(GravityCom.prototype, "war.GravityCom");
})(war || (war = {}));
