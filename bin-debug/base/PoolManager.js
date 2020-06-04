var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var PoolManager // 战斗的对象和主城的对象应该分开
 = (function () {
    function PoolManager() {
    }
    PoolManager.prototype.init = function () {
        this.hash = new Hash();
    };
    PoolManager.prototype.destroy = function () {
        var value;
        for (var key in this.hash) {
            value = this.hash.get(key);
            if (value == null)
                continue;
            for (var _i = 0, value_1 = value; _i < value_1.length; _i++) {
                var value2 = value_1[_i];
                if (value2[STR_CONST.DESTROY] != null && typeof (value2[STR_CONST.DESTROY]) == STR_CONST.FUNCTION) {
                    value2[STR_CONST.DESTROY](); // 不知道要不要帮他destroy掉，因为理论上推到对象池之前应该自行destroy一遍。
                    value2 = null;
                }
            }
        }
        this.hash.destroy();
        this.hash = null;
    };
    PoolManager.prototype.push = function (obj) {
        var className = obj.name;
        if (this.hash.has(className) == false)
            this.hash.set(className, new Array());
        var arr = this.hash.get(className);
        arr.push(obj);
    };
    PoolManager.prototype.pop = function (className) {
        if (this.hash.has(className) == false)
            return new className();
        var arr = this.hash.get(className);
        return arr.pop();
    };
    PoolManager.prototype.pushArray = function (arr) {
        if (this.hash.has(STR_CONST.ARRAY) == false)
            this.hash.set(STR_CONST.ARRAY, new Array());
        var arr2 = this.hash.get(STR_CONST.ARRAY);
        arr2.push(arr);
    };
    PoolManager.prototype.popArray = function () {
        if (this.hash.has(STR_CONST.ARRAY) == false)
            return [];
        var arr = this.hash.get(STR_CONST.ARRAY);
        return arr.pop();
    };
    PoolManager.Ins = function () {
        if (PoolManager.Instance == null)
            PoolManager.Instance = new PoolManager();
        return PoolManager.Instance;
    };
    return PoolManager;
}());
__reflect(PoolManager // 战斗的对象和主城的对象应该分开
.prototype, "PoolManager");
//# sourceMappingURL=PoolManager.js.map