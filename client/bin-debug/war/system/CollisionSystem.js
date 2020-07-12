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