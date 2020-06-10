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
    var InputCom = (function (_super) {
        __extends(InputCom, _super);
        function InputCom() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        InputCom.prototype.init = function () {
            this.componentId = war.COMPONENT.INPUT;
            this.inputType = war.INPUT.NONE;
        };
        InputCom.prototype.destroy = function () {
            this.inputType = war.INPUT.NONE;
        };
        return InputCom;
    }(war.ComBase));
    war.InputCom = InputCom;
    __reflect(InputCom.prototype, "war.InputCom");
})(war || (war = {}));
//# sourceMappingURL=InputCom.js.map