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
    var LoadingTipsData = (function (_super) {
        __extends(LoadingTipsData, _super);
        function LoadingTipsData() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        LoadingTipsData.prototype.init = function () {
            this.layer = LayerManager.Ins().Tips;
        };
        LoadingTipsData.prototype.destroy = function () {
        };
        LoadingTipsData.prototype.packData = function () {
        };
        return LoadingTipsData;
    }(ViewData));
    home.LoadingTipsData = LoadingTipsData;
    __reflect(LoadingTipsData.prototype, "home.LoadingTipsData");
    var LoadingTips = (function (_super) {
        __extends(LoadingTips, _super);
        function LoadingTips() {
            return _super.call(this, "LoadingTipsSkin", LoadingTipsData) || this;
        }
        LoadingTips.prototype.init = function () {
            this.info.packData();
        };
        LoadingTips.prototype.destroy = function () {
            if (this.info != null)
                this.info.destroyAll();
        };
        LoadingTips.prototype.initData = function (data) {
            this.info.packData();
        };
        LoadingTips.prototype.initView = function () {
        };
        return LoadingTips;
    }(ViewBase));
    home.LoadingTips = LoadingTips;
    __reflect(LoadingTips.prototype, "home.LoadingTips");
})(home || (home = {}));
//# sourceMappingURL=LoadingTips.js.map