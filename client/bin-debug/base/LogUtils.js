var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var LogUtils = (function () {
    function LogUtils() {
    }
    LogUtils.Log = function (desc) {
        if (GameData.DevelopMode == DevelopMode.DEBUG)
            console.log(desc);
    };
    LogUtils.Warn = function (desc) {
        if (GameData.DevelopMode == DevelopMode.DEBUG)
            console.log(desc);
    };
    LogUtils.Error = function (desc) {
        if (GameData.DevelopMode == DevelopMode.DEBUG) {
            var stack = new Error().stack;
            console.error("======================================================================");
            console.log(desc);
            console.log(stack);
            console.error("======================================================================");
        }
    };
    LogUtils.CheckParamValid = function () {
        var params = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            params[_i] = arguments[_i];
        }
        for (var _a = 0, params_1 = params; _a < params_1.length; _a++) {
            var query = params_1[_a];
            console.log(query);
        }
    };
    return LogUtils;
}());
__reflect(LogUtils.prototype, "LogUtils");
//# sourceMappingURL=LogUtils.js.map