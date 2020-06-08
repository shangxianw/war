var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var war;
(function (war) {
    var WarUtils = (function () {
        function WarUtils() {
        }
        WarUtils.Init = function () {
        };
        WarUtils.Destroy = function () {
        };
        // 根据各自坐标计算出实际位置
        WarUtils.ToRealPos = function (x, y) {
            var space = war.WarDataMgr.Ins().space;
            var localX = war.WarDataMgr.Ins().startX + space * x + (space >> 1);
            var localY = war.WarDataMgr.Ins().startY + space * y + (space >> 1);
            return [localX, localY];
        };
        WarUtils.ToRealX = function (x) {
            return war.WarDataMgr.Ins().startX + war.WarDataMgr.Ins().space * x + (war.WarDataMgr.Ins().space >> 1); // 最后括号括起来是因为>>的优先级是最低的
        };
        WarUtils.ToRealY = function (y) {
            return war.WarDataMgr.Ins().startY + war.WarDataMgr.Ins().space * y + (war.WarDataMgr.Ins().space >> 1);
        };
        return WarUtils;
    }());
    war.WarUtils = WarUtils;
    __reflect(WarUtils.prototype, "war.WarUtils");
})(war || (war = {}));
//# sourceMappingURL=WarUtils.js.map