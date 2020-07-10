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
            this.lastTime = 0;
            this.sysArray = [];
            this.world = new war.World();
            this.entityMap = new Hash();
        };
        WarDataMgr.prototype.destroy = function () {
            this.world.destroy();
            for (var _i = 0, _a = this.entityMap.values(); _i < _a.length; _i++) {
                var item = _a[_i];
                item.destroy();
            }
            this.entityMap.destroy();
            this.entityMap = null;
            this.sysArray.length = 0;
        };
        WarDataMgr.prototype.startWar = function () {
            egret.startTick(this.update, this);
        };
        WarDataMgr.prototype.endWar = function () {
            egret.stopTick(this.update, this);
        };
        WarDataMgr.prototype.update = function (currTime) {
            if (currTime === void 0) { currTime = null; }
            var deltaTime = (currTime - this.lastTime) / 1000;
            this.lastTime = currTime;
            var warData = WarDataMgr.Ins();
            var entityArray = DataUtils.CopyArray(warData.entityMap.values());
            var entity;
            for (var i = 0, len = entityArray.length; i < len; i++) {
                entity = entityArray[i];
                if (entity == null)
                    continue;
            }
            return true;
        };
        // ---------------------------------------------------------------------- 实体
        WarDataMgr.prototype.addEntity = function (entity) {
            if (this.entityMap.has(entity.hasCode) == true)
                return false;
            this.entityMap.set(entity.hasCode, entity);
        };
        WarDataMgr.prototype.removeEntity = function (id) {
            if (this.entityMap.has(id) == false)
                return null;
            return this.entityMap.remove(id);
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