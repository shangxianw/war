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
    var KaDataMgr = (function (_super) {
        __extends(KaDataMgr, _super);
        function KaDataMgr() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        KaDataMgr.prototype.init = function () {
            this.teamArray = [];
            this.kaMap = new Hash();
        };
        KaDataMgr.prototype.destroy = function () {
            this.teamArray.length = 0;
            DataUtils.DestroyDataBaseMap(this.kaMap);
        };
        KaDataMgr.prototype.addKa = function (id, level) {
            if (this.kaMap.has(id) == true) {
                LogUtils.Error("\u5DF2\u5B58\u5728\u5361");
                return false;
            }
            var ka = PoolManager.Ins().pop(home.KaDataInfo);
            ka.packData(id, level);
            this.kaMap.set(id, ka);
            return true;
        };
        KaDataMgr.prototype.removeKa = function (id) {
            if (this.kaMap.has(id) == false) {
                LogUtils.Error("\u5DF2\u5B58\u5728\u5361");
                return false;
            }
            var ka = this.kaMap.remove(id);
            ka.destroyAll();
            PoolManager.Ins().push(ka);
            return true;
        };
        KaDataMgr.prototype.getKa = function (kaId) {
            return this.kaMap.get(kaId);
        };
        // ---------------------------------------------------------------------- 组装前端数据
        KaDataMgr.prototype.packDataClient = function () {
            var herosIdArray = [10010, 10040, 10050, 10070, 10080, 10090, 10100, 10110];
            var herosLvArray = [1, 1, 1, 1, 2, 2, 2, 2];
            var index = 0;
            for (var _i = 0, herosIdArray_1 = herosIdArray; _i < herosIdArray_1.length; _i++) {
                var id = herosIdArray_1[_i];
                this.addKa(id, herosLvArray[index]);
                index++;
            }
            this.teamArray = herosIdArray;
        };
        return KaDataMgr;
    }(DataBase));
    home.KaDataMgr = KaDataMgr;
    __reflect(KaDataMgr.prototype, "home.KaDataMgr");
})(home || (home = {}));
//# sourceMappingURL=KaDataMgr.js.map