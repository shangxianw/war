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
     * 主要是计算速度的方向，供移动系统使用
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
            var sCom = entity.getCom(war.COMPONENT.SPEED);
            if (sCom == null)
                return;
            this.calcByPath(entity);
        };
        SpeedSystem.prototype.calcByPath = function (entity) {
            var sCom = entity.getCom(war.COMPONENT.SPEED);
            if (sCom == null)
                return;
            var pCom = entity.getCom(war.COMPONENT.PATH);
            if (pCom != null) {
                var currStartNode = pCom.getCurrStartNode();
                if (currStartNode != null) {
                    var currEndNode = pCom.getCurrEndNode();
                    if (currEndNode == null)
                        return;
                    var startX = war.WarUtils.ToLocalX(currStartNode.x);
                    var startY = war.WarUtils.ToLocalY(currStartNode.y);
                    var endX = war.WarUtils.ToLocalX(currEndNode.x);
                    var endY = war.WarUtils.ToLocalY(currEndNode.y);
                    var angle = MathUtils.CalcAngle(startX, startY, endX, endY);
                    sCom.angle = angle;
                }
            }
        };
        return SpeedSystem;
    }(war.SystemBase));
    war.SpeedSystem = SpeedSystem;
    __reflect(SpeedSystem.prototype, "war.SpeedSystem");
})(war || (war = {}));
//# sourceMappingURL=SpeedSystem.js.map