var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var DataBase = (function () {
    function DataBase() {
        this.initAll();
    }
    DataBase.prototype.initAll = function () {
        this.hasCode = IDManager.Ins().getHashCode();
        this.attrMap = new Hash();
        this.init();
    };
    DataBase.prototype.destroyAll = function () {
        this.hasCode = null;
        for (var _i = 0, _a = this.attrMap.values(); _i < _a.length; _i++) {
            var itemArray = _a[_i];
            for (var _b = 0, itemArray_1 = itemArray; _b < itemArray_1.length; _b++) {
                var item = itemArray_1[_b];
                item.destroy();
            }
        }
        this.attrMap.destroy();
        this.destroy();
    };
    DataBase.prototype.addAttrListener = function (attr, cbFn, thisObj) {
        if (attr == null || cbFn == null || thisObj == null) {
            return false;
        }
        var itemArray;
        if (this.attrMap.has(attr) == false) {
            itemArray = [];
            this.attrMap.set(attr, itemArray);
        }
        itemArray = this.attrMap.get(attr);
        var item = new CBData();
        item.packData1(cbFn, thisObj);
        itemArray.push(item);
        return true;
    };
    DataBase.prototype.removeAttrListener = function (attr, cbFn, thisObj) {
        if (attr == null || cbFn == null || thisObj == null) {
            return false;
        }
        if (this.attrMap.has(attr) == false) {
            return true;
        }
        var array = this.attrMap.get(attr);
        var itemArray = DataUtils.CopyArray(array);
        for (var i = 0, len = itemArray.length; i < len; i++) {
            var item = itemArray[i];
            if (item.cbFn == cbFn && item.thisObj == thisObj) {
                array.splice(i, 1);
                item.destroy();
                item = null;
            }
        }
        return true;
    };
    DataBase.prototype.updateAttr = function (attr, value) {
        if (attr == null || this.attrMap.has(attr) == false) {
            return false;
        }
        this[attr] = value;
        this.flush(attr);
    };
    DataBase.prototype.flush = function (attr) {
        var itemArray = this.attrMap.get(attr);
        for (var i = 0, len = itemArray.length; i < len; i++) {
            var item = itemArray[i];
            item.exec();
        }
    };
    return DataBase;
}());
__reflect(DataBase.prototype, "DataBase");
//# sourceMappingURL=DataBase.js.map