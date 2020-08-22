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
    var ActionCom = (function (_super) {
        __extends(ActionCom, _super);
        function ActionCom() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        ActionCom.prototype.init = function () {
            this.comType = war.Component.Action;
            this.action = war.Action.Stand;
        };
        ActionCom.prototype.destroy = function () {
        };
        return ActionCom;
    }(war.ComBase));
    war.ActionCom = ActionCom;
    __reflect(ActionCom.prototype, "war.ActionCom");
})(war || (war = {}));
//# sourceMappingURL=ActionCom.js.map