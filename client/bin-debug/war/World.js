var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var war;
(function (war) {
    var World = (function () {
        function World() {
            this.lastLogic = 0;
            this.updateLogic = 0;
            this.lastRender = 0;
            this.updateRender = 0;
            this.init();
        }
        World.prototype.init = function () {
            this.lastLogic = 0;
            this.updateLogic = 0;
            this.lastRender = 0;
            this.updateRender = 0;
            this.sysArray = [];
            this.moveSystem = new war.MoveSystem();
            this.sysArray.push(this.moveSystem);
            this.renderSystem = new war.RenderSystem();
            this.sysArray.push(this.renderSystem);
            this.speedSystem = new war.SpeedSystem();
            this.sysArray.push(this.speedSystem);
            this.pathSystem = new war.PathSystem();
            this.sysArray.push(this.pathSystem);
        };
        World.prototype.destroy = function () {
            this.moveSystem.destroyAll();
            this.moveSystem = null;
            this.renderSystem.destroyAll();
            this.renderSystem = null;
            this.speedSystem.destroyAll();
            this.speedSystem = null;
            this.pathSystem.destroyAll();
            this.pathSystem = null;
            this.sysArray.length = 0;
        };
        World.prototype.logicLoop = function (t) {
            var dt = t - this.lastLogic;
            var delay = 1000 / FrameFps.Logic;
            this.updateLogic += dt;
            if (this.updateLogic < delay)
                return true;
            this.lastLogic = t;
            var count = Math.floor(this.updateLogic / delay);
            this.updateLogic -= delay * count;
            var warData = war.WarDataMgr.Ins();
            var entityArray = DataUtils.CopyArray(warData.entityMap.values());
            var entity;
            for (var i = 0, len = entityArray.length; i < len; i++) {
                entity = entityArray[i];
                if (entity == null)
                    continue;
                this.speedSystem.update(entity, dt);
                this.moveSystem.update(entity, dt);
                this.pathSystem.update(entity, dt);
            }
        };
        World.prototype.renderLoop = function (t) {
            var dt = t - this.lastRender;
            var delay = 1000 / FrameFps.Render;
            this.updateRender += dt;
            if (this.updateRender < delay)
                return true;
            this.lastRender = t;
            var count = Math.floor(this.updateRender / delay);
            this.updateRender -= delay & count;
            var warData = war.WarDataMgr.Ins();
            var entityArray = DataUtils.CopyArray(warData.entityMap.values());
            var entity;
            for (var i = 0, len = entityArray.length; i < len; i++) {
                entity = entityArray[i];
                if (entity == null)
                    continue;
                this.renderSystem.update(entity, dt);
            }
        };
        return World;
    }());
    war.World = World;
    __reflect(World.prototype, "war.World");
})(war || (war = {}));
//# sourceMappingURL=World.js.map