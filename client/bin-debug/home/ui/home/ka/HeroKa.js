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
            this.resGroup = "";
            this.layer = LayerManager.Ins().Panel;
        };
        HeroKaData.prototype.destroy = function () {
        };
        HeroKaData.prototype.packData = function (kaId) {
            var hero = home.HomeDataMgr.Ins().kaDataMgr.getKa(kaId);
            if (hero == null)
                return;
            var cfg = hero.cfg;
            this.kaId = kaId;
            this.cost = cfg.cost;
            this.quality = cfg.quality;
        };
        return HeroKaData;
    }(ViewData));
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
            if (this.info != null)
                this.info.destroyAll();
        };
        HeroKa.prototype.dataChanged = function () {
            if (this.data == null)
                return;
            this.info = this.data;
            this.costLb.text = String(this.info.cost);
            this.typeBg.source = Utils.GetQualityBg(this.info.quality);
            this.kaImg.source = Utils.GetKaIcon(this.info.kaId);
            this.testId.text = "" + this.info.kaId;
            this.testId.visible = GameData.DevelopMode == DevelopMode.DEBUG;
        };
        HeroKa.prototype.packData = function (data) {
            if (data == null)
                return;
            this.info = data;
            this.costLb.text = String(this.info.cost);
            this.typeBg.source = Utils.GetQualityBg(this.info.quality);
            this.kaImg.source = Utils.GetKaIcon(this.info.kaId);
        };
        return HeroKa;
    }(WItemRenderBase));
    home.HeroKa = HeroKa;
    __reflect(HeroKa.prototype, "home.HeroKa");
})(home || (home = {}));
//# sourceMappingURL=HeroKa.js.map