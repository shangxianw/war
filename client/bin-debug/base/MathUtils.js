var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var MathUtils = (function () {
    function MathUtils() {
    }
    /**
     * 计算直角三角形的两个边
     * @param htpoSide 斜边
     * @param angle 斜边与x轴形成的角
     */
    MathUtils.CalcLegSide = function (hypoSide, angle) {
        if (hypoSide == null && angle == null)
            return [0, 0];
        var r = angle * Math.PI / 180;
        var speedX = Math.cos(r) * hypoSide; // 邻边
        var speedY = Math.sin(r) * hypoSide; // 对边
        return [speedX, speedY]; // 返回后记得保留小数点后两位
    };
    MathUtils.CalcSpeedAngle = function (x1, y1, x2, y2) {
        var speedY = x2 - x1;
        var speedX = y2 - y1;
        Math.sqrt;
        return -Math.atan(speedX / speedY) * 180 / Math.PI;
    };
    MathUtils.IsCircleIntersect = function (x1, y1, radius1, x2, y2, radius2) {
        var width = x2 - x1;
        var height = y2 - y1;
        var distance = Math.sqrt(width * width + height * height);
        return distance < radius1 + radius2;
    };
    MathUtils.CalcDistance = function (x1, y1, x2, y2, needKaiFang) {
        if (needKaiFang === void 0) { needKaiFang = false; }
        var a = (x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1);
        if (needKaiFang == false)
            return a;
        return Math.sqrt(a);
    };
    return MathUtils;
}());
__reflect(MathUtils.prototype, "MathUtils");
//# sourceMappingURL=MathUtils.js.map