var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/**
 * 数据基类
 * 存在一个唯一id，以记录该对象
 * 支持数据分发，但因为该功能不是每个对象都会用到，所以用到惰性的方式
 */
var DataBase = (function () {
    function DataBase() {
        this.initAll();
    }
    DataBase.prototype.initAll = function () {
        this.id = IDManager.Ins().getNewId();
        this.init();
    };
    DataBase.prototype.destroyAll = function () {
        for (var _i = 0, _a = this.hash.values; _i < _a.length; _i++) {
            var arr = _a[_i];
            for (var _b = 0, arr_1 = arr; _b < arr_1.length; _b++) {
                var cbData = arr_1[_b];
                cbData.destroy();
                PoolManager.Ins().push(cbData);
            }
            arr.length = 0;
            PoolManager.Ins().pushArray(arr);
        }
        this.hash.destroy();
        this._hash = null;
        this.destroy();
    };
    DataBase.prototype.addAttrListener = function (propName, cbFn, thisObj, param) {
        if (param === void 0) { param = null; }
        if (this.hash.get(propName) == false)
            this.hash.set(propName, PoolManager.Ins().popArray());
        var arr = this.hash.get(propName);
        var cbData;
        for (var _i = 0, arr_2 = arr; _i < arr_2.length; _i++) {
            cbData = arr_2[_i];
            if (cbData.cbFn == cbFn && cbData.thisObj == thisObj)
                return false; // 重复注册
        }
        cbData = PoolManager.Ins().pop(CBData).PackData(cbFn, thisObj, param);
        arr.push(cbData);
        return true;
    };
    DataBase.prototype.removeAttrListener = function (propName, cbFn, thisObj) {
        if (this.hash.get(propName) == false)
            return false; // 没有注册
        var arr = this.hash.get(propName), i = 0, cbData;
        for (var _i = 0, arr_3 = arr; _i < arr_3.length; _i++) {
            cbData = arr_3[_i];
            if (cbData.cbFn == cbFn && cbData.thisObj == thisObj) {
                arr.splice(i, 1);
                cbData.destroy();
                PoolManager.Ins().push(cbData);
                return true;
            }
            i++;
        }
        return false; //没有注册
    };
    Object.defineProperty(DataBase.prototype, "hash", {
        get: function () {
            if (this._hash == null)
                this._hash = new Hash();
            return this._hash;
        },
        enumerable: true,
        configurable: true
    });
    return DataBase;
}());
__reflect(DataBase.prototype, "DataBase");
//# sourceMappingURL=DataBase.js.map