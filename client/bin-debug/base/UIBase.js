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
    function UIBase(skinName) {
        if (skinName === void 0) { skinName = null; }
        var _this = _super.call(this) || this;
        _this.skinName = skinName;
        _this.initAll();
        return _this;
    }
    UIBase.prototype.initAll = function () {
        this.id = IDManager.Ins().getNewId();
        this.init();
    };
    UIBase.prototype.destroyAll = function () {
        this.hash.forEach(function (value, key) {
            for (var _i = 0, value_1 = value; _i < value_1.length; _i++) {
                var cbData = value_1[_i];
                cbData.destroy();
                cbData = null;
            }
            value.length = 0;
        }, this);
        this.hash.destroy();
        this._hash = null;
        this.destroy();
    };
    UIBase.prototype.addAttrListener = function (propName, cbFn, thisObj, param) {
        if (param === void 0) { param = null; }
        if (propName == null || cbFn == null || thisObj == null) {
            LogUtils.Warn(Utils.GetClassNameByObj(this) + " : \u53C2\u6570\u6709\u8BEF");
            return false;
        }
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
        return true;
    };
    UIBase.prototype.removeAttrListener = function (propName, cbFn, thisObj) {
        if (propName == null || cbFn == null || thisObj == null) {
            LogUtils.Warn(Utils.GetClassNameByObj(this) + " : \u53C2\u6570\u6709\u8BEF");
            return false;
        }
        if (this.hash.has(propName) == false) {
            LogUtils.Warn(Utils.GetClassNameByObj(this) + " : " + thisObj + " \u6CA1\u6709\u6CE8\u518C " + propName);
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
    UIBase.prototype.hasAttrListener = function (propName, cbFn, thisObj) {
        if (propName == null || cbFn == null || thisObj == null) {
            LogUtils.Warn(Utils.GetClassNameByObj(this) + " : \u53C2\u6570\u6709\u8BEF");
            return false;
        }
        if (this.hash.has(propName) == false) {
            LogUtils.Warn(Utils.GetClassNameByObj(this) + " : " + thisObj + " \u6CA1\u6709\u6CE8\u518C " + propName);
            return false;
        }
        var arr = this.hash.get(propName), cbData;
        for (var i = 0, len = arr.length; i < len; i++) {
            cbData = arr[i];
            if (cbData == null) {
                LogUtils.Warn(Utils.GetClassNameByObj(this) + " : \u53D1\u73B0\u7A7A\u5BF9\u8C61");
                continue;
            }
            if (cbData.cbFn == cbFn && cbData.thisObj == thisObj) {
                return true;
            }
        }
        LogUtils.Warn(Utils.GetClassNameByObj(this) + " : " + thisObj + " \u6CA1\u6709\u6CE8\u518C " + propName);
        return false; //没有注册
    };
    UIBase.prototype.setAttr = function (propName, value) {
        if (propName == null) {
            LogUtils.Warn(Utils.GetClassNameByObj(this) + " : \u53C2\u6570\u6709\u8BEF");
            return false;
        }
        Object.defineProperty(this, propName, {
            value: value,
            writable: true
        });
        this.updateAttr(propName);
    };
    UIBase.prototype.updateAttr = function (propName) {
        var _this = this;
        if (propName == null) {
            LogUtils.Warn(Utils.GetClassNameByObj(this) + " : \u53C2\u6570\u6709\u8BEF");
            return false;
        }
        if (this.hash.has(propName) == false) {
            LogUtils.Warn(Utils.GetClassNameByObj(this) + " : \u6CA1\u6709\u6CE8\u518C " + propName);
        }
        this.hash.forEach(function (value, key) {
            if (value == null) {
                return LogUtils.Warn(Utils.GetClassNameByObj(_this) + " : \u53D1\u73B0\u7A7A\u5BF9\u8C61");
            }
            for (var _i = 0, value_2 = value; _i < value_2.length; _i++) {
                var cbData = value_2[_i];
                cbData.exec();
            }
        }, this);
    };
    Object.defineProperty(UIBase.prototype, "hash", {
        get: function () {
            if (this._hash == null)
                this._hash = new Hash();
            return this._hash;
        },
        enumerable: true,
        configurable: true
    });
    return UIBase;
}(eui.Component));
__reflect(UIBase.prototype, "UIBase");
//# sourceMappingURL=UIBase.js.map