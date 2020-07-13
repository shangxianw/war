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
    var StepCom = (function (_super) {
        __extends(StepCom, _super);
        function StepCom() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        StepCom.prototype.init = function () {
            this.comType = war.Component.Step;
        };
        StepCom.prototype.destroy = function () {
        };
        return StepCom;
    }(war.ComBase));
    war.StepCom = StepCom;
    __reflect(StepCom.prototype, "war.StepCom");
})(war || (war = {}));
