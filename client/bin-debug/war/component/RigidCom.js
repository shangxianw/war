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
    var RangeCom = (function (_super) {
        __extends(RangeCom, _super);
        function RangeCom() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        RangeCom.prototype.init = function () {
            this.componentId = war.COMPONENT.GRIGD;
            this.radius = 0;
        };
        RangeCom.prototype.destroy = function () {
        };
        return RangeCom;
    }(war.ComBase));
    war.RangeCom = RangeCom;
    __reflect(RangeCom.prototype, "war.RangeCom");
})(war || (war = {}));
//# sourceMappingURL=RigidCom.js.map