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
     * 速度系统
     * 专门负责研究
     */
    var SpeedSystem = (function (_super) {
        __extends(SpeedSystem, _super);
        function SpeedSystem() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        SpeedSystem.prototype.init = function () {
            this.systemId = war.SYSTEM.PATH;
        };
        SpeedSystem.prototype.destroy = function () {
        };
        SpeedSystem.prototype.update = function (entity, deltaTime) {
            if (entity == null)
                return;
            // 知道当前目标去修改速度的方向
            var sCom = entity.getCom(war.COMPONENT.SPEED);
            if (sCom == null)
                return;
            var pCom = entity.getCom(war.COMPONENT.PATH);
            if (pCom != null) {
                var currNode = pCom.getCurr();
                var localXY = war.WarUtils.ToRealPos(currNode.x, currNode.y);
                var angle = MathUtils.CalcAngle(entity.x, entity.y, localXY[0], localXY[1]);
                sCom.angle = angle;
                var speedXY = MathUtils.CalcLegSide(sCom.speed, sCom.angle);
                var speedX = speedXY[0];
                var speedY = speedXY[1];
                // 判断需不需要进行下一个目标
                if ((speedX < 0 && entity.x < localXY[0]) ||
                    (speedX > 0 && entity.x > localXY[0]) ||
                    (speedY < 0 && entity.y < localXY[1]) ||
                    (speedY > 0 && entity.y > localXY[1])) {
                    entity.x = localXY[0];
                    entity.y = localXY[1];
                    pCom.toNext();
                }
            }
        };
        return SpeedSystem;
    }(war.SystemBase));
    war.SpeedSystem = SpeedSystem;
    __reflect(SpeedSystem.prototype, "war.SpeedSystem");
})(war || (war = {}));
//# sourceMappingURL=SpeedSystem.js.map