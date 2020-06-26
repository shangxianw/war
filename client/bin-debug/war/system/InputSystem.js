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
    var InputSystem = (function (_super) {
        __extends(InputSystem, _super);
        function InputSystem() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        InputSystem.prototype.init = function () {
            this.systemId = war.SYSTEM.MOVE;
        };
        InputSystem.prototype.destroy = function () {
        };
        // ---------------------------------------------------------------------- 创建英雄实体
        InputSystem.prototype.createHero = function (x, y, parent) {
            var hero = PoolManager.Ins().pop(war.HeroEntity);
            hero.x = war.WarUtils.ToLocalX(x);
            hero.y = war.WarUtils.ToLocalY(y);
            var sCom = PoolManager.Ins().pop(war.SpeedCom);
            sCom.speed = 60;
            sCom.angle = 0;
            hero.setCom(sCom);
            var pCom = PoolManager.Ins().pop(war.PathCom);
            var endX = Math.floor(Math.random() * war.WarDataMgr.Ins().grid.numCols);
            var endY = Math.floor(Math.random() * war.WarDataMgr.Ins().grid.numRows);
            var newPath = war.WarDataMgr.Ins().findPath(x, y, endX, endY);
            pCom.setPath(newPath);
            hero.setCom(pCom);
            parent.addChild(hero);
            war.WarDataMgr.Ins().addEntity(hero);
        };
        return InputSystem;
    }(war.SystemBase));
    war.InputSystem = InputSystem;
    __reflect(InputSystem.prototype, "war.InputSystem");
})(war || (war = {}));
//# sourceMappingURL=InputSystem.js.map