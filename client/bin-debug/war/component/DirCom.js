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
    var DirCom = (function (_super) {
        __extends(DirCom, _super);
        function DirCom() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DirCom.prototype.init = function () {
            this.comId = war.Component.Direction;
            this.direction = war.Direction.Right;
        };
        DirCom.prototype.destroy = function () {
        };
        DirCom.prototype.setDir = function (dir) {
            this.direction = dir;
        };
        return DirCom;
    }(war.ComBase));
    war.DirCom = DirCom;
    __reflect(DirCom.prototype, "war.DirCom");
})(war || (war = {}));
//# sourceMappingURL=DirCom.js.map