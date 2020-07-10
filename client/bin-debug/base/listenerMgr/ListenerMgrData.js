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
var ListenerMgrData = (function (_super) {
    __extends(ListenerMgrData, _super);
    function ListenerMgrData() {
        return _super.call(this) || this;
    }
    ListenerMgrData.prototype.init = function () {
        this.obj = null;
        this.type = null;
        this.cbFn = null;
        this.thisObj = null;
    };
    ListenerMgrData.prototype.destroy = function () {
        this.obj.removeEventListener(this.type, this.cbFn, this.thisObj);
        this.obj = null;
        this.type = null;
        this.cbFn = null;
        this.thisObj = null;
    };
    ListenerMgrData.prototype.packData = function (obj, type, cbFn, thisObj) {
        this.obj = obj;
        this.type = type;
        this.cbFn = cbFn;
        this.thisObj = thisObj;
        this.obj.addEventListener(this.type, this.cbFn, this.thisObj);
        return this;
    };
    return ListenerMgrData;
}(DataBase));
__reflect(ListenerMgrData.prototype, "ListenerMgrData");
//# sourceMappingURL=ListenerMgrData.js.map