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
    var WarMatchPanelData = (function (_super) {
        __extends(WarMatchPanelData, _super);
        function WarMatchPanelData() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        // 应该load资源
        WarMatchPanelData.prototype.init = function () {
            this.resGroup = "war_preload";
            this.layer = LayerManager.Ins().Panel;
        };
        WarMatchPanelData.prototype.destroy = function () {
            // WarDataMgr.Ins().destroyAll();
        };
        WarMatchPanelData.prototype.packData = function () {
        };
        return WarMatchPanelData;
    }(ViewData));
    war.WarMatchPanelData = WarMatchPanelData;
    __reflect(WarMatchPanelData.prototype, "war.WarMatchPanelData");
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
            this.addEvent(this.nextBtn, egret.TouchEvent.TOUCH_TAP, this.OnTap, this);
        };
        WarMatchPanel.prototype.initView = function () {
        };
        WarMatchPanel.prototype.OnTap = function () {
            ViewManager.Ins().close(this);
            ViewManager.Ins().open(war.WarPanel);
        };
        return WarMatchPanel;
    }(ViewBase));
    war.WarMatchPanel = WarMatchPanel;
    __reflect(WarMatchPanel.prototype, "war.WarMatchPanel");
})(war || (war = {}));
//# sourceMappingURL=WarMatchPanel.js.map