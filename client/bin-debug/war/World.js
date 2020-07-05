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
    var World = (function (_super) {
        __extends(World, _super);
        function World() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        World.prototype.init = function () {
            this.lastTime = 0;
            this.sysArray = [];
            this.nextActionSystem = new war.NextActionSystem();
            this.sysArray.push(this.nextActionSystem);
            this.speedSystem = new war.SpeedSystem();
            this.sysArray.push(this.speedSystem);
            this.moveSystem = new war.MoveSystem();
            this.sysArray.push(this.moveSystem);
            this.pathSystem = new war.PathSystem();
            this.sysArray.push(this.pathSystem);
            this.renderSystem = new war.RenderSystem();
            this.sysArray.push(this.renderSystem);
            this.attackSystem = new war.AttackSystem();
            this.sysArray.push(this.attackSystem);
        };
        World.prototype.destroy = function () {
            DataUtils.DestroyDataBaseClass(this.speedSystem, true);
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
                this.nextActionSystem.update(entity, deltaTime);
                this.speedSystem.update(entity, deltaTime);
                this.moveSystem.update(entity, deltaTime);
                this.pathSystem.update(entity, deltaTime);
                this.renderSystem.update(entity, deltaTime);
                this.attackSystem.update(entity, deltaTime);
            }
        };
        return World;
    }(DataBase));
    war.World = World;
    __reflect(World.prototype, "war.World");
})(war || (war = {}));
//# sourceMappingURL=World.js.map