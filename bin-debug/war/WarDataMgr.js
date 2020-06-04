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
            return _super !== null && _super.apply(this, arguments) || this;
        }
        WarDataMgr.prototype.init = function () {
            this.entityMap = new Hash();
            this.sysArray = [];
            this.initGrid();
        };
        WarDataMgr.prototype.destroy = function () {
            DataUtils.DestroyUIBaseMap(this.entityMap);
            DataUtils.DestroyDataBaseArray(this.sysArray);
            this.destroyGrid();
        };
        WarDataMgr.prototype.update = function () {
            for (var _i = 0, _a = this.sysArray; _i < _a.length; _i++) {
                var sys = _a[_i];
                if (sys == null)
                    continue;
                sys.update();
            }
        };
        // ---------------------------------------------------------------------- 寻路
        WarDataMgr.prototype.initGrid = function () {
            this.grid = new astar.Grid(13, 20);
            this.pathMap = new Hash();
        };
        WarDataMgr.prototype.destroyGrid = function () {
            this.grid.destroy();
            this.grid = null;
            var path;
            for (var key in this.pathMap) {
                path = this.pathMap.get(key);
                if (path = null)
                    continue;
                for (var _i = 0, path_1 = path; _i < path_1.length; _i++) {
                    var node = path_1[_i];
                    node.destroy();
                }
                path.length = 0;
                path = null;
            }
            this.pathMap.destroy();
            this.pathMap = null;
        };
        WarDataMgr.prototype.findPath = function (start, end) {
            if (start == null || end == null)
                return;
            // 超出边界判断
            // 如果存在缓存，则在缓存中查找
            var key = start[0] + "_" + start[1] + "_" + end[0] + "_" + end[1];
            if (this.pathMap.has(key) == true)
                return this.pathMap.get(key);
            this.grid.setStartNode(start[0], start[1]);
            this.grid.setEndNode(end[0], end[1]);
            var star = PoolManager.Ins().pop(astar.AStar);
            if (star.findPath(this.grid) == true) {
                this.pathMap.set(key, star.path);
                star.destroy();
                PoolManager.Ins().push(star);
                return star.path;
            }
            PoolManager.Ins().push(star);
            return [];
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