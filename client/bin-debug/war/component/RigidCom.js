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
    var RigidCom = (function (_super) {
        __extends(RigidCom, _super);
        function RigidCom() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        RigidCom.prototype.init = function () {
            this.componentId = war.COMPONENT.GRIGD;
            this.radius = 0;
        };
        RigidCom.prototype.destroy = function () {
        };
        return RigidCom;
    }(war.ComBase));
    war.RigidCom = RigidCom;
    __reflect(RigidCom.prototype, "war.RigidCom");
})(war || (war = {}));
//# sourceMappingURL=RigidCom.js.map