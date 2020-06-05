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
        };
        World.prototype.destroy = function () {
        };
        World.prototype.update = function (deltaTime) {
            var warData = war.WarDataMgr.Ins();
            var entity;
            for (var key in warData.entityMap.map) {
                entity = warData.entityMap.get(Number(key));
                if (entity == null)
                    continue;
                // 动作
                if (entity.hasCom(war.COMPONENT.ACTION) == true) {
                    warData.actionSystem.update(entity, deltaTime);
                }
                // 移动
                if (entity.hasCom(war.COMPONENT.SPEED) == true) {
                    warData.moveSystem.update(entity, deltaTime);
                }
            }
        };
        return World;
    }(DataBase));
    war.World = World;
    __reflect(World.prototype, "war.World");
})(war || (war = {}));
//# sourceMappingURL=World.js.map