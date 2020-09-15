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
        return _super.call(this) || this;
    }
    HomePanel.prototype.init = function () {
        this.skinName = "HomePanelSkin";
    };
    HomePanel.prototype.initView = function () {
        this.addEvent(this.fightBtn, egret.TouchEvent.TOUCH_TAP, this.OnFightTap, this);
        this.list.itemRenderer = HeroPanelItem;
        this.list.dataProvider = new eui.ArrayCollection([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    };
    HomePanel.prototype.destroy = function () {
    };
    HomePanel.prototype.OnFightTap = function (e) {
        alert(1);
    };
    return HomePanel;
}(ViewBase));
__reflect(HomePanel.prototype, "HomePanel");
//# sourceMappingURL=HomePanel.js.map