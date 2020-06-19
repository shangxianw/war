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
        HomeDataMgr.Ins = function () {
            if (HomeDataMgr.instance == null)
                HomeDataMgr.instance = new HomeDataMgr();
            return HomeDataMgr.instance;
        };
        HomeDataMgr.prototype.init = function () {
            this.myData = PoolManager.Ins().pop(home.PlayerData);
            this.kaDataMgr = new home.KaDataMgr();
        };
        HomeDataMgr.prototype.destroy = function () {
            this.myData.destroyAll();
            PoolManager.Ins().push(this.myData);
            this.kaDataMgr.destroyAll();
            this.kaDataMgr = null;
        };
        // ---------------------------------------------------------------------- 组装前端数据
        HomeDataMgr.prototype.packMyData = function () {
            this.myData.playerId = 1000001;
            this.myData.iconId = 1;
            this.myData.iconFrameId = 1;
            this.myData.level = 1;
            this.myData.exp = 0;
            this.myData.playerName = "wsx";
            this.myData.cups = 0;
            this.myData.teamArray = [10010, 10040, 10050, 10070, 10080, 10090, 10100, 10110];
            var lvArray = [1, 1, 1, 2, 2, 2, 3, 3];
            var index = 0;
            this.myData.kaMap = new Hash();
            for (var _i = 0, _a = this.myData.teamArray; _i < _a.length; _i++) {
                var id = _a[_i];
                HomeDataMgr.Ins().kaDataMgr.addKa(id, lvArray[index]);
                index++;
            }
        };
        return HomeDataMgr;
    }(DataBase));
    home.HomeDataMgr = HomeDataMgr;
    __reflect(HomeDataMgr.prototype, "home.HomeDataMgr");
})(home || (home = {}));
//# sourceMappingURL=HomeDataMgr.js.map