var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var DataBaseMixin = (function () {
    function DataBaseMixin() {
    }
    // ---------------------------------------------------------------------- 注册属性
    DataBaseMixin.prototype.addAttrListener = function (propName, cbFn, thisObj) {
        if (LogUtils.CheckParamValid(propName, cbFn, thisObj) == false)
            return false;
        if (this.attrHash.has(propName) == false) {
            this.attrHash.set(propName, []);
        }
        var arr = this.attrHash.get(propName);
        for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
            var cbData_1 = arr_1[_i];
            if (cbData_1.cbFn == cbFn && cbData_1.thisObj == thisObj) {
                LogUtils.Warn(Utils.GetClassNameByObj(this) + " : " + thisObj + " \u91CD\u590D\u6CE8\u518C " + propName);
                return false;
            }
        }
        var cbData = (new CBData).packData(cbFn, thisObj);
        arr.push(cbData);
        cbData.exec();
        return true;
    };
    // ---------------------------------------------------------------------- 移除属性
    DataBaseMixin.prototype.removeAttrListener = function (propName, cbFn, thisObj) {
        if (LogUtils.CheckParamValid(propName, cbFn, thisObj) == false)
            return false;
        if (this.attrHash.has(propName) == false) {
            // LogUtils.Warn(`${Utils.GetClassNameByObj(this)} : ${thisObj} 没有注册 ${propName}`);
            return true;
        }
        var arr = this.attrHash.get(propName), cbData;
        for (var i = 0, len = arr.length; i < len; i++) {
            cbData = arr[i];
            if (cbData == null) {
                LogUtils.Warn(Utils.GetClassNameByObj(this) + " : \u53D1\u73B0\u7A7A\u5BF9\u8C61");
                continue;
            }
            if (cbData.cbFn == cbFn && cbData.thisObj == thisObj) {
                arr.splice(i, 1);
                cbData.destroy();
                cbData = null;
                return true;
            }
        }
        LogUtils.Warn(Utils.GetClassNameByObj(this) + " : " + this + " \u6CA1\u6709\u6CE8\u518C " + propName);
        return false; //没有注册
    };
    // ---------------------------------------------------------------------- 移除属性监听
    DataBaseMixin.prototype.removeAllAttrListener = function () {
        for (var _i = 0, _a = this.attrHash.values(); _i < _a.length; _i++) {
            var value = _a[_i];
            for (var _b = 0, value_1 = value; _b < value_1.length; _b++) {
                var cbData = value_1[_b];
                cbData.destroy();
                cbData = null;
            }
            value.length = 0;
        }
        this.attrHash.destroy();
    };
    // ---------------------------------------------------------------------- 发射属性
    DataBaseMixin.prototype.setAttr = function (propName, value) {
        if (LogUtils.CheckParamValid(propName) == false)
            return null;
        Object.defineProperty(this, propName, {
            value: value,
            writable: true
        });
        this.flushAttr(propName);
    };
    // ---------------------------------------------------------------------- 注册属性2
    DataBaseMixin.prototype.flushAttr = function (propName) {
        if (LogUtils.CheckParamValid(propName) == false)
            return false;
        if (this.attrHash.has(propName) == false) {
            LogUtils.Warn(Utils.GetClassNameByObj(this) + " : \u6CA1\u6709\u6CE8\u518C " + propName);
        }
        for (var _i = 0, _a = this.attrHash.values(); _i < _a.length; _i++) {
            var value = _a[_i];
            if (value == null) {
                return LogUtils.Warn(Utils.GetClassNameByObj(this) + " : \u53D1\u73B0\u7A7A\u5BF9\u8C61");
            }
            for (var _b = 0, value_2 = value; _b < value_2.length; _b++) {
                var cbData = value_2[_b];
                cbData.exec();
            }
        }
    };
    // ---------------------------------------------------------------------- 给某对象注册属性
    DataBaseMixin.prototype.addAttrCB = function (obj, propName, cbFn, thisObj) {
        if (LogUtils.CheckParamValid(obj, propName, cbFn, thisObj) == false)
            return false;
        if (this.otherAttrHash.has(obj) == false) {
            this.otherAttrHash.set(obj, new Hash());
        }
        var otherHash = this.otherAttrHash.get(obj);
        if (otherHash.has(propName) == false) {
            otherHash.set(propName, []);
        }
        var arr = otherHash.get(propName);
        for (var _i = 0, arr_2 = arr; _i < arr_2.length; _i++) {
            var cbData_2 = arr_2[_i];
            if (cbData_2.cbFn == cbFn && cbData_2.thisObj == thisObj) {
                LogUtils.Warn(Utils.GetClassNameByObj(this) + " : " + thisObj + " \u91CD\u590D\u6CE8\u518C " + propName);
                return false;
            }
        }
        var cbData = (new CBData).packData(cbFn, thisObj);
        arr.push(cbData);
        cbData.exec();
        obj.addAttrListener(propName, cbFn, thisObj);
        return true;
    };
    // ---------------------------------------------------------------------- 给某对象移除属性
    DataBaseMixin.prototype.removeAttrCB = function (obj, propName, cbFn, thisObj) {
        if (LogUtils.CheckParamValid(obj, propName, cbFn, thisObj) == false)
            return false;
        if (this.otherAttrHash.has(obj) == false) {
            return true;
        }
        var otherHash = this.otherAttrHash.get(obj);
        if (otherHash.has(propName) == false) {
            return true;
        }
        var arr = otherHash.get(propName);
        var index = 0;
        for (var _i = 0, arr_3 = arr; _i < arr_3.length; _i++) {
            var cbData = arr_3[_i];
            if (cbData.cbFn == cbFn && cbData.thisObj == thisObj) {
                obj.removeAttrListener(propName, cbFn, thisObj);
                cbData.destroy();
                cbData = null;
                arr.splice(index);
                return true;
            }
            index++;
        }
        LogUtils.Warn(Utils.GetClassNameByObj(this) + " : " + this + " \u6CA1\u6709\u6CE8\u518C " + propName);
        return false;
    };
    // ---------------------------------------------------------------------- 移除所有某对象属性
    DataBaseMixin.prototype.removeAllAttCB = function () {
        for (var _i = 0, _a = this.otherAttrHash.values(); _i < _a.length; _i++) {
            var otherAttrHash = _a[_i];
            for (var _b = 0, _c = otherAttrHash.values(); _b < _c.length; _b++) {
                var cbDataArray = _c[_b];
                for (var _d = 0, cbDataArray_1 = cbDataArray; _d < cbDataArray_1.length; _d++) {
                    var cbData = cbDataArray_1[_d];
                    cbData.destroy();
                    cbData = null;
                }
                cbDataArray.length = 0;
            }
            otherAttrHash.destroy();
            otherAttrHash = null;
        }
        this.otherAttrHash.destroy();
    };
    return DataBaseMixin;
}());
__reflect(DataBaseMixin.prototype, "DataBaseMixin");
var CBData = (function () {
    function CBData() {
    }
    CBData.prototype.init = function () {
    };
    CBData.prototype.destroy = function () {
    };
    CBData.prototype.packData = function (cbFn, thisObj, param) {
        if (param === void 0) { param = null; }
        this.cbFn = cbFn;
        this.thisObj = thisObj;
        this.param = param;
        return this;
    };
    CBData.prototype.exec = function (query) {
        if (this.cbFn != null || this.thisObj != null) {
            if (this.param != null)
                this.cbFn.call(this.thisObj, this.param, query);
            else
                this.cbFn.call(this.thisObj, query);
        }
    };
    return CBData;
}());
__reflect(CBData.prototype, "CBData");
//# sourceMappingURL=DataBaseMixin.js.map