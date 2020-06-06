var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var MathUtils = (function () {
    function MathUtils() {
    }
    MathUtils.CalcSpeedXY = function (speed, oriX, oriY, tarX, tarY) {
        if (oriX == tarX && oriY == tarY)
            return [0, 0];
        var width = tarX - oriX;
        var height = tarY - oriY;
        var hypotenuse = Math.sqrt(width * width + height * height);
        var speedX = (width * speed) / hypotenuse;
        var speedY = (height * speed) / hypotenuse;
        return [speedX, speedY];
    };
    return MathUtils;
}());
__reflect(MathUtils.prototype, "MathUtils");
//# sourceMappingURL=MathUtils.js.map