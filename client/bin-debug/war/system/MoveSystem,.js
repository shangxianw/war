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
        MoveSystem.prototype.update = function (entity, deltaTime) {
            if (entity == null)
                return;
            var speedCom = entity.getComponent(war.Component.Speed);
            var posCom = entity.getComponent(war.Component.Pos);
            if (speedCom == null || posCom == null)
                return;
            posCom.x += speedCom.speedX * deltaTime;
            posCom.y += speedCom.speedY * deltaTime;
        };
        return MoveSystem;
    }(war.SystemBase));
    war.MoveSystem = MoveSystem;
    __reflect(MoveSystem.prototype, "war.MoveSystem");
})(war || (war = {}));
