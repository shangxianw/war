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
    var PosCom = (function (_super) {
        __extends(PosCom, _super);
        function PosCom() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        PosCom.prototype.init = function () {
            this.x = 0;
            this.y = 0;
            this.width = 0;
            this.height = 0;
            this.anchorX = this.anchorY = 0;
            this.scaleX = this.scaleY = 1;
            this.color = 0x000000;
            this.alpha = 1;
            this.comType = war.Component.Pos;
        };
        PosCom.prototype.destroy = function () {
        };
        PosCom.prototype.setX = function (x) {
            this.x = x;
        };
        PosCom.prototype.setY = function (y) {
            this.y = y;
        };
        PosCom.prototype.setXY = function (x, y) {
            this.x = x;
            this.y = y;
        };
        PosCom.prototype.setWidth = function (w) {
            this.width = w;
        };
        PosCom.prototype.setHeight = function (h) {
            this.height = h;
        };
        PosCom.prototype.setSize = function (w, h) {
            this.width = w;
            this.height = h;
        };
        PosCom.prototype.setColor = function (color) {
            this.color = color;
        };
        PosCom.prototype.setAnchorXY = function (x, y) {
            this.anchorX = x;
            this.anchorY = y;
        };
        PosCom.prototype.setScaleXY = function (x, y) {
            this.scaleX = x;
            this.scaleY = y;
        };
        return PosCom;
    }(war.ComBase));
    war.PosCom = PosCom;
    __reflect(PosCom.prototype, "war.PosCom");
})(war || (war = {}));
//# sourceMappingURL=PosCom.js.map