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
    var FamilyData = (function (_super) {
        __extends(FamilyData, _super);
        function FamilyData() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        FamilyData.prototype.init = function () {
            this.familyId = null;
            this.icon = null;
            this.frame = null;
            this.desc = null;
            this.memberMap = new Hash();
        };
        FamilyData.prototype.destroy = function () {
            DataUtils.DestroyDataBaseMap(this.memberMap);
        };
        FamilyData.prototype.packData = function () {
        };
        return FamilyData;
    }(DataBase));
    home.FamilyData = FamilyData;
    __reflect(FamilyData.prototype, "home.FamilyData");
})(home || (home = {}));
//# sourceMappingURL=FamilyData.js.map