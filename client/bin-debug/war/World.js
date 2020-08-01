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
        };
        World.prototype.destroy = function () {
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
            }
        };
        return World;
    }());
    war.World = World;
    __reflect(World.prototype, "war.World");
})(war || (war = {}));
//# sourceMappingURL=World.js.map