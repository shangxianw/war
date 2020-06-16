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
    MathUtils.CheckIsCross = function () {
        //计算向量叉乘
        var crossMul = function (v1, v2) {
            return v1.x * v2.y - v1.y * v2.x;
        };
        //判断两条线段是否相交  
        var checkCross = function (p1, p2, p3, p4) {
            var v1 = { x: p1.x - p3.x, y: p1.y - p3.y }, v2 = { x: p2.x - p3.x, y: p2.y - p3.y }, v3 = { x: p4.x - p3.x, y: p4.y - p3.y }, v = crossMul(v1, v3) * crossMul(v2, v3);
            v1 = { x: p3.x - p1.x, y: p3.y - p1.y };
            v2 = { x: p4.x - p1.x, y: p4.y - p1.y };
            v3 = { x: p2.x - p1.x, y: p2.y - p1.y };
            return (v <= 0 && crossMul(v1, v3) * crossMul(v2, v3) <= 0) ? true : false;
        };
        //判断点是否在多边形内  
        var checkPP = function (point, polygon) {
            var p1, p2, p3, p4;
            p1 = point;
            p2 = { x: -100, y: point.y };
            var count = 0;
            //对每条边都和射线作对比  
            for (var i = 0; i < polygon.length - 1; i++) {
                p3 = polygon[i];
                p4 = polygon[i + 1];
                if (checkCross(p1, p2, p3, p4) == true) {
                    count++;
                }
            }
            p3 = polygon[polygon.length - 1];
            p4 = polygon[0];
            if (checkCross(p1, p2, p3, p4) == true) {
                count++;
            }
            return (count % 2 == 0) ? false : true;
        };
    };
    return MathUtils;
}());
__reflect(MathUtils.prototype, "MathUtils");
//# sourceMappingURL=MathUtils.js.map