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
var MessageMgrData = (function (_super) {
    __extends(MessageMgrData, _super);
    function MessageMgrData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MessageMgrData.prototype.init = function () {
    };
    MessageMgrData.prototype.destroy = function () {
    };
    MessageMgrData.prototype.packData = function (type, cbFn, thisObj) {
        this.type = type;
        this.cbFn = cbFn;
        this.thisObj = thisObj;
    };
    MessageMgrData.prototype.exec = function (param) {
        if (param === void 0) { param = null; }
        if (this.cbFn == null || this.thisObj == null)
            return false;
        this.cbFn.call(this.thisObj, param);
    };
    return MessageMgrData;
}(DataBase));
__reflect(MessageMgrData.prototype, "MessageMgrData");
