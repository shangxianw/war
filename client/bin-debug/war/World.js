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
            this.renderSystem = new war.RenderSystem();
            this.moveSystem = new war.MoveSystem();
            this.gravitySystem = new war.GravitySystem();
            this.collisionSystem = new war.CollisionSystem();
            this.inputSystem = new war.InputSystem();
            this.cameraSystem = new war.CameraSystem();
            this.aiSystem = new war.AISystem();
            this.sysArray.push(this.moveSystem);
            this.sysArray.push(this.gravitySystem);
            this.sysArray.push(this.renderSystem);
            this.sysArray.push(this.collisionSystem);
            this.sysArray.push(this.inputSystem);
            this.sysArray.push(this.cameraSystem);
            this.sysArray.push(this.aiSystem);
        };
        World.prototype.destroy = function () {
            this.sysArray.length = 0;
            this.renderSystem.destroyAll();
            this.moveSystem.destroyAll();
            this.gravitySystem.destroyAll();
            this.collisionSystem.destroyAll();
            this.inputSystem.destroyAll();
            this.cameraSystem.destroyAll();
            this.aiSystem.destroyAll();
            this.renderSystem = null;
            this.moveSystem = null;
            this.gravitySystem = null;
            this.collisionSystem = null;
            this.inputSystem = null;
            this.cameraSystem = null;
            this.aiSystem = null;
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
                this.inputSystem.update(entity, deltaTime);
                this.moveSystem.update(entity, deltaTime);
                this.gravitySystem.update(entity, deltaTime);
                this.collisionSystem.update(entity, deltaTime);
                this.aiSystem.update(entity, deltaTime);
                this.cameraSystem.update(entity, deltaTime);
                this.renderSystem.update(entity, deltaTime);
            }
            war.DrawUtils.DrawStandardLine(war.WarDataMgr.Ins().currStepLevel);
        };
        return World;
    }());
    war.World = World;
    __reflect(World.prototype, "war.World");
})(war || (war = {}));
//# sourceMappingURL=World.js.map