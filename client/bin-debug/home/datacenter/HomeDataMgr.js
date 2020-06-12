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
    var HomeDataMgr = (function (_super) {
        __extends(HomeDataMgr, _super);
        function HomeDataMgr() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        HomeDataMgr.prototype.init = function () {
            this.playerId = 1;
            this.playerName = "wsx";
        };
        HomeDataMgr.prototype.destroy = function () {
        };
        HomeDataMgr.Ins = function () {
            if (HomeDataMgr.instance == null)
                HomeDataMgr.instance = new HomeDataMgr();
            return HomeDataMgr.instance;
        };
        return HomeDataMgr;
    }(DataBase));
    home.HomeDataMgr = HomeDataMgr;
    __reflect(HomeDataMgr.prototype, "home.HomeDataMgr");
})(home || (home = {}));
//# sourceMappingURL=HomeDataMgr.js.map