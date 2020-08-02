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
            _this.StageWidth = 640;
            _this.StageHeight = 1280;
            _this.MapStartX = 100;
            _this.MapStartY = 100;
            _this.Ncols = 54;
            _this.Nrows = 24;
            _this.CeilSize = 20;
            return _this;
        }
        WarDataMgr.prototype.init = function () {
            this.world = new war.World();
            this.entityMap = new Hash();
            this.mapGrid = new astar.Grid();
            this.astar = new astar.AStar();
        };
        WarDataMgr.prototype.destroy = function () {
            this.world.destroy();
            this.world = null;
            this.destroyEntityMap();
            this.entityMap = null;
        };
        WarDataMgr.prototype.startWar = function () {
            this.mapGrid.init(this.Nrows, this.Ncols, this.CeilSize);
            egret.startTick(this.update, this);
        };
        WarDataMgr.prototype.endWar = function () {
            egret.stopTick(this.update, this);
            this.destroyEntityMap();
        };
        WarDataMgr.prototype.findPath = function (x1, y1, x2, y2) {
            var path = this.astar.findPath(x1, y1, x2, y2, this.mapGrid);
            return path;
        };
        WarDataMgr.prototype.update = function (currTime) {
            if (currTime === void 0) { currTime = null; }
            try {
                this.world.update(currTime);
                return true;
            }
            catch (e) {
                return false;
            }
        };
        // ---------------------------------------------------------------------- 实体
        WarDataMgr.prototype.addEntity = function (entity) {
            if (this.entityMap.has(entity.hasCode) == true)
                return false;
            this.entityMap.set(entity.hasCode, entity);
        };
        WarDataMgr.prototype.removeEntity = function (entity) {
            if (this.entityMap.has(entity.hasCode) == false)
                return null;
            this.entityMap.remove(entity.hasCode);
            entity.destroyAll();
        };
        WarDataMgr.prototype.destroyEntityMap = function () {
            for (var _i = 0, _a = this.entityMap.values(); _i < _a.length; _i++) {
                var item = _a[_i];
                item.destroyAll();
            }
            this.entityMap.destroy();
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