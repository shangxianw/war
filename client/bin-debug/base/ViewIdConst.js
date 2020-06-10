var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var ViewIdConst = (function () {
    function ViewIdConst() {
    }
    ViewIdConst.GetView = function (panelId) {
        switch (panelId) {
            case ViewIdConst.WarPanel: return war.WarPanel;
            case ViewIdConst.DemoPanel: return home.DemoPanel;
            default:
                return null;
        }
    };
    ViewIdConst.DemoPanel = 1;
    ViewIdConst.WarPanel = 3;
    return ViewIdConst;
}());
__reflect(ViewIdConst.prototype, "ViewIdConst");
//# sourceMappingURL=ViewIdConst.js.map