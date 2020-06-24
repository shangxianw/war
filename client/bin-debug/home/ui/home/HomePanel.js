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
    var HomePanelData = (function (_super) {
        __extends(HomePanelData, _super);
        function HomePanelData() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        HomePanelData.prototype.init = function () {
            this.resGroup = [];
            this.layer = LayerManager.Ins().Panel;
        };
        HomePanelData.prototype.destroy = function () {
        };
        HomePanelData.prototype.packData = function () {
        };
        return HomePanelData;
    }(ViewData));
    home.HomePanelData = HomePanelData;
    __reflect(HomePanelData.prototype, "home.HomePanelData");
    var HomePanel = (function (_super) {
        __extends(HomePanel, _super);
        function HomePanel() {
            return _super.call(this, "HomePanelSkin", HomePanelData) || this;
        }
        HomePanel.prototype.init = function () {
        };
        HomePanel.prototype.destroy = function () {
            if (this.info != null)
                this.info.destroyAll();
        };
        HomePanel.prototype.initData = function (data) {
            this.info.packData();
        };
        HomePanel.prototype.initView = function () {
        };
        return HomePanel;
    }(ViewBase));
    home.HomePanel = HomePanel;
    __reflect(HomePanel.prototype, "home.HomePanel");
})(home || (home = {}));
//# sourceMappingURL=HomePanel.js.map