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
        InputCom.prototype.packHero = function (inputType, x1, y1, x2, y2, parent, camp) {
            this.inputType = inputType;
            this.x1 = x1;
            this.x2 = x2;
            this.y1 = y1;
            this.y2 = y2;
            this.camp = camp;
            this.parent = parent;
            return this;
        };
        InputCom.prototype.packQueen = function (inputType, x1, y1, parent, camp) {
            this.inputType = inputType;
            this.x1 = x1;
            this.y1 = y1;
            this.camp = camp;
            this.parent = parent;
            return this;
        };
        InputCom.prototype.packKing = function (inputType, x1, y1, parent, camp) {
            this.inputType = inputType;
            this.x1 = x1;
            this.y1 = y1;
            this.camp = camp;
            this.parent = parent;
            return this;
        };
        return InputCom;
    }(war.ComBase));
    war.InputCom = InputCom;
    __reflect(InputCom.prototype, "war.InputCom");
})(war || (war = {}));
//# sourceMappingURL=InputCom.js.map