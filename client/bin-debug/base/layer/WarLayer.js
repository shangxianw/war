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
var WarLayer = (function (_super) {
    __extends(WarLayer, _super);
    function WarLayer() {
        return _super.call(this) || this;
    }
    WarLayer.prototype.destroy = function () {
        this.map = null;
        this.body = null;
        this.effect = null;
    };
    WarLayer.prototype.initLayer = function () {
        this.map = new eui.UILayer();
        this.map.name = "map";
        this.map.touchEnabled = false;
        this.addChild(this.map);
        this.body = new eui.UILayer();
        this.body.name = "body";
        this.body.touchEnabled = false;
        this.addChild(this.body);
        this.effect = new eui.UILayer();
        this.effect.name = "effect";
        this.effect.touchEnabled = false;
        this.addChild(this.effect);
    };
    return WarLayer;
}(eui.UILayer));
__reflect(WarLayer.prototype, "WarLayer");
//# sourceMappingURL=WarLayer.js.map