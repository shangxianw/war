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
    var CostBarData = (function (_super) {
        __extends(CostBarData, _super);
        function CostBarData() {
            return _super.call(this) || this;
        }
        CostBarData.prototype.init = function () {
            this.lastTime = 0;
        };
        CostBarData.prototype.destroy = function () {
        };
        CostBarData.prototype.packData = function (speed) {
            this.speed = speed;
            return this;
        };
        CostBarData.prototype.initData = function (width) {
            this.totalWidth = width;
            this.widthCeil = width / 100;
        };
        CostBarData.prototype.getDeltaTime = function () {
            var currTime = egret.getTimer();
            var deltaTime = currTime - this.lastTime;
            this.lastTime = currTime;
            return deltaTime;
        };
        return CostBarData;
    }(DataBase));
    war.CostBarData = CostBarData;
    __reflect(CostBarData.prototype, "war.CostBarData");
    var CostBar = (function (_super) {
        __extends(CostBar, _super);
        function CostBar() {
            return _super.call(this) || this;
            // "CostBarSkin"
        }
        CostBar.prototype.init = function () {
        };
        CostBar.prototype.destroy = function () {
        };
        CostBar.prototype.initData = function (info) {
            if (info == null)
                return;
            this.info = info;
            this.info.initData(this.bar1.width);
            this.initBar();
        };
        CostBar.prototype.initBar = function () {
            this.bar1.width = 0;
            this.bar2.width = 0;
        };
        CostBar.prototype.OnUpdate = function () {
            var deltaTime = this.info.getDeltaTime();
            this.bar1.width = Math.min(this.bar1.width + this.info.speed * this.info.widthCeil * deltaTime / 1000, this.info.totalWidth);
            this.bar2.width = Math.min(this.bar1.width + this.info.speed * this.info.widthCeil * deltaTime / 1000, this.info.totalWidth);
        };
        return CostBar;
    }(UIBase));
    war.CostBar = CostBar;
    __reflect(CostBar.prototype, "war.CostBar");
})(war || (war = {}));
//# sourceMappingURL=CostBar.js.map