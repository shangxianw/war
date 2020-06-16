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
            this.sysArray = [];
            this.inputSystem = new war.InputSystem();
            this.sysArray.push(this.inputSystem);
            this.moveSystem = new war.MoveSystem();
            this.sysArray.push(this.moveSystem);
            this.pathSystem = new war.PathSystem();
            this.sysArray.push(this.pathSystem);
            this.speedSystem = new war.SpeedSystem();
            this.sysArray.push(this.speedSystem);
            this.actionSystem = new war.ActionSystem();
            this.sysArray.push(this.actionSystem);
            this.collisionSystem = new war.CollisionSystem();
            this.sysArray.push(this.collisionSystem);
        };
        World.prototype.destroy = function () {
            DataUtils.DestroyDataBaseClass(this.inputSystem, true);
            DataUtils.DestroyDataBaseClass(this.moveSystem, true);
            DataUtils.DestroyDataBaseClass(this.actionSystem, true);
            DataUtils.DestroyDataBaseClass(this.collisionSystem, true);
            this.sysArray.length = 0;
        };
        World.prototype.update = function (deltaTime) {
            this.inputSystem.update(deltaTime);
            var warData = war.WarDataMgr.Ins();
            var entityArray = DataUtils.CopyArray(warData.entityMap.values());
            var entity;
            for (var i = 0, len = entityArray.length; i < len; i++) {
                entity = entityArray[i];
                if (entity == null)
                    continue;
                this.speedSystem.update(entity, deltaTime);
                this.moveSystem.update(entity, deltaTime);
                this.pathSystem.update(entity, deltaTime);
                this.actionSystem.update(entity, deltaTime);
                this.collisionSystem.update(entity, deltaTime);
            }
        };
        World.prototype.updateSystem = function (deltaTime) {
            var warData = war.WarDataMgr.Ins();
            for (var _i = 0, _a = this.sysArray; _i < _a.length; _i++) {
                var system = _a[_i];
                system.update(deltaTime);
            }
        };
        return World;
    }(DataBase));
    war.World = World;
    __reflect(World.prototype, "war.World");
})(war || (war = {}));
//# sourceMappingURL=World.js.map