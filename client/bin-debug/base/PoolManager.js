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
        this.poolMap.forEach(function (value, key) {
            if (value == null)
                return;
            for (var _i = 0, value_1 = value; _i < value_1.length; _i++) {
                var value2 = value_1[_i];
            }
        }, this);
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
    PoolManager.prototype.pop = function (className) {
        // 需要判断className是否为可以实例化的类名
        // doSomething
        if (this.poolMap.has(className) == false) {
            return (new className)();
        }
        var arr = this.poolMap.get(className);
        var item = arr.pop();
        if (item == null)
            return (new className)();
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