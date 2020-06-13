var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Hash = (function () {
    function Hash() {
        this.init();
    }
    Hash.prototype.init = function () {
        this.keyArray = [];
        this.valueArray = [];
    };
    Hash.prototype.destroy = function () {
        for (var _i = 0, _a = this.valueArray; _i < _a.length; _i++) {
            var value = _a[_i];
            value = null;
        }
        for (var _b = 0, _c = this.keyArray; _b < _c.length; _b++) {
            var value = _c[_b];
            value = null;
        }
        this.valueArray.length = 0;
        this.keyArray.length = 0;
    };
    // 不支持更新
    Hash.prototype.set = function (key, value) {
        this.keyArray.push(key);
        this.valueArray.push(value);
    };
    Hash.prototype.remove = function (key) {
        var index = this.keyArray.indexOf(key);
        if (index < 0)
            return null;
        this.keyArray.splice(index, 1);
        return this.valueArray.splice(index, 1)[0];
    };
    Hash.prototype.get = function (key) {
        var index = this.keyArray.indexOf(key);
        if (index < 0)
            return null;
        return this.valueArray[index];
    };
    Hash.prototype.has = function (key) {
        return this.keyArray.indexOf(key) >= 0;
    };
    Object.defineProperty(Hash.prototype, "len", {
        get: function () {
            return this.keyArray.length;
        },
        enumerable: true,
        configurable: true
    });
    Hash.prototype.values = function () {
        return this.valueArray;
    };
    Hash.prototype.keys = function () {
        return this.keyArray;
    };
    return Hash;
}());
__reflect(Hash.prototype, "Hash");
//# sourceMappingURL=Hash.js.map