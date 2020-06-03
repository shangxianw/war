var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Hash = (function () {
    function Hash() {
        this.init();
    }
    Hash.prototype.init = function () {
        this.map = {};
    };
    Hash.prototype.destory = function () {
        this.clear();
        this.map = null;
        return this;
    };
    Hash.prototype.set = function (key, value) {
        if (key == null)
            return false;
        if (this.map[key] != null)
            return false;
        this.map[key] = value;
        return true;
    };
    Hash.prototype.remove = function (key) {
        if (key == null)
            return null;
        var v = this.map[key];
        delete this.map[key];
        return v;
    };
    Hash.prototype.clear = function () {
        var item;
        for (var key in this.map) {
            item = this.map[key];
            delete this.map[key];
            item = null;
        }
    };
    Hash.prototype.get = function (key) {
        return this.map[key];
    };
    Hash.prototype.has = function (key) {
        return this.map[key] != null;
    };
    Object.defineProperty(Hash.prototype, "keys", {
        get: function () {
            var arr = [];
            for (var value in this.map) {
                arr.push(value);
            }
            return arr;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Hash.prototype, "values", {
        get: function () {
            var arr = [];
            for (var value in this.map) {
                arr.push(this.map[value]);
            }
            return arr;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Hash.prototype, "size", {
        get: function () {
            return this.keys.length;
        },
        enumerable: true,
        configurable: true
    });
    return Hash;
}());
__reflect(Hash.prototype, "Hash");
//# sourceMappingURL=Hash.js.map