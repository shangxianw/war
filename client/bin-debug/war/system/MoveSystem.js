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
    /**
     * 移动系统
     * 同时拥有位置和速度，便认为该实体可以移动
     * 负责刷新实体的位置
     */
    var MoveSystem = (function (_super) {
        __extends(MoveSystem, _super);
        function MoveSystem() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        MoveSystem.prototype.init = function () {
            this.systemId = war.SYSTEM.MOVE;
        };
        MoveSystem.prototype.destroy = function () {
        };
        MoveSystem.prototype.update = function (entity, deltaTime) {
            if (entity == null)
                return;
            var sCom = entity.getCom(war.COMPONENT.SPEED);
            if (sCom == null)
                return;
            var speedArray = MathUtils.CalcLegSide(sCom.speed, sCom.angle);
            var speedX = speedArray[0];
            var speedY = speedArray[1];
            entity.x = Number((entity.x + speedX).toFixed(2));
            entity.y = Number((entity.y + speedY).toFixed(2));
        };
        return MoveSystem;
    }(war.SystemBase));
    war.MoveSystem = MoveSystem;
    __reflect(MoveSystem.prototype, "war.MoveSystem");
})(war || (war = {}));
//# sourceMappingURL=MoveSystem.js.map