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
var ViewManager = (function (_super) {
    __extends(ViewManager, _super);
    function ViewManager() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ViewManager.prototype.init = function () {
        this.viewMap = new Hash();
    };
    ViewManager.prototype.destroy = function () {
        for (var _i = 0, _a = this.viewMap.values(); _i < _a.length; _i++) {
            var view = _a[_i];
            view.destroyAll();
        }
        this.viewMap = null;
    };
    ViewManager.prototype.open = function (cls, data) {
        if (data === void 0) { data = null; }
        var className = cls.prototype.__class__;
        if (className == null)
            return false;
        if (this.viewMap.has(className) == true) {
            console.warn("面板已打开");
            return true;
        }
        try {
            var viewClass = cls;
            var view = new viewClass();
            this.viewMap.set(className, view);
            this.handView(className, data);
        }
        catch (e) {
            return false;
        }
        return true;
    };
    ViewManager.prototype.close = function (cls) {
        var className;
        if (typeof cls == "function") {
            className = cls.prototype.__class__;
        }
        else if (typeof cls == "object") {
            className = cls.constructor.prototype.__class__;
        }
        else {
            className = cls;
        }
        if (className == null)
            return false;
        if (this.viewMap.has(className) == false)
            return true;
        var view = this.viewMap.remove(className);
        var layer = view.info.layer;
        if (layer == null)
            return;
        layer.removeChild(view);
        view.destroyAll();
        view = null;
        return true;
    };
    ViewManager.prototype.closeAll = function () {
        var itemArray = DataUtils.CopyArray(this.viewMap.keys());
        for (var _i = 0, itemArray_1 = itemArray; _i < itemArray_1.length; _i++) {
            var panel = itemArray_1[_i];
            this.close(panel);
        }
    };
    ViewManager.prototype.handView = function (className, data) {
        if (data === void 0) { data = null; }
        if (this.viewMap.has(className) == false)
            return false;
        var view = this.viewMap.get(className);
        var layer = view.info.layer;
        if (layer == null)
            return;
        view.initData(data);
        layer.addChild(view);
        view.open();
    };
    ViewManager.Ins = function () {
        if (ViewManager.Instance == null)
            ViewManager.Instance = new ViewManager();
        return ViewManager.Instance;
    };
    return ViewManager;
}(DataBase));
__reflect(ViewManager.prototype, "ViewManager");
//# sourceMappingURL=ViewManager.js.map