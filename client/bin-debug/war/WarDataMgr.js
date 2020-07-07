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
    var WarDataMgr = (function (_super) {
        __extends(WarDataMgr, _super);
        function WarDataMgr() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.enemyTarget = [[40, 4], [40, 18], [42, 12]];
            return _this;
        }
        WarDataMgr.prototype.init = function () {
            this.mapId = 1001;
            this.startX = 100;
            this.startY = 85;
            // 战场宽540高900
            this.astar = new astar.AStar();
            this.grid = new astar.Grid();
            this.grid.init(24, 54, 20);
            this.world = new war.World();
            this.pathMap = new Hash();
            this.entityMap = new Hash();
            this.infoMap = new Hash();
        };
        WarDataMgr.prototype.destroy = function () {
            DataUtils.DestroyUIBaseMap(this.entityMap);
            DataUtils.DestroyUIBaseMap(this.infoMap);
            this.astar.destroy();
            this.grid.destroy();
            this.astar = null;
            this.grid = null;
        };
        WarDataMgr.prototype.startWar = function () {
            egret.startTick(this.update, this);
        };
        WarDataMgr.prototype.endWar = function () {
            egret.stopTick(this.update, this);
        };
        WarDataMgr.prototype.update = function (currTime) {
            if (currTime === void 0) { currTime = null; }
            try {
                this.world.update(currTime);
            }
            catch (e) {
            }
            return true;
        };
        // ---------------------------------------------------------------------- 实体
        WarDataMgr.prototype.addEntity = function (entity) {
            if (this.entityMap.has(entity.iii) == true)
                return false;
            this.entityMap.set(entity.iii, entity);
        };
        WarDataMgr.prototype.removeEntity = function (id) {
            if (this.entityMap.has(id) == false)
                return null;
            return this.entityMap.remove(id);
        };
        WarDataMgr.prototype.destroyEntity = function (id) {
            if (this.entityMap.has(id) == false)
                return false;
            var entity = this.entityMap.remove(id);
            entity != null && entity.destroyAll();
            PoolManager.Ins().push(entity);
        };
        WarDataMgr.prototype.findPath = function (startX, startY, endX, endY) {
            // 如果存在缓存，则在缓存中查找
            var key = startX + "_" + startY + "_" + endX + "_" + endY;
            var path;
            if (this.pathMap.has(key) == true) {
                path = this.pathMap.get(key);
                return DataUtils.CopyArray(path); // 如果直接返回的话，会因为引用同一段路径而使其他实体产生问题。
            }
            path = this.astar.findPath(startX, startY, endX, endY, this.grid);
            this.pathMap.set(key, path);
            return path;
        };
        WarDataMgr.prototype.getEnemyTarget = function (entity) {
            var x = war.WarUtils.ToGridX(entity.x);
            var y = war.WarUtils.ToGridY(entity.y);
            var distanceArray = [];
            for (var _i = 0, _a = this.enemyTarget; _i < _a.length; _i++) {
                var pos = _a[_i];
                var distance = MathUtils.CalcDistance(x, y, pos[0], pos[1]);
                distanceArray.push(distance);
            }
            var minIndex = 0;
            var i = 0;
            for (var _b = 0, distanceArray_1 = distanceArray; _b < distanceArray_1.length; _b++) {
                var distance = distanceArray_1[_b];
                if (distance < distanceArray[minIndex])
                    minIndex = i;
                i++;
            }
            return this.enemyTarget[minIndex];
        };
        WarDataMgr.Ins = function () {
            if (WarDataMgr.instance == null)
                WarDataMgr.instance = new WarDataMgr();
            return WarDataMgr.instance;
        };
        return WarDataMgr;
    }(DataBase));
    war.WarDataMgr = WarDataMgr;
    __reflect(WarDataMgr.prototype, "war.WarDataMgr");
})(war || (war = {}));
//# sourceMappingURL=WarDataMgr.js.map