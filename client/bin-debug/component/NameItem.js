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
var NameItem = (function (_super) {
    __extends(NameItem, _super);
    function NameItem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NameItem.prototype.init = function () {
        this.skinName = "NameItemSkin";
    };
    NameItem.prototype.destroy = function () {
    };
    return NameItem;
}(UIBase));
__reflect(NameItem.prototype, "NameItem");
//# sourceMappingURL=NameItem.js.map