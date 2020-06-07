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
        MoveSystem.prototype.update = function (deltaTime) {
            var entity;
            var warData = war.WarDataMgr.Ins();
            for (var idStr in warData.entityMap.map) {
                entity = warData.entityMap.get(Number(idStr));
                if (entity == null)
                    continue;
                var sCom = entity.getCom(war.COMPONENT.SPEED); // 连速度都没有，就不用移动了(除非闪现？到后面再说吧，反正刷新实体位置的操作就在这了)
                if (sCom == null)
                    continue;
                var pCom = entity.getCom(war.COMPONENT.PATH);
                if (pCom != null) {
                    var array = this.getCurrNode(entity);
                    if (array == null) {
                        // 考虑下一步操作了
                        var aCom = entity.getCom(war.COMPONENT.ACTION);
                        if (aCom != null) {
                            aCom.setAction(war.ACTION.STAND); // 暂时为站着，
                        }
                        continue;
                    }
                    var currTar = array[0];
                    var localX = array[1];
                    var localY = array[2];
                    var speedXY = MathUtils.CalcSpeedXY(sCom.speed, entity.x, entity.y, localX, localY);
                    var speedX = speedXY[0], speedY = speedXY[1];
                    entity.x = Number((entity.x + speedX).toFixed(2));
                    entity.y = Number((entity.y + speedY).toFixed(2));
                    if ((speedX < 0 && entity.x < localX) ||
                        (speedX > 0 && entity.x > localX) ||
                        (speedY < 0 && entity.y < localY) ||
                        (speedY > 0 && entity.y > localY)) {
                        entity.x = localX;
                        entity.y = localY;
                    }
                    war.DrawUtils.DrawPath(entity);
                }
                else {
                }
            }
        };
        MoveSystem.prototype.getCurrNode = function (entity) {
            var warData = war.WarDataMgr.Ins();
            var pCom = entity.getCom(war.COMPONENT.PATH);
            var currTar = pCom.getCurr();
            if (currTar == null)
                return null;
            var localX = warData.grid.startX + warData.grid.space * currTar.x;
            var localY = warData.grid.startY + warData.grid.space * currTar.y;
            if (entity.x == localX && entity.y == localY) {
                pCom.toNext();
                return [this.getCurrNode(entity), localX, localY];
            }
            else {
                return [currTar, localX, localY];
            }
        };
        return MoveSystem;
    }(war.SystemBase));
    war.MoveSystem = MoveSystem;
    __reflect(MoveSystem.prototype, "war.MoveSystem");
})(war || (war = {}));
//# sourceMappingURL=MoveSystem.js.map