var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var UIBaseMixin = (function () {
    function UIBaseMixin() {
    }
    // ---------------------------------------------------------------------- 注册事件相关
    UIBaseMixin.prototype.addEvent = function (target, type, cbFn, thisObj, param) {
        if (target == null || cbFn == null || thisObj == null || type == null || type == "") {
            LogUtils.Error("\u53C2\u6570\u6709\u8BEF");
            return false;
        }
        var hasCode = ListenerMgr.Ins().addEventListen(target, type, cbFn, thisObj);
        if (hasCode <= 0) {
            LogUtils.Error("\u6CE8\u518C\u9519\u8BEF");
            return false;
        }
        this.eventList.push(hasCode);
        return true;
    };
    UIBaseMixin.prototype.removeEvent = function (hasCode) {
        if (hasCode == null) {
            LogUtils.Error("\u53C2\u6570\u6709\u8BEF");
            return false;
        }
        var index = this.eventList.indexOf(hasCode);
        if (index < 0)
            return true;
        this.eventList.splice(index, 1);
        ListenerMgr.Ins().removeEventListen(hasCode);
        return false;
    };
    UIBaseMixin.prototype.removeAllEvent = function () {
        for (var _i = 0, _a = this.eventList; _i < _a.length; _i++) {
            var hasCode = _a[_i];
            ListenerMgr.Ins().removeEventListen(hasCode);
        }
        this.eventList.length = 0;
    };
    return UIBaseMixin;
}());
__reflect(UIBaseMixin.prototype, "UIBaseMixin");
//# sourceMappingURL=UIBaseMixin.js.map