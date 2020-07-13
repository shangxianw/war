var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var DataBase = (function () {
    function DataBase() {
        this.initAll();
    }
    DataBase.prototype.initAll = function () {
        this.hasCode = IDManager.Ins().getHashCode();
        this.init();
    };
    DataBase.prototype.destroyAll = function () {
        this.hasCode = null;
        this.destroy();
    };
    return DataBase;
}());
__reflect(DataBase.prototype, "DataBase");
