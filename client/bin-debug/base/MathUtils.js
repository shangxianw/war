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
        var h = Math.cos(r) * hypoSide; // 邻边
        var w = Math.sin(r) * hypoSide; // 对边
        return [h, w]; // 返回后记得保留小数点后两位
    };
    MathUtils.CalcAngle = function (x1, y1, x2, y2) {
        y1 = -y1; // 因为舞台的坐标系统与数学的坐标系统y是相反的。
        y2 = -y2;
        if (x1 == x2 && y1 == y2)
            return 0; // 其实应该是报错才对。
        if (x1 == x2 && y2 - y1 < 0)
            return 90;
        else if (x1 == x2 && y2 - y1 > 0)
            return 270;
        var h = x2 - x1;
        var w = y2 - y1;
        var hypo = Math.sqrt(h * h + w * w);
        var angle = Math.acos((w * w - h * h - hypo * hypo) / (-2 * h * hypo)) * 180 / Math.PI;
        if (w > 0)
            angle = 180 + (180 - angle);
        return angle;
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