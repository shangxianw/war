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
    var MoveSystem = (function (_super) {
        __extends(MoveSystem, _super);
        function MoveSystem() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        MoveSystem.prototype.init = function () {
            this.sysType = war.System.Move;
        };
        MoveSystem.prototype.destroy = function () {
        };
        MoveSystem.prototype.update = function (entity, dt) {
            if (entity == null)
                return;
            var posCom = entity.getComponent(war.Component.Pos);
            var speedCom = entity.getComponent(war.Component.Speed);
            if (posCom == null || speedCom == null)
                return;
            var speed = MathUtils.CalcLegSide(speedCom.speed, speedCom.angle); // 计算速度在xy轴上的分速度
            posCom.setAddPos(speed[0] * dt, speed[1] * dt);
        };
        return MoveSystem;
    }(war.SystemBase));
    war.MoveSystem = MoveSystem;
    __reflect(MoveSystem.prototype, "war.MoveSystem");
})(war || (war = {}));
//# sourceMappingURL=MoveSystem.js.map