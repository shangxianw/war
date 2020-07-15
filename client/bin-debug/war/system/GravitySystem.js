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
    var GravitySystem = (function (_super) {
        __extends(GravitySystem, _super);
        function GravitySystem() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        GravitySystem.prototype.init = function () {
            this.sysType = war.System.Demo;
        };
        GravitySystem.prototype.destroy = function () {
        };
        GravitySystem.prototype.update = function (entity, deltaTime) {
            if (entity == null)
                return;
            var speedCom = entity.getComponent(war.Component.Speed);
            var gravityCom = entity.getComponent(war.Component.Gravity);
            if (speedCom == null || gravityCom == null)
                return;
            speedCom.setSpeedY(speedCom.speedY + gravityCom.g * deltaTime);
        };
        return GravitySystem;
    }(war.SystemBase));
    war.GravitySystem = GravitySystem;
    __reflect(GravitySystem.prototype, "war.GravitySystem");
})(war || (war = {}));
//# sourceMappingURL=GravitySystem.js.map