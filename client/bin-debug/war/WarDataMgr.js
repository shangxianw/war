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
            this.MaxAiCount = 20;
            this.sysArray = [];
            this.entityMap = new Hash();
            this.mouseX = null;
            this.mouseY = null;
            this.warPanel = null;
            this.bgEntity = null;
            this.renderSystem = new war.RenderSystem();
            this.sysArray.push(this.renderSystem);
            this.inputSystem = new war.InputSystem();
            this.sysArray.push(this.inputSystem);
            this.decaySystem = new war.DecaySystem();
            this.sysArray.push(this.decaySystem);
            this.aiSystem = new war.AISystem();
            this.sysArray.push(this.aiSystem);
            this.collisionSystem = new war.CollisionSystem();
            this.sysArray.push(this.collisionSystem);
        };
        WarDataMgr.prototype.destroy = function () {
            this.bgEntity = null;
            this.destroyEntityMap();
            this.entityMap = null;
            this.renderSystem.destroyAll();
            this.renderSystem = null;
            this.inputSystem.destroyAll();
            this.inputSystem = null;
            this.decaySystem.destroyAll();
            this.decaySystem = null;
            this.aiSystem.destroyAll();
            this.aiSystem = null;
            this.collisionSystem.destroyAll();
            this.collisionSystem = null;
            this.sysArray.length = 0;
        };
        WarDataMgr.prototype.startWar = function () {
            egret.startTick(this.update, this);
        };
        WarDataMgr.prototype.endWar = function () {
            egret.stopTick(this.update, this);
            this.bgEntity = null;
            this.destroyEntityMap();
            this.mouseX = null;
            this.mouseY = null;
            this.warPanel.OnEndWar();
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
                this.inputSystem.update(entity, deltaTime);
                this.decaySystem.update(entity, deltaTime);
                this.aiSystem.update(entity, deltaTime);
                this.collisionSystem.update(entity, deltaTime);
                this.renderSystem.update(entity, deltaTime);
            }
            return true;
        };
        // ---------------------------------------------------------------------- 实体
        WarDataMgr.prototype.addEntity = function (entity) {
            if (this.entityMap.has(entity.hasCode) == true)
                return false;
            this.entityMap.set(entity.hasCode, entity);
        };
        WarDataMgr.prototype.removeEntity = function (hasCode) {
            if (this.entityMap.has(hasCode) == false)
                return null;
            return this.entityMap.remove(hasCode);
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
    }(war.DataBase));
    war.WarDataMgr = WarDataMgr;
    __reflect(WarDataMgr.prototype, "war.WarDataMgr");
})(war || (war = {}));
//# sourceMappingURL=WarDataMgr.js.map