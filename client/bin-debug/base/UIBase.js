var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
/**
 * UI基类
 * 存在一个唯一id，以记录该对象
 * 支持数据分发，但因为该功能不是每个对象都会用到，所以用到惰性的方式
 */
var UIBase = (function (_super) {
    __extends(UIBase, _super);
    function UIBase(skinName, data) {
        if (skinName === void 0) { skinName = null; }
        if (data === void 0) { data = null; }
        var _this = _super.call(this) || this;
        if (skinName != null)
            _this.skinName = skinName;
        _this.initAll(data);
        return _this;
    }
    UIBase.prototype.init = function () { };
    ; // view 刚被创建出来时调用
    UIBase.prototype.initAll = function (data) {
        if (data === void 0) { data = null; }
        this.uniqueCode = IDManager.Ins().getNewId();
        this.touchList = [];
        this.init();
    };
    UIBase.prototype.destroyAll = function () {
        this.removeAllEvent();
        this.removeAllAttrListener();
        this.destroy();
    };
    // ---------------------------------------------------------------------- 注册属性
    UIBase.prototype.addAttrListener = function (propName, cbFn, thisObj, runImmediately, param) {
        if (runImmediately === void 0) { runImmediately = true; }
        if (param === void 0) { param = null; }
        if (LogUtils.CheckParamValid(propName, cbFn, thisObj) == false)
            return false;
        if (this.hash.has(propName) == false) {
            this.hash.set(propName, []);
        }
        var arr = this.hash.get(propName);
        for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
            var cbData_1 = arr_1[_i];
            if (cbData_1.cbFn == cbFn && cbData_1.thisObj == thisObj) {
                LogUtils.Warn(Utils.GetClassNameByObj(this) + " : " + thisObj + " \u91CD\u590D\u6CE8\u518C " + propName);
                return false;
            }
        }
        var cbData = (new CBData).packData(cbFn, thisObj, param);
        arr.push(cbData);
        if (runImmediately == true)
            cbData.exec();
        return true;
    };
    // ---------------------------------------------------------------------- 移除属性
    UIBase.prototype.removeAttrListener = function (propName, cbFn, thisObj) {
        if (LogUtils.CheckParamValid(propName, cbFn, thisObj) == false)
            return false;
        if (this.hash.has(propName) == false) {
            // LogUtils.Warn(`${Utils.GetClassNameByObj(this)} : ${thisObj} 没有注册 ${propName}`);
            return true;
        }
        var arr = this.hash.get(propName), cbData;
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
    UIBase.prototype.removeAllAttrListener = function () {
        for (var _i = 0, _a = this.hash.values(); _i < _a.length; _i++) {
            var value = _a[_i];
            for (var _b = 0, value_1 = value; _b < value_1.length; _b++) {
                var cbData = value_1[_b];
                cbData.destroy();
                cbData = null;
            }
            value.length = 0;
        }
        this.hash.destroy();
    };
    // ---------------------------------------------------------------------- 发射属性
    UIBase.prototype.setAttr = function (propName, value) {
        if (LogUtils.CheckParamValid(propName) == false)
            return false;
        Object.defineProperty(this, propName, {
            value: value,
            writable: true
        });
        this.updateAttr(propName);
    };
    // ---------------------------------------------------------------------- 注册属性2
    UIBase.prototype.updateAttr = function (propName) {
        if (LogUtils.CheckParamValid(propName) == false)
            return false;
        if (this.hash.has(propName) == false) {
            LogUtils.Warn(Utils.GetClassNameByObj(this) + " : \u6CA1\u6709\u6CE8\u518C " + propName);
        }
        for (var _i = 0, _a = this.hash.values(); _i < _a.length; _i++) {
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
    UIBase.prototype.addAttrCB = function (obj, propName, cbFn, thisObj, runImmediately, param) {
        if (runImmediately === void 0) { runImmediately = true; }
        if (param === void 0) { param = null; }
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
        var cbData = (new CBData).packData(cbFn, thisObj, param);
        arr.push(cbData);
        if (runImmediately == true)
            cbData.exec();
        return true;
    };
    // ---------------------------------------------------------------------- 给某对象移除属性
    UIBase.prototype.removeAttrCB = function (obj, propName, cbFn, thisObj) {
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
        for (var _i = 0, arr_3 = arr; _i < arr_3.length; _i++) {
            var cbData = arr_3[_i];
            if (cbData.cbFn == cbFn && cbData.thisObj == thisObj) {
                return true;
            }
        }
        LogUtils.Warn(Utils.GetClassNameByObj(this) + " : " + this + " \u6CA1\u6709\u6CE8\u518C " + propName);
        return false;
    };
    // ---------------------------------------------------------------------- 移除所有某对象属性
    UIBase.prototype.removeAllAttCB = function () {
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
    Object.defineProperty(UIBase.prototype, "hash", {
        // ---------------------------------------------------------------------- 访问器
        get: function () {
            if (this._attrHash == null)
                this._attrHash = new Hash();
            return this._attrHash;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UIBase.prototype, "otherAttrHash", {
        get: function () {
            if (this._otherAttrHash == null)
                this._otherAttrHash = new Hash();
            return this._otherAttrHash;
        },
        enumerable: true,
        configurable: true
    });
    // ---------------------------------------------------------------------- 注册事件相关
    UIBase.prototype.addEvent = function (target, type, cbFn, thisObj) {
        if (target == null || cbFn == null || thisObj == null || type == null || type == "") {
            LogUtils.Error("\u53C2\u6570\u6709\u8BEF");
            return false;
        }
        for (var _i = 0, _a = this.touchList; _i < _a.length; _i++) {
            var item = _a[_i];
            if (item == null)
                continue;
            if (item.target == target && item.cbFn == cbFn && item.thisObj == thisObj && item.type == type) {
                LogUtils.Error("\u91CD\u590D\u6CE8\u518C");
                return false;
            }
        }
        var info = PoolManager.Ins().pop(TouchData);
        info.packData(target, type, cbFn, thisObj);
        this.touchList.push(info);
        return true;
    };
    UIBase.prototype.removeEvent = function (target, type, cbFn, thisObj) {
        if (target == null || cbFn == null || thisObj == null || type == null || type == "") {
            LogUtils.Error("\u53C2\u6570\u6709\u8BEF");
            return false;
        }
        for (var _i = 0, _a = this.touchList; _i < _a.length; _i++) {
            var item = _a[_i];
            if (item == null)
                continue;
            if (item.target == target && item.type == type && item.cbFn == cbFn && item.thisObj == thisObj && item.type == type) {
                var index = this.touchList.indexOf(item);
                if (index >= 0) {
                    this.touchList.splice(index, 1);
                    item.destroyAll();
                    PoolManager.Ins().push(item);
                    return true;
                }
                return false;
            }
        }
        return false;
    };
    UIBase.prototype.removeAllEvent = function () {
        var array = DataUtils.CopyArray(this.touchList);
        for (var _i = 0, array_1 = array; _i < array_1.length; _i++) {
            var item = array_1[_i];
            if (item == null)
                continue;
            item.destroyAll();
            PoolManager.Ins().push(item);
        }
        this.touchList.length = 0;
    };
    return UIBase;
}(eui.Component));
__reflect(UIBase.prototype, "UIBase");
var TouchData = (function (_super) {
    __extends(TouchData, _super);
    function TouchData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TouchData.prototype.init = function () {
    };
    TouchData.prototype.destroy = function () {
        ListenerMgr.Ins().removeEventListen(this.target, this.type, this.cbFn, this.thisObj);
    };
    TouchData.prototype.packData = function (target, type, cbFn, thisObj) {
        this.target = target;
        this.type = type;
        this.cbFn = cbFn;
        this.thisObj = thisObj;
        ListenerMgr.Ins().addEventListen(this.target, this.type, this.cbFn, this.thisObj);
        return this;
    };
    TouchData.prototype.exec = function (e) {
        if (this.cbFn != null && this.thisObj != null)
            this.cbFn.call(this.thisObj, e);
    };
    return TouchData;
}(DataBase));
__reflect(TouchData.prototype, "TouchData");
//# sourceMappingURL=UIBase.js.map