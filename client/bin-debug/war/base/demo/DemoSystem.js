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
    var DemoSystem = (function (_super) {
        __extends(DemoSystem, _super);
        function DemoSystem() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DemoSystem.prototype.init = function () {
            this.sysType = war.System.Demo;
        };
        DemoSystem.prototype.destroy = function () {
        };
        DemoSystem.prototype.update = function (entity, deltaTime) {
            if (entity == null)
                return;
            var posCom = entity.getComponent(war.Component.Pos);
            if (posCom == null)
                return;
        };
        return DemoSystem;
    }(war.SystemBase));
    war.DemoSystem = DemoSystem;
    __reflect(DemoSystem.prototype, "war.DemoSystem");
})(war || (war = {}));
//# sourceMappingURL=DemoSystem.js.map