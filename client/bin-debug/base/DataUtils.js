var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var DataUtils = (function () {
    function DataUtils() {
    }
    // 浅复制
    DataUtils.CopyArray = function (oriArray) {
        var copyArray = [];
        for (var _i = 0, oriArray_1 = oriArray; _i < oriArray_1.length; _i++) {
            var item = oriArray_1[_i];
            copyArray.push(item);
        }
        return copyArray;
    };
    return DataUtils;
}());
__reflect(DataUtils.prototype, "DataUtils");
