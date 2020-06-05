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
    var DirectionCom = (function (_super) {
        __extends(DirectionCom, _super);
        function DirectionCom() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DirectionCom.prototype.init = function () {
            this.componentId = war.COMPONENT.DIRECTION;
            this.direction = war.DIRECTION.UP;
        };
        DirectionCom.prototype.destroy = function () {
        };
        DirectionCom.prototype.setDirection = function (dir) {
            this.direction = dir;
        };
        DirectionCom.prototype.getDirection = function () {
            return this.direction;
        };
        return DirectionCom;
    }(war.ComBase));
    war.DirectionCom = DirectionCom;
    __reflect(DirectionCom.prototype, "war.DirectionCom");
})(war || (war = {}));
//# sourceMappingURL=DirectionCom.js.map