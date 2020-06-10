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
        if (GameData.DevelopMode == DevelopMode.DEBUG)
            console.log(desc);
    };
    return LogUtils;
}());
__reflect(LogUtils.prototype, "LogUtils");
//# sourceMappingURL=LogUtils.js.map