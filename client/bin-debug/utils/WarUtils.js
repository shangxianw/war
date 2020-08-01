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
        WarUtils.CreateStepEntity = function (x, y, w, h, parent) {
        };
        WarUtils.CreatePlayerEntity = function (x, y, parent) {
        };
        return WarUtils;
    }());
    war.WarUtils = WarUtils;
    __reflect(WarUtils.prototype, "war.WarUtils");
})(war || (war = {}));
//# sourceMappingURL=WarUtils.js.map