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
        return _super.call(this) || this;
    }
    ViewManager.prototype.init = function () {
        this.uiMap = new Hash();
    };
    ViewManager.prototype.destroy = function () {
        for (var _i = 0, _a = this.uiMap.map; _i < _a.length; _i++) {
            var ui = _a[_i];
            ui.destroyAll();
        }
        this.uiMap.destroy();
        this.uiMap = null;
    };
    ViewManager.prototype.open = function (panelId, data) {
        if (data === void 0) { data = null; }
        if (this.uiMap.has(panelId) == false) {
            var viewClass = ViewIdConst.GetView(panelId);
            if (viewClass == null)
                return LogUtils.Warn("no this panel : " + panelId);
            var newView = new viewClass();
            this.uiMap.set(panelId, newView);
        }
        var view = this.uiMap.get(panelId);
        view.initData(data); // 此处需要做的是添加一个loading过程
        if (view.Layer != null)
            view.Layer.addChild(view);
    };
    ViewManager.prototype.close = function (panelId) {
        if (this.uiMap.has(panelId) == false) {
            return LogUtils.Warn("no this panel: " + panelId);
        }
        var view = this.uiMap.get(panelId);
        view.destroyAll();
        if (view.Layer != null)
            view.Layer.removeChild(view);
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