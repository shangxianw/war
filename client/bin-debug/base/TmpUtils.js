var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/**
 * 存放过往使用过的方法
 */
var TmpUtils = (function () {
    function TmpUtils() {
    }
    /**
     * 计算刻度位置
     * 主要处理刻度等分，但值不等分的进度条
     * @param value 当前值
     * @param values 刻度值，需要标明起始值，如[0, 150, 500, 1000, 2000, 3000]
     * @returns 百分比 0~1
     */
    TmpUtils.CalcBarValueBy = function (value, values) {
        if (values.length < 2)
            return -1;
        // 特殊情况(简化计算)
        var min = values[0];
        if (value <= min)
            return 0;
        var max = values[values.length - 1];
        if (value >= max)
            return 1;
        var item, tarIndex, len = values.length, barWidth = max - min, barSpace = barWidth / (len - 1);
        for (var i = 0; i < len; i++) {
            item = values[i];
            if (value >= item)
                tarIndex = i;
            else {
                var start = values[tarIndex];
                var end = values[i];
                var lastSpace = end - start;
                var leftVaue = value - start;
                // 将刻度值转换为进度条实际的宽度
                return ((barSpace * tarIndex) + (leftVaue / lastSpace) * barSpace) / barWidth;
            }
        }
        return 0;
    };
    return TmpUtils;
}());
__reflect(TmpUtils.prototype, "TmpUtils");
//# sourceMappingURL=TmpUtils.js.map