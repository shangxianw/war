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
    // 销毁以 DataBase 为父类的数组
    DataUtils.DestroyDataBaseArray = function (arr, setNull) {
        if (setNull === void 0) { setNull = true; }
        for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
            var item = arr_1[_i];
            item.destroy();
        }
        arr.length = 0;
        if (setNull == true)
            arr = null;
    };
    return DataUtils;
}());
__reflect(DataUtils.prototype, "DataUtils");
//# sourceMappingURL=DataUtils.js.map