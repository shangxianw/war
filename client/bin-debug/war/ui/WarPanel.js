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
var WarPanelData = (function (_super) {
    __extends(WarPanelData, _super);
    function WarPanelData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WarPanelData.prototype.init = function () {
        this.resGroup = [];
        this.layer = LayerManager.Ins().panel;
    };
    WarPanelData.prototype.destroy = function () {
    };
    return WarPanelData;
}(ViewData));
__reflect(WarPanelData.prototype, "WarPanelData");
var WarPanel = (function (_super) {
    __extends(WarPanel, _super);
    function WarPanel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WarPanel.prototype.init = function () {
        this.skinName = "WarPanelSkin";
    };
    return WarPanel;
}(ViewBase));
__reflect(WarPanel.prototype, "WarPanel");
//# sourceMappingURL=WarPanel.js.map