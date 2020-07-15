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
    var CollisionSystem = (function (_super) {
        __extends(CollisionSystem, _super);
        function CollisionSystem() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        /**
         * 名称：碰撞检测
         * 功能：检测是否跳跃到台阶上
         * 原理：计算矩形与矩形之间是否发生碰撞，只有速度向下，且脚踩在台阶上才算是作为跳跃的标志
         * 注意：1、即使发生碰撞，也需要检测速度方向，按照游戏需求，玩家向上是可以穿过台阶，向下则是进行跳跃的，所以需要判断速度方向
         * 		2、即使速度向下了，也需要判断玩家的脚是否踩在台阶上，否则会发生只要满足碰撞+速度向下，就会发生碰撞。
         */
        CollisionSystem.prototype.init = function () {
            this.sysType = war.System.Collision;
        };
        CollisionSystem.prototype.destroy = function () {
        };
        CollisionSystem.prototype.update = function (entity, deltaTime) {
            if (entity == null)
                return;
            var rigidCom = entity.getComponent(war.Component.Rigid);
            var posCom = entity.getComponent(war.Component.Pos);
            var speedCom = entity.getComponent(war.Component.Speed);
            var ctrlCom = entity.getComponent(war.Component.Ctrl);
            if (rigidCom == null || posCom == null || speedCom == null || ctrlCom == null)
                return;
            var entityArray = DataUtils.CopyArray(war.WarDataMgr.Ins().entityMap.values());
            for (var _i = 0, entityArray_1 = entityArray; _i < entityArray_1.length; _i++) {
                var entity2 = entityArray_1[_i];
                if (entity2 == null)
                    continue;
                if (entity.hasCode == entity2.hasCode)
                    continue;
                var rigidCom2 = entity2.getComponent(war.Component.Rigid);
                var posCom2 = entity2.getComponent(war.Component.Pos);
                if (rigidCom2 == null || posCom2 == null)
                    continue;
                var flag = MathUtils.CheckTwoRectIntersect(posCom.getOriX(), posCom.getOriY(), posCom.width, posCom.height, posCom2.getOriX(), posCom2.getOriY(), posCom2.width, posCom2.height);
                if (flag == false)
                    continue;
                if (speedCom.isUp() == true)
                    continue;
                if (posCom.y > posCom2.y)
                    continue;
                speedCom.speedY = war.WarDataMgr.Ins().jumpSpeed;
            }
        };
        return CollisionSystem;
    }(war.SystemBase));
    war.CollisionSystem = CollisionSystem;
    __reflect(CollisionSystem.prototype, "war.CollisionSystem");
})(war || (war = {}));
//# sourceMappingURL=CollisionSystem.js.map