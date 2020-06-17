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
    var HeroKa2Data = (function (_super) {
        __extends(HeroKa2Data, _super);
        function HeroKa2Data() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        HeroKa2Data.prototype.init = function () {
            this.resGroup = "";
            this.layer = LayerManager.Ins().Panel;
        };
        HeroKa2Data.prototype.destroy = function () {
        };
        HeroKa2Data.prototype.packData = function (kaId) {
            var hero = home.HomeDataMgr.Ins().kaDataMgr.getKa(kaId);
            if (hero == null)
                return null;
            this.heroId = kaId;
            this.heroKaData = PoolManager.Ins().pop(home.HeroKaData);
            this.heroKaData.packData(kaId);
            return this;
        };
        return HeroKa2Data;
    }(ViewData));
    home.HeroKa2Data = HeroKa2Data;
    __reflect(HeroKa2Data.prototype, "home.HeroKa2Data");
    var HeroKa2 = (function (_super) {
        __extends(HeroKa2, _super);
        function HeroKa2() {
            var _this = _super.call(this) || this;
            _this.skinName = "HeroKa2Skin";
            return _this;
        }
        HeroKa2.prototype.init = function () {
        };
        HeroKa2.prototype.destroy = function () {
            if (this.info != null)
                this.info.destroyAll();
        };
        HeroKa2.prototype.packData = function (data) {
            if (data == null)
                return;
            this.info = data;
            this.heroKa.data = this.info.heroKaData;
        };
        return HeroKa2;
    }(UIBase));
    home.HeroKa2 = HeroKa2;
    __reflect(HeroKa2.prototype, "home.HeroKa2");
})(home || (home = {}));
//# sourceMappingURL=HeroKa2.js.map