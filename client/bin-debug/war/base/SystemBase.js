var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var war;
(function (war) {
    var SystemBase = (function () {
        function SystemBase() {
        }
        SystemBase.prototype.update = function () {
            var param = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                param[_i] = arguments[_i];
            }
        };
        return SystemBase;
    }());
    war.SystemBase = SystemBase;
    __reflect(SystemBase.prototype, "war.SystemBase");
})(war || (war = {}));
//# sourceMappingURL=SystemBase.js.map