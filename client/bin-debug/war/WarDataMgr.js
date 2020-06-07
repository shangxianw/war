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
            _this.numCols = 10;
            _this.numRows = 10;
            _this.space = 40;
            _this.startX = 100;
            _this.startY = 240;
            return _this;
        }
        WarDataMgr.prototype.init = function () {
            this.numCols = 13;
            this.numRows = 20;
            this.space = 40;
            this.startX = 100;
            this.startY = 240;
            this.world = new war.World();
            this.entityMap = new Hash();
            this.sysArray = [];
            this.initGrid();
            this.moveSystem = new war.MoveSystem();
            this.sysArray.push(this.moveSystem);
            // this.pathSystem = new PathSystem();
            // this.sysArray.push(this.pathSystem);
            // this.speedSystem = new SpeedSystem();
            // this.sysArray.push(this.speedSystem);
            // this.actionSystem = new ActionSystem();
            // this.sysArray.push(this.actionSystem);
            // this.collisionSystem = new CollisionSystem();
            // this.sysArray.push(this.collisionSystem);
        };
        WarDataMgr.prototype.destroy = function () {
            DataUtils.DestroyUIBaseMap(this.entityMap);
            if (this.moveSystem != null) {
                this.moveSystem.destroyAll();
                this.moveSystem = null;
            }
            if (this.actionSystem != null) {
                this.actionSystem.destroyAll();
                this.actionSystem = null;
            }
            this.sysArray.length = 0;
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
        WarDataMgr.prototype.update = function (deltaTime) {
            if (deltaTime === void 0) { deltaTime = null; }
            try {
                this.world.update(deltaTime);
            }
            catch (e) {
            }
            return true;
        };
        // ---------------------------------------------------------------------- 实体
        WarDataMgr.prototype.addEntity = function (entity) {
            if (this.entityMap.has(entity.id) == true)
                return false;
            this.entityMap.set(entity.id, entity);
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
        // ---------------------------------------------------------------------- 寻路
        WarDataMgr.prototype.initGrid = function () {
            this.astar = new astar.AStar();
            this.grid = new astar.Grid();
            this.grid.init(this.numRows, this.numCols, this.space);
            this.pathMap = new Hash();
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
        WarDataMgr.prototype.calcLocalXY = function (x, y) {
            var localX = this.startX + this.space * x;
            var localY = this.startY + this.space * y;
            return [localX, localY];
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