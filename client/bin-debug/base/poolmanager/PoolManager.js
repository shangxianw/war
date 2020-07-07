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
 * 对象池管理
 * push之前先要自行 destroy 一波，以确保没有内存泄漏
 *
 */
var PoolManager = (function (_super) {
    __extends(PoolManager, _super);
    function PoolManager() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PoolManager.prototype.init = function () {
        this.poolMap = new Hash();
    };
    PoolManager.prototype.destroy = function () {
        for (var _i = 0, _a = this.poolMap.values(); _i < _a.length; _i++) {
            var value = _a[_i];
            if (value == null)
                return;
            for (var _b = 0, value_1 = value; _b < value_1.length; _b++) {
                var value2 = value_1[_b];
            }
        }
        this.poolMap.destroy();
        this.poolMap = null;
    };
    PoolManager.prototype.push = function (obj) {
        if (obj == null)
            return LogUtils.Warn("PoolManager:\u4F20\u5165\u4E86\u4E00\u4E2A\u7A7A\u5BF9\u8C61");
        var className = Utils.GetClassNameByObj(obj);
        if (this.poolMap.has(className) == false) {
            this.poolMap.set(className, new Array());
        }
        var arr = this.poolMap.get(className);
        if (arr.indexOf(obj) < 0)
            arr.push(obj);
    };
    PoolManager.prototype.pop = function (cls) {
        // 需要判断className是否为可以实例化的类名
        // doSomething
        if (this.poolMap.has(cls.name) == false) {
            return new cls();
        }
        var arr = this.poolMap.get(cls.name);
        var item = arr.pop();
        if (item == null)
            return (new cls); // (new (cls as any))(); 如果这样写，就会先new，然后返回一个对象，在执行()的操作。
        if (item["initAll"] != null)
            item.initAll(); // 因为是二次使用，所以不会调用init的，需要手动调用一次。
        return item;
    };
    PoolManager.Ins = function () {
        if (PoolManager.Instance == null)
            PoolManager.Instance = new PoolManager();
        return PoolManager.Instance;
    };
    // ---------------------------------------------------------------------- test
    // 检查内部对象是否还有监听器
    PoolManager.prototype.checkHasListener = function () {
    };
    return PoolManager;
}(DataBase));
__reflect(PoolManager.prototype, "PoolManager");
//# sourceMappingURL=PoolManager.js.map