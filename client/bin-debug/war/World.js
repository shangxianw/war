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
        };
        World.prototype.destroy = function () {
        };
        return World;
    }());
    war.World = World;
    __reflect(World.prototype, "war.World");
})(war || (war = {}));
//# sourceMappingURL=World.js.map