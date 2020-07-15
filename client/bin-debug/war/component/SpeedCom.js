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
            this.comType = war.Component.Speed;
        };
        SpeedCom.prototype.destroy = function () {
        };
        SpeedCom.prototype.setSpeed = function (speedX, speedY) {
            this.speedX = speedX;
            this.speedY = speedY;
        };
        SpeedCom.prototype.setSpeedX = function (speedX) {
            this.speedX = speedX;
        };
        SpeedCom.prototype.setSpeedY = function (speedY) {
            this.speedY = speedY;
        };
        SpeedCom.prototype.isUp = function () {
            return this.speedY < 0;
        };
        return SpeedCom;
    }(war.ComBase));
    war.SpeedCom = SpeedCom;
    __reflect(SpeedCom.prototype, "war.SpeedCom");
})(war || (war = {}));
//# sourceMappingURL=SpeedCom.js.map