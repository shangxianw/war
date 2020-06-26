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
var war;
(function (war) {
    var Ka1Data = (function (_super) {
        __extends(Ka1Data, _super);
        function Ka1Data() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Ka1Data.prototype.init = function () {
        };
        Ka1Data.prototype.destroy = function () {
        };
        Ka1Data.prototype.packData = function (kaId) {
            this.kaId = kaId;
            return this;
        };
        return Ka1Data;
    }(DataBase));
    war.Ka1Data = Ka1Data;
    __reflect(Ka1Data.prototype, "war.Ka1Data");
    var Ka1 = (function (_super) {
        __extends(Ka1, _super);
        function Ka1() {
            return _super.call(this, "Ka1Skin") || this;
        }
        Ka1.prototype.init = function () {
            this.touchChildren = false;
        };
        Ka1.prototype.destroy = function () {
            if (this.info != null)
                this.info.destroyAll();
        };
        Ka1.prototype.initData = function (info) {
            if (info == null)
                return;
            this.info = info;
            this.initView();
        };
        Ka1.prototype.initView = function () {
            var cfg = ConfigManager.Ins().get(CONFIG.HERO)[this.info.kaId];
            if (cfg == null)
                return;
            this.qualityImg.source = Utils.GetQualityBg(cfg.quality);
            this.kaIcon.source = Utils.GetKaIcon(cfg.heroid);
            this.cost.text = "" + cfg.cost;
        };
        return Ka1;
    }(UIBase));
    war.Ka1 = Ka1;
    __reflect(Ka1.prototype, "war.Ka1");
})(war || (war = {}));
//# sourceMappingURL=Ka1.js.map