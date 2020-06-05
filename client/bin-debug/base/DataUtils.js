var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var DataUtils = (function () {
    function DataUtils() {
    }
    // 销毁以 DataBase 为父类的哈希对象
    DataUtils.DestroyDataBaseMap = function (map, setNull) {
        if (setNull === void 0) { setNull = true; }
        var item;
        for (var key in map.values) {
            item = map.get(key);
            if (item == null)
                continue;
            item.destroyAll();
            PoolManager.Ins().push(item);
        }
        map.destroy();
        if (setNull == true)
            map = null; // ???????????????????????????????????????????????可以的吗
    };
    // 销毁以 UIBase 为父类的哈希对象
    DataUtils.DestroyUIBaseMap = function (map, setNull) {
        if (setNull === void 0) { setNull = true; }
        var item;
        for (var key in map.values) {
            item = map.get(key);
            if (item == null)
                continue;
            item.destroyAll();
            PoolManager.Ins().push(item);
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
            item.destroyAll();
            PoolManager.Ins().push(item);
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
            item.destroyAll();
            PoolManager.Ins().push(item);
        }
        arr.length = 0;
        if (setNull == true)
            arr = null;
    };
    return DataUtils;
}());
__reflect(DataUtils.prototype, "DataUtils");
//# sourceMappingURL=DataUtils.js.map