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
    var KakuPanelData = (function (_super) {
        __extends(KakuPanelData, _super);
        function KakuPanelData() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        KakuPanelData.prototype.init = function () {
            this.resGroup = [];
            this.layer = LayerManager.Ins().Panel;
        };
        KakuPanelData.prototype.destroy = function () {
            this.selKa = null;
        };
        KakuPanelData.prototype.packData = function () {
        };
        return KakuPanelData;
    }(ViewData));
    home.KakuPanelData = KakuPanelData;
    __reflect(KakuPanelData.prototype, "home.KakuPanelData");
    var KakuPanel = (function (_super) {
        __extends(KakuPanel, _super);
        function KakuPanel() {
            return _super.call(this, "KakuPanelSkin", KakuPanelData) || this;
        }
        KakuPanel.prototype.init = function () {
        };
        KakuPanel.prototype.destroy = function () {
            if (this.info != null)
                this.info.destroyAll();
        };
        KakuPanel.prototype.initData = function (data) {
            this.info.packData();
        };
        KakuPanel.prototype.initView = function () {
            var heroIdArry = home.HomeDataMgr.Ins().myData.kaMap.keys();
            var kaData;
            var ka;
            var index = 0;
            for (var _i = 0, heroIdArry_1 = heroIdArry; _i < heroIdArry_1.length; _i++) {
                var heroId = heroIdArry_1[_i];
                kaData = PoolManager.Ins().pop(home.HeroKa2Data);
                kaData.packData(heroId);
                ka = PoolManager.Ins().pop(home.HeroKa2);
                ka.packData(kaData);
                // item宽190，面板宽711，item总宽190*3 = 570，剩余间隙总和711-570 = 141，一个间隙为 141/4=35
                ka.x = 225 * (index % 3);
                ka.y = 143 * Math.floor((index / 3));
                this.heroGroup.addChild(ka);
                index++;
            }
            this.readyBg.mask = this.maskk;
            this.addEvent(this.heroGroup, egret.TouchEvent.TOUCH_TAP, this.OnHeroGroupTap, this);
            this.addEvent(this.readyBg, egret.TouchEvent.TOUCH_TAP, this.OnReaBgTap, this);
        };
        KakuPanel.prototype.OnHeroGroupTap = function (e) {
            var target = e.target;
            if (target.name == "heroKa") {
                if (this.info.selKa != null) {
                    this.info.selKa.setState(false);
                }
                var p = target.parent;
                p.setState(true);
                this.heroGroup.setChildIndex(p, 777);
                this.info.selKa = p;
            }
            else if (target.name == "infoBtn") {
                var p = target.parent;
            }
            else if (target.name == "fightBtn") {
                var p = target.parent;
                this.readGroup.visible = true;
                if (this.info.selKa != null) {
                    this.info.selKa.setState(false);
                }
            }
        };
        KakuPanel.prototype.OnReaBgTap = function (e) {
            this.readGroup.visible = false;
        };
        return KakuPanel;
    }(ViewBase));
    home.KakuPanel = KakuPanel;
    __reflect(KakuPanel.prototype, "home.KakuPanel");
})(home || (home = {}));
//# sourceMappingURL=KakuPanel.js.map