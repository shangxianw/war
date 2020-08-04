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
    /**
     * 速度系统，专门控制速度的改变因素
     * 有时候是因为路径，但可能走着走着被击退了，关于速度改变的因素都在这里处理
     */
    var SpeedSystem = (function (_super) {
        __extends(SpeedSystem, _super);
        function SpeedSystem() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        SpeedSystem.prototype.init = function () {
            this.sysType = war.System.Speed;
        };
        SpeedSystem.prototype.destroy = function () {
        };
        SpeedSystem.prototype.update = function (entity, deltaTime) {
            if (entity == null)
                return;
            var pathCom = entity.getComponent(war.Component.Path);
            if (pathCom != null) {
                1;
                return;
            }
        };
        return SpeedSystem;
    }(war.SystemBase));
    war.SpeedSystem = SpeedSystem;
    __reflect(SpeedSystem.prototype, "war.SpeedSystem");
})(war || (war = {}));
//# sourceMappingURL=SpeedSystem.js.map