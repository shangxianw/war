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
var WItemRenderBase = (function (_super) {
    __extends(WItemRenderBase, _super);
    function WItemRenderBase(skinName, data) {
        if (skinName === void 0) { skinName = null; }
        if (data === void 0) { data = null; }
        var _this = _super.call(this) || this;
        if (skinName != null)
            _this.skinName = skinName;
        _this.initAll(data);
        return _this;
    }
    WItemRenderBase.prototype.init = function () { };
    ; // view 刚被创建出来时调用
    WItemRenderBase.prototype.initAll = function (data) {
        if (data === void 0) { data = null; }
        this.id = IDManager.Ins().getNewId();
        this.touchList = [];
        this.init();
    };
    WItemRenderBase.prototype.destroyAll = function () {
        this.removeAllEvent();
        this.removeAllAttrListener();
        this.destroy();
    };
    // ---------------------------------------------------------------------- 注册属性变更相关
    WItemRenderBase.prototype.addAttrListener = function (propName, cbFn, thisObj, param) {
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
    WItemRenderBase.prototype.removeAttrListener = function (propName, cbFn, thisObj) {
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
    WItemRenderBase.prototype.hasAttrListener = function (propName, cbFn, thisObj) {
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
    WItemRenderBase.prototype.setAttr = function (propName, value) {
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
    WItemRenderBase.prototype.updateAttr = function (propName) {
        if (propName == null) {
            LogUtils.Warn(Utils.GetClassNameByObj(this) + " : \u53C2\u6570\u6709\u8BEF");
            return false;
        }
        if (this.hash.has(propName) == false) {
            LogUtils.Warn(Utils.GetClassNameByObj(this) + " : \u6CA1\u6709\u6CE8\u518C " + propName);
        }
        for (var _i = 0, _a = this.hash.values(); _i < _a.length; _i++) {
            var value = _a[_i];
            if (value == null) {
                return LogUtils.Warn(Utils.GetClassNameByObj(this) + " : \u53D1\u73B0\u7A7A\u5BF9\u8C61");
            }
            for (var _b = 0, value_1 = value; _b < value_1.length; _b++) {
                var cbData = value_1[_b];
                cbData.exec();
            }
        }
    };
    WItemRenderBase.prototype.removeAllAttrListener = function () {
        for (var _i = 0, _a = this.hash.values(); _i < _a.length; _i++) {
            var value = _a[_i];
            for (var _b = 0, value_2 = value; _b < value_2.length; _b++) {
                var cbData = value_2[_b];
                cbData.destroy();
                cbData = null;
            }
            value.length = 0;
        }
        this.hash.destroy();
    };
    // ---------------------------------------------------------------------- 注册事件相关
    WItemRenderBase.prototype.addEvent = function (target, type, cbFn, thisObj) {
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
    WItemRenderBase.prototype.removeEvent = function (target, type, cbFn, thisObj) {
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
    WItemRenderBase.prototype.removeAllEvent = function () {
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
    Object.defineProperty(WItemRenderBase.prototype, "hash", {
        get: function () {
            if (this._hash == null)
                this._hash = new Hash();
            return this._hash;
        },
        enumerable: true,
        configurable: true
    });
    return WItemRenderBase;
}(eui.ItemRenderer));
__reflect(WItemRenderBase.prototype, "WItemRenderBase");
//# sourceMappingURL=WItemRenderBase.js.map