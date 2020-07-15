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
    var InputSystem = (function (_super) {
        __extends(InputSystem, _super);
        function InputSystem() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        InputSystem.prototype.init = function () {
            this.sysType = war.System.Input;
        };
        InputSystem.prototype.destroy = function () {
        };
        InputSystem.prototype.update = function (entity, deltaTime) {
            if (entity == null)
                return;
            var ctrlCom = entity.getComponent(war.Component.Ctrl);
            var speedCom = entity.getComponent(war.Component.Speed);
            if (ctrlCom == null || speedCom == null)
                return;
            var speedX = war.WarDataMgr.Ins().endX - war.WarDataMgr.Ins().beginX;
            if (speedX > 0)
                speedX = war.WarDataMgr.Ins().moveXSpeed;
            else if (speedX < 0)
                speedX = -war.WarDataMgr.Ins().moveXSpeed;
            else
                speedX = 0;
            speedCom.setSpeedX(speedX);
        };
        return InputSystem;
    }(war.SystemBase));
    war.InputSystem = InputSystem;
    __reflect(InputSystem.prototype, "war.InputSystem");
})(war || (war = {}));
//# sourceMappingURL=InputSystem().js.map