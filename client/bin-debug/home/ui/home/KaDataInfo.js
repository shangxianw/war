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
    var KaDataInfo = (function (_super) {
        __extends(KaDataInfo, _super);
        function KaDataInfo() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        KaDataInfo.prototype.init = function () {
            this.kaId = 0;
            this.level = 0;
        };
        KaDataInfo.prototype.destroy = function () {
            this.kaId = 0;
            this.level = 0;
        };
        KaDataInfo.prototype.packData = function (kaId, level) {
            this.kaId = kaId;
            this.level = level;
        };
        Object.defineProperty(KaDataInfo.prototype, "cfg", {
            get: function () {
                var cfg = ConfigManager.Ins().get(CONFIG.HERO)[this.kaId];
                return cfg;
            },
            enumerable: true,
            configurable: true
        });
        return KaDataInfo;
    }(DataBase));
    home.KaDataInfo = KaDataInfo;
    __reflect(KaDataInfo.prototype, "home.KaDataInfo");
})(home || (home = {}));
//# sourceMappingURL=KaDataInfo.js.map