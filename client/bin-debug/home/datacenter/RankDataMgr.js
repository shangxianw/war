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
    var RankDataMgr = (function (_super) {
        __extends(RankDataMgr, _super);
        function RankDataMgr() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        RankDataMgr.prototype.init = function () {
        };
        RankDataMgr.prototype.destroy = function () {
        };
        return RankDataMgr;
    }(DataBase));
    home.RankDataMgr = RankDataMgr;
    __reflect(RankDataMgr.prototype, "home.RankDataMgr");
})(home || (home = {}));
//# sourceMappingURL=RankDataMgr.js.map