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
            this.componentId = war.COMPONENT.ACTION;
            this.direction = war.DIRECTION.UP;
            this.action = war.ACTION.STAND;
            this.hasChanged = true;
        };
        ActionCom.prototype.destroy = function () {
        };
        ActionCom.prototype.setActionAndDir = function (action, dir) {
            this.direction = dir;
            this.action = action;
            this.hasChanged = true;
        };
        ActionCom.prototype.setAction = function (action) {
            this.action = action;
            this.hasChanged = true;
        };
        ActionCom.prototype.setDir = function (dir) {
            this.direction = dir;
            this.hasChanged = true;
        };
        ActionCom.prototype.getAction = function () {
            return this.action;
        };
        ActionCom.prototype.getDir = function () {
            return this.direction;
        };
        return ActionCom;
    }(war.ComBase));
    war.ActionCom = ActionCom;
    __reflect(ActionCom.prototype, "war.ActionCom");
})(war || (war = {}));
//# sourceMappingURL=ActionCom.js.map