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
var Ka = (function (_super) {
    __extends(Ka, _super);
    function Ka() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Ka.prototype.init = function () {
        this.skinName = "KaSkin";
        eui.ItemRenderer;
    };
    Ka.prototype.initData = function (kaId) {
        this.kaId = kaId;
    };
    Ka.prototype.initView = function () {
        // let herodata:HeroData = HomeDataMgr.Ins().heroDataMgr.heroMap.get(this.kaId)
        // if(herodata == null)
        // 	return
        // this.icon.source = herodata.cfg.icon
        // this.bg.source = `bg_card_di_${herodata.cfg.quality}`
    };
    return Ka;
}(UIBase));
__reflect(Ka.prototype, "Ka");
//# sourceMappingURL=Ka.js.map