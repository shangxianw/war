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
var home;
(function (home) {
    var WarMatchPanelData = (function (_super) {
        __extends(WarMatchPanelData, _super);
        function WarMatchPanelData() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        WarMatchPanelData.prototype.init = function () {
            this.resGroup = "";
            this.layer = LayerManager.Ins().Panel;
        };
        WarMatchPanelData.prototype.destroy = function () {
        };
        WarMatchPanelData.prototype.packData = function () {
        };
        return WarMatchPanelData;
    }(ViewData));
    home.WarMatchPanelData = WarMatchPanelData;
    __reflect(WarMatchPanelData.prototype, "home.WarMatchPanelData");
    var WarMatchPanel = (function (_super) {
        __extends(WarMatchPanel, _super);
        function WarMatchPanel() {
            return _super.call(this, "WarMatchPanelSkin", WarMatchPanelData) || this;
        }
        WarMatchPanel.prototype.init = function () {
            this.info.packData();
        };
        WarMatchPanel.prototype.destroy = function () {
            if (this.info != null)
                this.info.destroyAll();
        };
        WarMatchPanel.prototype.initData = function (data) {
            this.info.packData();
        };
        WarMatchPanel.prototype.initView = function () {
        };
        return WarMatchPanel;
    }(ViewBase));
    home.WarMatchPanel = WarMatchPanel;
    __reflect(WarMatchPanel.prototype, "home.WarMatchPanel");
})(home || (home = {}));
//# sourceMappingURL=WarMatchPanel.js.map