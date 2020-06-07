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
    var SpeedCom = (function (_super) {
        __extends(SpeedCom, _super);
        function SpeedCom() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        SpeedCom.prototype.init = function () {
            this.angle = 45;
            this.speed = 0;
            this.componentId = war.COMPONENT.SPEED;
        };
        SpeedCom.prototype.destroy = function () {
            this.speed = 0;
            this.angle = 0;
        };
        return SpeedCom;
    }(war.ComBase));
    war.SpeedCom = SpeedCom;
    __reflect(SpeedCom.prototype, "war.SpeedCom");
})(war || (war = {}));
//# sourceMappingURL=SpeedCom.js.map