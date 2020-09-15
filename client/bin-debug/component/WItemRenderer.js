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
var WItemRenderer = (function (_super) {
    __extends(WItemRenderer, _super);
    function WItemRenderer() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // ---------------------------------------------------------------------- systems code
        _this._data = null;
        _this._selected = false;
        _this.itemIndex = -1;
        return _this;
    }
    WItemRenderer.prototype.initData = function () {
        eui.registerBindable(eui.ItemRenderer.prototype, "data");
    };
    WItemRenderer.prototype.dataChanged = function () {
    };
    WItemRenderer.prototype.destroy = function () {
    };
    Object.defineProperty(WItemRenderer.prototype, "data", {
        get: function () {
            return this._data;
        },
        set: function (value) {
            this._data = value;
            eui.PropertyEvent.dispatchPropertyEvent(this, eui.PropertyEvent.PROPERTY_CHANGE, "data");
            this.dataChanged();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WItemRenderer.prototype, "selected", {
        get: function () {
            return this._selected;
        },
        set: function (value) {
            if (this._selected == value)
                return;
            this._selected = value;
            this.invalidateState();
        },
        enumerable: true,
        configurable: true
    });
    return WItemRenderer;
}(UIBase));
__reflect(WItemRenderer.prototype, "WItemRenderer", ["eui.IItemRenderer", "eui.UIComponent", "egret.DisplayObject"]);
//# sourceMappingURL=WItemRenderer.js.map