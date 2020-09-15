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
var HomeDataMgr = (function (_super) {
    __extends(HomeDataMgr, _super);
    function HomeDataMgr() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.engry = 0;
        _this.dimand = 0;
        _this.exp = 0;
        return _this;
    }
    HomeDataMgr.prototype.init = function () {
        this.heroDataMgr = new HeroDataMgr();
    };
    HomeDataMgr.prototype.destroy = function () {
        _super.prototype.destroy.call(this);
        this.heroDataMgr.destroy();
    };
    HomeDataMgr.Ins = function () {
        if (HomeDataMgr.instance == null)
            HomeDataMgr.instance = new HomeDataMgr();
        return HomeDataMgr.instance;
    };
    return HomeDataMgr;
}(DataBase));
__reflect(HomeDataMgr.prototype, "HomeDataMgr");
//# sourceMappingURL=HomeDataMgr.js.map