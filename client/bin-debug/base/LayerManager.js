var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var LayerManager = (function () {
    function LayerManager() {
        this.init();
    }
    LayerManager.prototype.init = function () {
        var Main = GameUtils.main;
        if (Main == null)
            return LogUtils.Warn("no Main");
        this.War = new eui.UILayer();
        this.War.name = "War";
        this.War.touchEnabled = false;
        Main.addChild(this.War);
        this.Main = new eui.UILayer();
        this.Main.name = "Main";
        this.Main.touchEnabled = false;
        Main.addChild(this.Main);
        this.Panel = new eui.UILayer();
        this.Panel.name = "Panel";
        this.Panel.touchEnabled = false;
        Main.addChild(this.Panel);
        this.Menu = new eui.UILayer();
        this.Menu.name = "Menu";
        this.Menu.touchEnabled = false;
        Main.addChild(this.Menu);
        this.Tips = new eui.UILayer();
        this.Tips.name = "Tips";
        this.Tips.touchEnabled = false;
        Main.addChild(this.Tips);
    };
    LayerManager.prototype.destroy = function () {
    };
    LayerManager.Ins = function () {
        if (LayerManager.Instance == null)
            LayerManager.Instance = new LayerManager();
        return LayerManager.Instance;
    };
    return LayerManager;
}());
__reflect(LayerManager.prototype, "LayerManager");
//# sourceMappingURL=LayerManager.js.map