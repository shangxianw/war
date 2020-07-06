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
            this.comId = war.Component.Speed;
            this.angle = 0;
            this.speed = 0;
            this.lastPosArray = [0, 0, 0, 0];
        };
        SpeedCom.prototype.destroy = function () {
        };
        SpeedCom.prototype.setData = function (speed, angle) {
            this.speed = speed;
            this.angle = angle;
        };
        SpeedCom.prototype.setSpeed = function (speed) {
            this.speed = speed;
        };
        SpeedCom.prototype.setAngle = function (angle, x1, y1, x2, y2) {
            if (x1 === void 0) { x1 = null; }
            if (y1 === void 0) { y1 = null; }
            if (x2 === void 0) { x2 = null; }
            if (y2 === void 0) { y2 = null; }
            this.angle = angle;
            if (x1 == null || y1 == null || x2 == null || y2 == null)
                return;
            this.lastPosArray = [x1, y1, x2, y2];
        };
        SpeedCom.prototype.isSamePos = function (x1, y1, x2, y2) {
            if (this.lastPosArray[0] == x1 &&
                this.lastPosArray[1] == y1 &&
                this.lastPosArray[2] == x2 &&
                this.lastPosArray[3] == y2)
                return true;
            return false;
        };
        return SpeedCom;
    }(war.ComBase));
    war.SpeedCom = SpeedCom;
    __reflect(SpeedCom.prototype, "war.SpeedCom");
})(war || (war = {}));
//# sourceMappingURL=SpeedCom.js.map