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
        this.War = new eui.Component();
        this.War.name = "War";
        Main.addChild(this.War);
        this.Main = new eui.Component();
        this.Main.name = "Main";
        Main.addChild(this.Main);
        this.Panel = new eui.Component();
        this.Panel.name = "Panel";
        Main.addChild(this.Panel);
        this.Menu = new eui.Component();
        this.Menu.name = "Menu";
        Main.addChild(this.Menu);
        this.Tips = new eui.Component();
        this.Tips.name = "Tips";
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