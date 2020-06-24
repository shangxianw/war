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
/**
 * 面板管理器
 * 关闭会销毁面板，并且删除资源，不做缓存
 */
var ViewManager = (function (_super) {
    __extends(ViewManager, _super);
    function ViewManager() {
        return _super.call(this) || this;
    }
    ViewManager.prototype.init = function () {
        this.uiMap = new Hash();
    };
    ViewManager.prototype.destroy = function () {
        for (var _i = 0, _a = this.uiMap.values(); _i < _a.length; _i++) {
            var ui = _a[_i];
            ui.destroyAll();
        }
        this.uiMap.destroy();
        this.uiMap = null;
    };
    ViewManager.prototype.open = function (cls, data) {
        if (data === void 0) { data = null; }
        var className = cls.prototype.__class__; // Utils.GetClassNameByObj(cls);
        if (className == null) {
            LogUtils.Error("不存在类名");
            return false;
        }
        if (this.uiMap.has(className) == true) {
            LogUtils.Error("面板已经打开");
            return false;
        }
        try {
            var v = cls;
            var viewObj = new v;
            this.uiMap.set(className, viewObj);
        }
        catch (e) {
            LogUtils.Error("创建面板发生错误");
            return false;
        }
        return this.handleView(className, data);
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
            LogUtils.Error("参数有误");
            return false;
        }
        if (className == null) {
            LogUtils.Error("不存在类名");
            return false;
        }
        if (this.uiMap.has(className) == false) {
            LogUtils.Warn("\u5173\u95ED\u4E0D\u5B58\u5728\u7684\u9762\u677F " + className);
            return false;
        }
        var view = this.uiMap.get(className);
        view.destroyAll();
        if (view.parent != null) {
            view.parent.removeChild(view);
        }
        else {
            LogUtils.Warn("\u9762\u677F\u6CA1\u6709\u7236\u7EA7");
            return false;
        }
        if (view.viewInfo.resGroup != null && view.viewInfo.resGroup.length <= 0 && view.viewInfo.resGroupId != null)
            ResManager.Ins().destroyGroup(view.viewInfo.resGroupId);
        this.uiMap.remove(className);
        view = null;
        return true;
    };
    ViewManager.prototype.getView = function (cls) {
        var className = Utils.GetClassNameByObj(cls);
        if (className == null) {
            LogUtils.Error("不存在类名");
            return null;
        }
        if (this.uiMap.has(className) == false) {
            LogUtils.Warn("\u4E0D\u5B58\u5728\u9762\u677F " + className);
            return null;
        }
        // 有可能返回的是缓存中的面板，即该面板没有打开
        return this.uiMap.get(className);
    };
    ViewManager.prototype.handleView = function (className, data) {
        var _this = this;
        if (data === void 0) { data = null; }
        if (this.uiMap.has(className) == false) {
            LogUtils.Error("\u4E0D\u5B58\u5728\u9762\u677F " + className);
            return false;
        }
        var view = this.uiMap.get(className);
        var parent = view.viewInfo.layer;
        var resGroup = view.viewInfo.resGroup;
        // 先加载资源，再添加面板
        if (resGroup != null) {
            this.open(home.LoadingTips); // 需要保证 home.LoadingTips 面板内的resGroup不能有值，让它走else的部分，否则会陷入死循环。
            ResManager.Ins().loadGroup(resGroup, function (e) {
                _this.close(home.LoadingTips);
                view.checkSkinSourceRef();
                view.initData(data);
                parent.addChild(view);
                view.initView();
            }, this, null, function (e) {
                LogUtils.Error("\u52A0\u8F7D\u9762\u677F\u5931\u8D25 " + className);
            }, 0);
        }
        else {
            view.initData(data);
            parent.addChild(view);
            view.initView();
        }
        return true;
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