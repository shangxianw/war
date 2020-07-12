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
var LayerManager = (function (_super) {
    __extends(LayerManager, _super);
    function LayerManager() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LayerManager.prototype.init = function () {
        if (this.stageMain == null)
            return;
    };
    LayerManager.prototype.destroy = function () {
        this.war = null;
        this.panel = null;
        this.stageMain = null;
    };
    LayerManager.prototype.initLayer = function (main) {
        this.stageMain = main;
        this.war = new eui.UILayer();
        this.war.name = "warLayer";
        this.stageMain.addChild(this.war);
        this.panel = new eui.UILayer();
        this.stageMain.addChild(this.panel);
        this.panel.name = "panelLayer";
    };
    LayerManager.Ins = function () {
        if (LayerManager.Instance == null)
            LayerManager.Instance = new LayerManager();
        return LayerManager.Instance;
    };
    return LayerManager;
}(DataBase));
__reflect(LayerManager.prototype, "LayerManager");
//# sourceMappingURL=LayerManager.js.map