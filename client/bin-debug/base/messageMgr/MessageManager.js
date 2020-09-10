var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var MessageManager = (function (_super) {
    __extends(MessageManager, _super);
    function MessageManager() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MessageManager.prototype.init = function () {
        this.msgMap = new Hash();
    };
    MessageManager.prototype.destroy = function () {
        _super.prototype.destroy.call(this);
        for (var _i = 0, _a = this.msgMap.values(); _i < _a.length; _i++) {
            var msgDataArray = _a[_i];
            for (var _b = 0, msgDataArray_1 = msgDataArray; _b < msgDataArray_1.length; _b++) {
                var msgData = msgDataArray_1[_b];
                msgData.destroy();
            }
            msgDataArray.length = 0;
        }
        this.msgMap.destroy();
        this.msgMap = null;
    };
    MessageManager.prototype.addListener = function (type, cbFn, thisObj) {
        if (type == null || cbFn == null || thisObj == null)
            return false;
        if (this.msgMap.has(type) == false) {
            this.msgMap.set(type, []);
        }
        var msgDataArray = this.msgMap.get(type);
        for (var _i = 0, msgDataArray_2 = msgDataArray; _i < msgDataArray_2.length; _i++) {
            var msgData_1 = msgDataArray_2[_i];
            if (msgData_1.type == type && msgData_1.cbFn == cbFn && msgData_1.thisObj == thisObj)
                return false;
        }
        var msgData = new MessageMgrData();
        msgData.packData(type, cbFn, thisObj);
        msgDataArray.push(msgData);
        return true;
    };
    MessageManager.prototype.removeListener = function (type, cbFn, thisObj) {
        if (type == null || cbFn == null || thisObj == null)
            return false;
        if (this.msgMap.has(type) == false)
            return true;
        var msgDataArray = this.msgMap.get(type);
        var index = 0;
        for (var _i = 0, msgDataArray_3 = msgDataArray; _i < msgDataArray_3.length; _i++) {
            var msgData = msgDataArray_3[_i];
            if (msgData.type == type && msgData.cbFn == cbFn && msgData.thisObj == thisObj) {
                msgData.destroy();
                msgDataArray.splice(index, 1);
                msgData = null;
                return true;
            }
            index++;
        }
        return false;
    };
    MessageManager.prototype.update = function (type, param) {
        if (param === void 0) { param = null; }
        if (type == null)
            return false;
        if (this.msgMap.has(type) == false)
            return false;
        var msgDataArray = this.msgMap.get(type);
        for (var _i = 0, msgDataArray_4 = msgDataArray; _i < msgDataArray_4.length; _i++) {
            var msgData = msgDataArray_4[_i];
            if (msgData.type == type)
                msgData.exec(param);
        }
        return true;
    };
    MessageManager.Ins = function () {
        if (MessageManager.Instance == null)
            MessageManager.Instance = new MessageManager();
        return MessageManager.Instance;
    };
    return MessageManager;
}(DataBase));
__reflect(MessageManager.prototype, "MessageManager");
//# sourceMappingURL=MessageManager.js.map