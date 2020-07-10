var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var war;
(function (war) {
    var WarUtils = (function () {
        function WarUtils() {
        }
        WarUtils.Init = function () {
        };
        WarUtils.Destroy = function () {
        };
        // 根据各自坐标计算出实际位置
        WarUtils.ToRealPos = function (x, y) {
            var space = war.WarDataMgr.Ins().grid.space;
            var localX = war.WarDataMgr.Ins().startX + space * x + (space >> 1);
            var localY = war.WarDataMgr.Ins().startY + space * y + (space >> 1);
            return [localX, localY];
        };
        WarUtils.ToLocalX = function (x) {
            return war.WarDataMgr.Ins().startX + war.WarDataMgr.Ins().grid.space * x + (war.WarDataMgr.Ins().grid.space >> 1); // 最后括号括起来是因为>>的优先级是最低的
        };
        WarUtils.ToLocalY = function (y) {
            return war.WarDataMgr.Ins().startY + war.WarDataMgr.Ins().grid.space * y + (war.WarDataMgr.Ins().grid.space >> 1);
        };
        // 根据实际坐标计算出最近的格子坐标
        WarUtils.ToGridXY = function (localX, localY) {
            var space = war.WarDataMgr.Ins().grid.space;
            var x = Math.floor((localX - war.WarDataMgr.Ins().startX) / space);
            var y = Math.floor((localY - war.WarDataMgr.Ins().startY) / space);
            return [x, y];
        };
        WarUtils.ToGridX = function (localX) {
            var space = war.WarDataMgr.Ins().grid.space;
            var x = Math.floor((localX - war.WarDataMgr.Ins().startX) / space);
            return x;
        };
        WarUtils.ToGridY = function (localY) {
            var space = war.WarDataMgr.Ins().grid.space;
            var y = Math.floor((localY - war.WarDataMgr.Ins().startY) / space);
            return y;
        };
        // ---------------------------------------------------------------------- 检查XY是否在正常取值范围内
        WarUtils.CheckXYRangeValide = function (x, y) {
            if (x < 0 || y < 0)
                return false;
            if (x >= war.WarDataMgr.Ins().grid.numCols || y >= war.WarDataMgr.Ins().grid.numRows)
                return false;
            return true;
        };
        // ---------------------------------------------------------------------- 返回正常的XY
        WarUtils.GetRealXY = function (localX, localY) {
            var starLocalX = war.WarDataMgr.Ins().startX;
            var starLocalY = war.WarDataMgr.Ins().startY;
            var numCols = 24 - 1;
            var numRows = war.WarDataMgr.Ins().grid.numRows - 1;
            var space = war.WarDataMgr.Ins().grid.space;
            if (localX < starLocalX)
                localX = starLocalX;
            else if (localX > starLocalX + numCols * space)
                localX = starLocalX + numCols * space;
            if (localY < starLocalY)
                localY = starLocalY;
            else if (localY > starLocalY + numRows * space)
                localY = starLocalY + numRows * space;
            var x = WarUtils.ToGridX(localX);
            var y = WarUtils.ToGridY(localY);
            var realX = WarUtils.ToLocalX(x);
            var realY = WarUtils.ToLocalY(y);
            return [realX, realY];
        };
        // ---------------------------------------------------------------------- 创建实体
        WarUtils.CreateEntity = function (entityType, kaId, isLeftPos) {
            if (entityType == war.Entity.Hero)
                return this.CreateHero(kaId);
            else if (entityType == war.Entity.King)
                return this.CreateKing(kaId, isLeftPos);
            else if (entityType == war.Entity.Queen)
                return this.CreateQueen(kaId, isLeftPos);
        };
        WarUtils.CreateHero = function (kaId) {
            var hero = WarPool.Ins().pop(HeroEntity);
            hero.mc.initData("hero_" + kaId, "hero_" + kaId);
            hero.speedCom.setData(40, 0);
            hero.actionCom.setAction(war.Action.None);
            hero.dirCom.setDir(war.Direction.Right);
            hero.campCom.setCamp(war.Camp.We);
            hero.attackCom.setAttack(10, 100);
            hero.healthCom.setHealth(100);
            war.WarDataMgr.Ins().addEntity(hero);
            // 血量条
            var entityInfo = new EntityInfoView();
            entityInfo.info.packData(hero.iii, hero.healthCom.hp, hero.healthCom.hp);
            entityInfo.initView();
            war.WarDataMgr.Ins().infoMap.set(hero.iii, entityInfo);
            return hero;
        };
        WarUtils.CreateKing = function (kingId, isLeftPos) {
            var king = PoolManager.Ins().pop(KingEntity);
            king.mc.initData("hero_" + kingId, "hero_" + kingId);
            king.actionCom.setAction(war.Action.None);
            if (isLeftPos == true) {
                king.dirCom.setDir(war.Direction.Right);
                king.campCom.setCamp(war.Camp.We);
            }
            else {
                king.dirCom.setDir(war.Direction.Left);
                king.campCom.setCamp(war.Camp.Enemy);
            }
            king.attackCom.setAttack(10, 240);
            war.DrawUtils.DrawEntityRange(king);
            king.healthCom.setHealth(100);
            war.WarDataMgr.Ins().addEntity(king);
            // 血量条
            var entityInfo = new EntityInfoView();
            entityInfo.info.packData(king.iii, king.healthCom.hp, king.healthCom.hp);
            entityInfo.initView();
            war.WarDataMgr.Ins().infoMap.set(king.iii, entityInfo);
            return king;
        };
        WarUtils.CreateQueen = function (queenId, isLeftPos) {
            var queen = PoolManager.Ins().pop(QueenEntity);
            queen.mc.initData("hero_" + queenId, "hero_" + queenId);
            queen.actionCom.setAction(war.Action.None);
            if (isLeftPos == true) {
                queen.dirCom.setDir(war.Direction.Right);
                queen.campCom.setCamp(war.Camp.We);
            }
            else {
                queen.dirCom.setDir(war.Direction.Left);
                queen.campCom.setCamp(war.Camp.Enemy);
            }
            queen.attackCom.setAttack(10, 40);
            war.DrawUtils.DrawEntityRange(queen);
            queen.healthCom.setHealth(100);
            war.WarDataMgr.Ins().addEntity(queen);
            // 血量条
            var entityInfo = new EntityInfoView();
            entityInfo.info.packData(queen.iii, queen.healthCom.hp, queen.healthCom.hp);
            entityInfo.initView();
            war.WarDataMgr.Ins().infoMap.set(queen.iii, entityInfo);
            return queen;
        };
        return WarUtils;
    }());
    war.WarUtils = WarUtils;
    __reflect(WarUtils.prototype, "war.WarUtils");
})(war || (war = {}));
//# sourceMappingURL=WarUtils.js.map