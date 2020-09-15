var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var DataBase = (function () {
    function DataBase() {
        var param = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            param[_i] = arguments[_i];
        }
        this.hasCode = IDManager.Ins().getHashCode();
        this.attrMap = new Hash();
        this.init.apply(this, param);
    }
    DataBase.prototype.init = function () {
        var anyParam = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            anyParam[_i] = arguments[_i];
        }
    };
    DataBase.prototype.destroy = function () {
        this.removeAllAttrListener();
    };
    DataBase.prototype.addAttrListener = function (attr, cbFn, thisObj) {
        // 错误参数
        if (attr == null || cbFn == null || thisObj == null) {
            return false;
        }
        if (this.attrMap.has(attr) == false) {
            this.attrMap.set(attr, []);
        }
        else {
            // 重复注册
            var array = this.attrMap.get(attr);
            for (var _i = 0, array_1 = array; _i < array_1.length; _i++) {
                var item = array_1[_i];
                if (item[0] == attr && item[1] == cbFn && item[2] == thisObj)
                    return false;
            }
        }
        var itemArray = this.attrMap.get(attr);
        itemArray.push([attr, cbFn, thisObj]);
        return true;
    };
    DataBase.prototype.removeAttrListener = function (attr, cbFn, thisObj) {
        // 错误参数
        if (attr == null || cbFn == null || thisObj == null) {
            return false;
        }
        if (this.attrMap.has(attr) == false) {
            return true;
        }
        var array = this.attrMap.get(attr);
        var index = 0;
        for (var _i = 0, array_2 = array; _i < array_2.length; _i++) {
            var item = array_2[_i];
            if (item[0] == attr && item[1] == cbFn && item[2] == thisObj)
                return true;
            index += 1;
        }
        return false;
    };
    DataBase.prototype.removeAllAttrListener = function () {
        for (var _i = 0, _a = this.attrMap.values(); _i < _a.length; _i++) {
            var item = _a[_i];
            item[0] = item[1] = item[2] = null;
        }
        this.attrMap.destroy();
    };
    DataBase.prototype.updateAttr = function (attr, value) {
        if (attr == null)
            return false;
        if (this.attrMap.has(attr) == false)
            return true;
        this[attr] = value;
        return this.flush(attr);
    };
    DataBase.prototype.flush = function (attr) {
        if (this.attrMap.has(attr) == false)
            return true;
        var array = this.attrMap.get(attr);
        for (var _i = 0, array_3 = array; _i < array_3.length; _i++) {
            var item = array_3[_i];
            item[1].apply(item[2]);
        }
        return true;
    };
    return DataBase;
}());
__reflect(DataBase.prototype, "DataBase");
//# sourceMappingURL=DataBase.js.map