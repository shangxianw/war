var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var IDManager = (function () {
    function IDManager() {
        this.init();
    }
    IDManager.prototype.init = function () {
        this.newId = 0;
    };
    IDManager.prototype.destroy = function () {
        this.newId = 0;
    };
    IDManager.prototype.getNewId = function () {
        this.newId++;
        return this.newId;
    };
    IDManager.Ins = function () {
        if (IDManager.Instance == null)
            IDManager.Instance = new IDManager();
        return IDManager.Instance;
    };
    return IDManager;
}());
__reflect(IDManager.prototype, "IDManager");
//# sourceMappingURL=IDManager.js.map