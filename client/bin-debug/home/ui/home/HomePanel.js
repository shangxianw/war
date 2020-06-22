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
            this.kaDataArray = [];
        };
        HomePanelData.prototype.destroy = function () {
            DataUtils.DestroyDataBaseArray(this.kaDataArray);
            this.kaDataArray.length = 0;
        };
        HomePanelData.prototype.packData = function () {
            var teamArray = home.HomeDataMgr.Ins().myData.teamArray;
            for (var _i = 0, teamArray_1 = teamArray; _i < teamArray_1.length; _i++) {
                var kaId = teamArray_1[_i];
                var kaDataInfo = PoolManager.Ins().pop(home.HeroKaData);
                kaDataInfo.packData(kaId);
                this.kaDataArray.push(kaDataInfo);
            }
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
            this.initKa();
            var homeData = home.HomeDataMgr.Ins();
            this.cups.label = String(homeData.myData.cups);
            this.playerName.text = homeData.myData.playerName;
            this.addEvent(this.fightBtn, egret.TouchEvent.TOUCH_TAP, this.OnFightTap, this);
            this.addEvent(this.kaBtn, egret.TouchEvent.TOUCH_TAP, this.OnKaTap, this);
        };
        HomePanel.prototype.initKa = function () {
            for (var i = 0, len = this.info.kaDataArray.length; i < len; i++) {
                var ka = neww(home.HeroKa);
                ka.data = this.info.kaDataArray[i];
                ka.x = 14 + 226 * (i % 2); // 等间距14
                ka.y = 0 + 141 * Math.floor(i / 2); // 等间距 高568 5个间隙 item高137，共137*4= 548，余568-548=20，间距为22/5=4
                this.kaGroup.addChild(ka);
            }
        };
        HomePanel.prototype.OnFightTap = function () {
            ViewManager.Ins().close(this);
            ViewManager.Ins().open(war.WarMatchPanel);
        };
        HomePanel.prototype.OnKaTap = function () {
            ViewManager.Ins().open(home.KakuPanel);
        };
        return HomePanel;
    }(ViewBase));
    home.HomePanel = HomePanel;
    __reflect(HomePanel.prototype, "home.HomePanel");
})(home || (home = {}));
//# sourceMappingURL=HomePanel.js.map