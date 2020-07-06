var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/**
 * 数据基类
 * 存在一个唯一id，以记录该对象
 * 支持数据分发，但因为该功能不是每个对象都会用到，所以用到惰性的方式
 */
var DataBase = (function () {
    function DataBase() {
        this.initAll();
    }
    DataBase.prototype.init = function () { };
    ;
    DataBase.prototype.initAll = function () {
        this.iii = IDManager.Ins().getNewId();
        this.attrHash = new Hash();
        this.otherAttrHash = new Hash();
        this.init();
    };
    DataBase.prototype.destroyAll = function () {
        this.removeAllAttrListener();
        this.attrHash = null;
        this.removeAllAttCB();
        this.otherAttrHash = null;
        this.destroy();
    };
    return DataBase;
}());
__reflect(DataBase.prototype, "DataBase");
//# sourceMappingURL=DataBase.js.map