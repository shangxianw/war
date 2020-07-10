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
            var ctrlCom = entity.getComponent(war.Component.Ctrl);
            if (ctrlCom == null)
                return;
            var posCom = entity.getComponent(war.Component.Pos);
            if (posCom == null)
                return;
            var healthCom = entity.getComponent(war.Component.Health);
            if (healthCom == null)
                return;
            var warData = war.WarDataMgr.Ins();
            var entityArray = DataUtils.CopyArray(warData.entityMap.values());
            var entity2;
            for (var i = 0, len = entityArray.length; i < len; i++) {
                entity2 = entityArray[i];
                if (entity2 == null)
                    continue;
                if (entity2.hasCode == entity.hasCode)
                    continue;
                var aiCom = entity2.getComponent(war.Component.AI); // 只和ai发生碰撞（即除了背景板）
                if (aiCom == null)
                    continue;
                var posCom2 = entity2.getComponent(war.Component.Pos);
                if (posCom2 == null)
                    continue;
                var flag = MathUtils.CheckTwoRectIntersect(posCom.x - posCom.width / 2, posCom.y - posCom.height / 2, posCom.width, posCom.height, posCom2.x - posCom2.width / 2, posCom2.y - posCom2.height / 2, posCom2.width, posCom2.height);
                if (flag == false)
                    continue;
                if (aiCom.aiType == war.AIType.Nice) {
                    healthCom.setHp(healthCom.hp + posCom2.width / 2);
                    var score = Math.floor(posCom2.width / 2);
                    war.WarDataMgr.Ins().warPanel.OnRefreshScore(score);
                    this.changeBgColor(1);
                }
                else {
                    healthCom.setHp(healthCom.hp - posCom2.width / 2);
                    var score = Math.floor(posCom2.width / 2);
                    war.WarDataMgr.Ins().warPanel.OnRefreshScore(-score);
                    this.changeBgColor(2);
                }
                posCom.setScaleXY(healthCom.hp / 100, healthCom.hp / 100);
                war.WarUtils.RemoveEntity(entity2);
            }
        };
        CollisionSystem.prototype.changeBgColor = function (type) {
            var bgEntity = war.WarDataMgr.Ins().bgEntity;
            if (bgEntity == null)
                return;
            var posCom = bgEntity.getComponent(war.Component.Pos);
            if (posCom == null)
                return;
            if (type == 1) {
                posCom.setColor(war.EntityColor.NiceBg);
                // let bgPosCom = WarDataMgr.Ins().bgEntity.getComponent(Component.Pos) as PosCom
                // bgPosCom.alpha = 1;
            }
            else {
                posCom.setColor(war.EntityColor.BadBg);
                var bgPosCom = war.WarDataMgr.Ins().bgEntity.getComponent(war.Component.Pos);
                bgPosCom.alpha = 1;
            }
        };
        return CollisionSystem;
    }(war.SystemBase));
    war.CollisionSystem = CollisionSystem;
    __reflect(CollisionSystem.prototype, "war.CollisionSystem");
})(war || (war = {}));
//# sourceMappingURL=CollisionSystem.js.map