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
            this.kaId = 0;
            this.kaX = 0;
            this.kaY = 0;
        };
        Ka1Data.prototype.destroy = function () {
            this.kaId = 0;
            this.kaX = 0;
            this.kaY = 0;
        };
        Ka1Data.prototype.packData = function (kaId, x, y, currEnergy) {
            this.kaId = kaId;
            var cfg = ConfigManager.Ins().get(CONFIG.HERO)[kaId];
            if (cfg == null)
                return;
            this.cost = cfg.cost;
            this.kaX = x;
            this.kaY = y;
            this.flushAttr("kaId");
            this.refreshCost(currEnergy);
            return this;
        };
        Ka1Data.prototype.refreshCost = function (currEnergy) {
            this.currEnergy = currEnergy;
            this.flushAttr("currEnergy");
        };
        // 针对重置的情况
        Ka1Data.prototype.refreshKa = function (kaId) {
            this.kaId = kaId;
            var cfg = ConfigManager.Ins().get(CONFIG.HERO)[kaId];
            if (cfg == null)
                return;
            this.cost = cfg.cost;
            this.flushAttr("kaId");
            this.refreshCost(0);
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
        Ka1.prototype.initView = function () {
            this.addAttrCB(this.info, "kaId", this.OnInitView, this);
            this.addAttrCB(this.info, "currEnergy", this.OnRefreshKaCost, this);
        };
        Ka1.prototype.OnInitView = function () {
            var cfg = ConfigManager.Ins().get(CONFIG.HERO)[this.info.kaId];
            if (cfg == null)
                return;
            this.qualityImg.source = Utils.GetQualityBg(cfg.quality);
            this.kaIcon.source = Utils.GetKaIcon(cfg.heroid);
            this.cost.text = "" + cfg.cost;
        };
        Ka1.prototype.OnRefreshKaCost = function () {
            if (this.circleShape == null) {
                this.circleShape = new egret.Shape();
                this.arcGroup.addChild(this.circleShape);
                this.lockImg.mask = this.circleShape;
            }
            var angel = Math.min((this.info.currEnergy / this.info.cost) * 360, 360);
            this.circleShape.graphics.clear();
            this.circleShape.graphics.beginFill(0xffff00);
            this.circleShape.graphics.moveTo(0, 0);
            this.circleShape.graphics.lineTo(200, 0);
            this.circleShape.graphics.drawArc(0, 0, 120, 0, angel * Math.PI / 180);
            this.circleShape.graphics.lineTo(0, 0);
            this.circleShape.graphics.endFill();
        };
        return Ka1;
    }(UIBase));
    war.Ka1 = Ka1;
    __reflect(Ka1.prototype, "war.Ka1");
})(war || (war = {}));
//# sourceMappingURL=Ka1.js.map