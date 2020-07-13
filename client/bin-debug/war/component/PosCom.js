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
            this.comType = war.Component.Pos;
        };
        PosCom.prototype.destroy = function () {
        };
        PosCom.prototype.setXY = function (x, y) {
            this.x = x;
            this.y = y;
        };
        PosCom.prototype.setWH = function (width, height) {
            this.width = width;
            this.height = height;
        };
        // 获取左上角坐标
        PosCom.prototype.getOriX = function () {
            return this.x - this.width / 2;
        };
        PosCom.prototype.getOriY = function () {
            return this.y - this.height; ///2; // ??????????????????????????????????
        };
        return PosCom;
    }(war.ComBase));
    war.PosCom = PosCom;
    __reflect(PosCom.prototype, "war.PosCom");
})(war || (war = {}));
