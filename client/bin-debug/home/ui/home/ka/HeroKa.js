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
    var HeroKaData = (function (_super) {
        __extends(HeroKaData, _super);
        function HeroKaData() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        HeroKaData.prototype.init = function () {
        };
        HeroKaData.prototype.destroy = function () {
        };
        // 从我的卡牌中获取数据
        HeroKaData.prototype.packData = function (kaId) {
            var _this = this;
            var hero = home.HomeDataMgr.Ins().myData.kaMap.get(kaId);
            if (hero == null)
                return;
            this.kaId = hero.kaId;
            this.level = hero.level;
            this.addAttrCB(hero, "level", function () {
                _this.canUp = _this.kaId == 10010; // 假设有张升级表~
                _this.updateAttr("level");
            }, this);
        };
        return HeroKaData;
    }(DataBase));
    home.HeroKaData = HeroKaData;
    __reflect(HeroKaData.prototype, "home.HeroKaData");
    var HeroKa = (function (_super) {
        __extends(HeroKa, _super);
        function HeroKa() {
            var _this = _super.call(this) || this;
            _this.skinName = "HeroKaSkin";
            return _this;
        }
        HeroKa.prototype.init = function () {
            this.touchChildren = false;
        };
        HeroKa.prototype.destroy = function () {
            if (this.info != null) {
                this.info.destroyAll();
            }
        };
        HeroKa.prototype.dataChanged = function () {
            if (this.data == null)
                return;
            this.info = this.data;
            var heroCfg = ConfigManager.Ins().get(CONFIG.HERO)[this.info.kaId];
            this.costLb.text = String(heroCfg.cost);
            this.typeBg.source = Utils.GetQualityBg(heroCfg.quality);
            this.kaImg.source = Utils.GetKaIcon(this.info.kaId);
            this.level.text = this.info.level + "\u7EA7";
            this.testId.text = "" + this.info.kaId;
            this.testId.visible = GameData.DevelopMode == DevelopMode.DEBUG;
            this.info.addAttrListener("level", this.OnShowUpTips, this);
        };
        HeroKa.prototype.OnShowUpTips = function () {
            this.upTips.visible = this.info.canUp;
        };
        return HeroKa;
    }(WItemRenderBase));
    home.HeroKa = HeroKa;
    __reflect(HeroKa.prototype, "home.HeroKa");
})(home || (home = {}));
//# sourceMappingURL=HeroKa.js.map