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
    var ControlCom = (function (_super) {
        __extends(ControlCom, _super);
        function ControlCom() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        ControlCom.prototype.init = function () {
            this.comType = war.Component.Ctrl;
        };
        ControlCom.prototype.destroy = function () {
        };
        return ControlCom;
    }(war.ComBase));
    war.ControlCom = ControlCom;
    __reflect(ControlCom.prototype, "war.ControlCom");
})(war || (war = {}));
//# sourceMappingURL=ControlCom.js.map