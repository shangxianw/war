var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var IDManager = (function () {
    function IDManager() {
        this.init();
    }
    IDManager.prototype.init = function () {
        this.hasCode = 0;
    };
    IDManager.prototype.destroy = function () {
        this.hasCode = 0;
    };
    IDManager.prototype.getHashCode = function () {
        this.hasCode++;
        return this.hasCode;
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