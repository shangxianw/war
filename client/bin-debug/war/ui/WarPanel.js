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
var war;
(function (war) {
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
        WarPanelData.prototype.startWar = function () {
            war.WarDataMgr.Ins().updateStepLevel();
            war.WarDataMgr.Ins().startWar();
        };
        WarPanelData.prototype.endWar = function () {
            war.WarDataMgr.Ins().endWar();
        };
        return WarPanelData;
    }(ViewData));
    war.WarPanelData = WarPanelData;
    __reflect(WarPanelData.prototype, "war.WarPanelData");
    var WarPanel = (function (_super) {
        __extends(WarPanel, _super);
        function WarPanel() {
            var _this = _super.call(this) || this;
            _this.skinName = "WarPanelSkin";
            return _this;
        }
        WarPanel.prototype.init = function () {
        };
        WarPanel.prototype.destroy = function () {
        };
        WarPanel.prototype.open = function () {
        };
        return WarPanel;
    }(ViewBase));
    war.WarPanel = WarPanel;
    __reflect(WarPanel.prototype, "war.WarPanel");
})(war || (war = {}));
//# sourceMappingURL=WarPanel.js.map