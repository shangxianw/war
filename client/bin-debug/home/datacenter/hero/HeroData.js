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
var HeroData = (function (_super) {
    __extends(HeroData, _super);
    function HeroData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HeroData.prototype.init = function (id, level) {
        this.id = id;
        this.level;
    };
    Object.defineProperty(HeroData.prototype, "cfg", {
        get: function () {
            return null;
        },
        enumerable: true,
        configurable: true
    });
    HeroData.prototype.destroy = function () {
        _super.prototype.destroy.call(this);
    };
    return HeroData;
}(DataBase));
__reflect(HeroData.prototype, "HeroData");
//# sourceMappingURL=HeroData.js.map