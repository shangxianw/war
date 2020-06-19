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
    var FamilyDataMgr = (function (_super) {
        __extends(FamilyDataMgr, _super);
        function FamilyDataMgr() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        FamilyDataMgr.prototype.init = function () {
        };
        FamilyDataMgr.prototype.destroy = function () {
        };
        FamilyDataMgr.prototype.addFamily = function (id, level) {
            var kaMap = home.HomeDataMgr.Ins().myData.kaMap;
            if (kaMap.has(id) == true) {
                LogUtils.Error("\u5DF2\u5B58\u5728\u6B64");
                return false;
            }
            var ka = PoolManager.Ins().pop(home.KaData);
            ka.packData(id, level);
            kaMap.set(id, ka);
            return true;
        };
        FamilyDataMgr.prototype.removeKa = function (id) {
            var kaMap = home.HomeDataMgr.Ins().myData.kaMap;
            if (kaMap.has(id) == false) {
                LogUtils.Error("\u4E0D\u5B58\u5728\u5361");
                return false;
            }
            var ka = kaMap.remove(id);
            ka.destroyAll();
            PoolManager.Ins().push(ka);
            return true;
        };
        return FamilyDataMgr;
    }(DataBase));
    home.FamilyDataMgr = FamilyDataMgr;
    __reflect(FamilyDataMgr.prototype, "home.FamilyDataMgr");
})(home || (home = {}));
//# sourceMappingURL=FamilyDataMgr.js.map