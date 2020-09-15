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
var HeroDataMgr = (function (_super) {
    __extends(HeroDataMgr, _super);
    function HeroDataMgr() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HeroDataMgr.prototype.init = function () {
        this.heroMap = new Hash();
        this.initHeroMap();
    };
    HeroDataMgr.prototype.initHeroMap = function () {
        var cfg;
        for (var _i = 0, cfg_1 = cfg; _i < cfg_1.length; _i++) {
            var item = cfg_1[_i];
            var hero = new HeroData(item.id, 0);
            this.heroMap.set(hero.id, hero);
        }
    };
    HeroDataMgr.prototype.destroy = function () {
        _super.prototype.destroy.call(this);
        this.heroMap.destroy();
    };
    return HeroDataMgr;
}(DataBase));
__reflect(HeroDataMgr.prototype, "HeroDataMgr");
//# sourceMappingURL=HeroDataMgr.js.map