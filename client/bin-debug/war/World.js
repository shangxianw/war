var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var war;
(function (war) {
    var World = (function () {
        function World() {
            this.init();
        }
        World.prototype.init = function () {
            this.lastTime = 0;
            this.sysArray = [];
            this.moveSystem = new war.MoveSystem();
            this.sysArray.push(this.moveSystem);
            this.renderSystem = new war.RenderSystem();
            this.sysArray.push(this.renderSystem);
            this.speedSystem = new war.SpeedSystem();
            this.sysArray.push(this.speedSystem);
        };
        World.prototype.destroy = function () {
            this.moveSystem.destroyAll();
            this.moveSystem = null;
            this.renderSystem.destroyAll();
            this.renderSystem = null;
            this.speedSystem.destroyAll();
            this.speedSystem = null;
            this.sysArray.length = 0;
        };
        World.prototype.update = function (currTime) {
            var deltaTime = (currTime - this.lastTime) / 1000;
            this.lastTime = currTime;
            var warData = war.WarDataMgr.Ins();
            var entityArray = DataUtils.CopyArray(warData.entityMap.values());
            var entity;
            for (var i = 0, len = entityArray.length; i < len; i++) {
                entity = entityArray[i];
                if (entity == null)
                    continue;
                this.speedSystem.update(entity, deltaTime);
                this.moveSystem.update(entity, deltaTime);
                this.renderSystem.update(entity, deltaTime);
            }
        };
        return World;
    }());
    war.World = World;
    __reflect(World.prototype, "war.World");
})(war || (war = {}));
//# sourceMappingURL=World.js.map