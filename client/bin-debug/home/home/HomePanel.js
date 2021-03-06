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
var HomePanel = (function (_super) {
    __extends(HomePanel, _super);
    function HomePanel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HomePanel.prototype.init = function () {
        this.skinName = "HomePanelSkin";
    };
    HomePanel.prototype.initView = function () {
        var _this = this;
        // this.list.itemRenderer = HeroPanelItem;
        // this.list.dataProvider = new eui.ArrayCollection([10010, 10020, 10030, 10040, 10050, 10060, 10070])
        this.fightBtn.label = "a";
        this.addMsgListener("update_demo", function () {
            _this.fightBtn.label = "b";
        }, this);
        MessageManager.Ins().update("update_demo");
    };
    HomePanel.prototype.destroy = function () {
    };
    return HomePanel;
}(ViewBase));
__reflect(HomePanel.prototype, "HomePanel");
//# sourceMappingURL=HomePanel.js.map