var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var war;
(function (war) {
    var WarUtils = (function () {
        function WarUtils() {
        }
        WarUtils.GridX2LocalX = function (gridX) {
            return war.WarDataMgr.Ins().MapStartX + war.WarDataMgr.Ins().CeilSize * gridX + (war.WarDataMgr.Ins().CeilSize >> 1); // 最后括号括起来是因为>>的优先级是最低的
        };
        WarUtils.GridY2LocalY = function (gridY) {
            return war.WarDataMgr.Ins().MapStartY + war.WarDataMgr.Ins().CeilSize * gridY + (war.WarDataMgr.Ins().CeilSize >> 1);
        };
        WarUtils.LocalX2GridX = function (localX) {
            return Math.floor((localX - war.WarDataMgr.Ins().MapStartX) / war.WarDataMgr.Ins().CeilSize);
        };
        WarUtils.LocalY2GridY = function (localY) {
            return Math.floor((localY - war.WarDataMgr.Ins().MapStartY) / war.WarDataMgr.Ins().CeilSize);
        };
        return WarUtils;
    }());
    war.WarUtils = WarUtils;
    __reflect(WarUtils.prototype, "war.WarUtils");
})(war || (war = {}));
//# sourceMappingURL=WarUtils.js.map