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
var HeroPanelItem = (function (_super) {
    __extends(HeroPanelItem, _super);
    function HeroPanelItem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HeroPanelItem.prototype.init = function () {
        this.skinName = "HeroPanelItemSkin";
    };
    HeroPanelItem.prototype.dataChanged = function () {
        this.btn.label1.text = "" + this.data;
        this.btn.label = "0000";
        this.btn.icon1.source = "item_3";
    };
    HeroPanelItem.prototype.destroy = function () {
    };
    return HeroPanelItem;
}(WItemRenderer));
__reflect(HeroPanelItem.prototype, "HeroPanelItem");
//# sourceMappingURL=HeroPanelItem.js.map