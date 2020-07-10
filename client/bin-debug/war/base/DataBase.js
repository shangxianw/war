var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var war;
(function (war) {
    var DataBase = (function () {
        function DataBase() {
            this.initAll();
        }
        DataBase.prototype.initAll = function () {
            this.hasCode = IDManager.Ins().getNewId();
            this.init();
        };
        DataBase.prototype.destroyAll = function () {
            this.hasCode = null;
            this.destroy();
        };
        return DataBase;
    }());
    war.DataBase = DataBase;
    __reflect(DataBase.prototype, "war.DataBase");
})(war || (war = {}));
//# sourceMappingURL=DataBase.js.map