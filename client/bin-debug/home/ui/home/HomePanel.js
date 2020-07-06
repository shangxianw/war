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
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.resGroup = [];
            _this.layer = LayerManager.Ins().Panel;
            return _this;
        }
        HomePanelData.prototype.init = function () {
        };
        HomePanelData.prototype.destroy = function () {
        };
        HomePanelData.prototype.packData = function () {
        };
        return HomePanelData;
    }(DataBase));
    home.HomePanelData = HomePanelData;
    __reflect(HomePanelData.prototype, "home.HomePanelData", ["IViewData"]);
    var HomePanel = (function (_super) {
        __extends(HomePanel, _super);
        function HomePanel() {
            return _super.call(this, "HomePanelSkin") || this;
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
            var _this = this;
            this.addEvent(this.fightBtn, egret.TouchEvent.TOUCH_TAP, function () {
                ViewManager.Ins().close(_this);
                ViewManager.Ins().open(war.WarMatchPanel);
            }, this);
            var a = new MovieClip();
            a.initData("hero_10010", "hero_10010", "run0", -1);
            this.addChild(a);
            a.x = 300;
            a.y = 300;
            var b = new DragonBonesEffect();
            b.initData("199030", "199030", "199030", 0);
            this.addChild(b);
            b.x = 900;
            b.y = 500;
        };
        return HomePanel;
    }(ViewBase));
    home.HomePanel = HomePanel;
    __reflect(HomePanel.prototype, "home.HomePanel");
})(home || (home = {}));
//# sourceMappingURL=HomePanel.js.map