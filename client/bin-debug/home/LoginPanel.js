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
var LoginPanel = (function (_super) {
    __extends(LoginPanel, _super);
    function LoginPanel() {
        var _this = _super.call(this) || this;
        _this.skinName = "LoginPanelSkin";
        _this["data"] = _this.info;
        return _this;
    }
    LoginPanel.prototype.init = function () {
    };
    LoginPanel.prototype.destroy = function () {
        this.loginBtn.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.OnLoginTap, this);
    };
    LoginPanel.prototype.open = function () {
        this.loginBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.OnLoginTap, this);
    };
    LoginPanel.prototype.OnLoginTap = function (e) {
        var item;
        this.canCost(item.costtype, item.cost);
        // if(item.quality == QualityType.Common || item.quality == QualityType.Shishi)
        // ViewManager.Ins().open(HomePanel, "wsx")
        // SceneManager.Ins().changeScene(SceneType.Home)
        // ViewManager.Ins().close(home.LoginPanel)
        // ViewManager.Ins().close("home.LoginPanel")
    };
    LoginPanel.prototype.canCost = function (type, price) {
        var item;
        var cost;
        var player;
        var has = player[cost.attrname];
        if (has < price)
            return [false, cost.falitips];
        return [true, cost.successtips];
    };
    return LoginPanel;
}(ViewBase));
__reflect(LoginPanel.prototype, "LoginPanel");
var QualityType;
(function (QualityType) {
    QualityType[QualityType["Common"] = 1] = "Common";
    QualityType[QualityType["Rare"] = 2] = "Rare";
    QualityType[QualityType["Shishi"] = 3] = "Shishi";
    QualityType[QualityType["Chuanqi"] = 4] = "Chuanqi";
})(QualityType || (QualityType = {}));
var CostType;
(function (CostType) {
    CostType[CostType["Gold"] = 1] = "Gold";
    CostType[CostType["Dimand"] = 2] = "Dimand";
    CostType[CostType["Contribute"] = 3] = "Contribute";
    CostType[CostType["Key"] = 4] = "Key";
    CostType[CostType["Rmb"] = 5] = "Rmb";
})(CostType || (CostType = {}));
//# sourceMappingURL=LoginPanel.js.map