var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Hash = (function () {
    function Hash() {
        this.init();
    }
    Hash.prototype.init = function () {
        this.map = new Map();
    };
    Hash.prototype.destroy = function () {
        this.map.clear();
        this.map = null;
    };
    Hash.prototype.set = function (key, value) {
        this.map.set(key, value);
    };
    Hash.prototype.remove = function (key) {
        var item = this.map.get(key);
        this.map.delete(key);
        return item;
    };
    Hash.prototype.get = function (key) {
        return this.map.get(key);
    };
    Hash.prototype.has = function (key) {
        return this.map.has(key);
    };
    Hash.prototype.forEach = function (cbFn, thisObj) {
        var _this = this;
        if (cbFn == null || thisObj == null)
            return LogUtils.Error("Hash\uFF1A\u53C2\u6570\u6709\u8BEF");
        this.map.forEach(function (value, key, map) {
            cbFn.call(_this, value, key, map);
        });
    };
    Object.defineProperty(Hash.prototype, "len", {
        get: function () {
            return this.map.size;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Hash.prototype, "values", {
        get: function () {
            var array = [];
            this.map.forEach(function (value, key, map) {
                array.push(value);
            });
            return array;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Hash.prototype, "keys", {
        get: function () {
            var array = [];
            this.map.forEach(function (value, key, map) {
                array.push(key);
            });
            return array;
        },
        enumerable: true,
        configurable: true
    });
    return Hash;
}());
__reflect(Hash.prototype, "Hash");
//# sourceMappingURL=Hash.js.map