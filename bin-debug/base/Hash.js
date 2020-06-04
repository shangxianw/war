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
    Hash.prototype.destroy = function () {
        for (var k in this.map) {
            if (this.map[k] == null)
                continue;
            this.map[k] = null; // 在考虑要不要帮其执行destroy操作
        }
        this.map = null;
    };
    Hash.prototype.set = function (key, value) {
        this.map[key] = value;
    };
    Hash.prototype.remove = function (key) {
        this.map[key] = null;
        delete this.map[key];
    };
    Hash.prototype.get = function (key) {
        return this.map[key];
    };
    Hash.prototype.has = function (key) {
        return this.map[key] != null;
    };
    Object.defineProperty(Hash.prototype, "values", {
        // 这种做法其实很无语，因为先是遍历一遍组成数组后返回到外面，外面又循环一遍。
        get: function () {
            var arr = [];
            for (var key in this.map) {
                arr.push(this.map[key]);
            }
            return arr;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Hash.prototype, "map", {
        get: function () {
            return this._map;
        },
        set: function (value) {
            this._map = value;
        },
        enumerable: true,
        configurable: true
    });
    return Hash;
}());
__reflect(Hash.prototype, "Hash");
//# sourceMappingURL=Hash.js.map