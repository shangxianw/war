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
    DataUtils.DestroyCBDataMap = function (map, setNull) {
        if (setNull === void 0) { setNull = true; }
        for (var _i = 0, _a = map.values(); _i < _a.length; _i++) {
            var value = _a[_i];
            for (var _b = 0, value_1 = value; _b < value_1.length; _b++) {
                var cbData = value_1[_b];
                cbData.destroy();
                cbData = null;
            }
            value.length = 0;
        }
        map.destroy();
        if (setNull)
            map = null;
    };
    // 销毁以 DataBase 为父类的哈希对象
    DataUtils.DestroyDataBaseMap = function (map, setNull) {
        if (setNull === void 0) { setNull = true; }
        var item;
        for (var key in map.values) {
            item = map.get(key);
            if (item == null)
                continue;
            item.destroy();
        }
        map.destroy();
        if (setNull == true)
            map = null;
    };
    // 销毁以 UIBase 为父类的哈希对象
    DataUtils.DestroyUIBaseMap = function (map, setNull) {
        if (setNull === void 0) { setNull = true; }
        var item;
        for (var _i = 0, _a = map.values(); _i < _a.length; _i++) {
            var item_1 = _a[_i];
            if (item_1 == null)
                continue;
            item_1.destroy();
        }
        map.destroy();
        if (setNull == true)
            map = null;
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
    // 销毁以 UIBase 为父类的数组
    DataUtils.DestroyUIBaseArray = function (arr, setNull) {
        if (setNull === void 0) { setNull = true; }
        for (var _i = 0, arr_2 = arr; _i < arr_2.length; _i++) {
            var item = arr_2[_i];
            item.destroy();
        }
        arr.length = 0;
        if (setNull == true)
            arr = null;
    };
    // 销毁继承 DataBase 的子类
    DataUtils.DestroyDataBaseClass = function (data, setNull) {
        if (setNull === void 0) { setNull = true; }
        if (data != null) {
            data.destroy();
            if (setNull == true)
                data = null;
        }
    };
    return DataUtils;
}());
__reflect(DataUtils.prototype, "DataUtils");
//# sourceMappingURL=DataUtils.js.map