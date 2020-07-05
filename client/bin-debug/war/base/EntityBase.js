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
    var EntityBase = (function (_super) {
        __extends(EntityBase, _super);
        function EntityBase(skinName) {
            if (skinName === void 0) { skinName = null; }
            var _this = _super.call(this, skinName) || this;
            if (skinName != null)
                _this.skinName = skinName;
            return _this;
        }
        EntityBase.prototype.initAll = function () {
            this.comMap = new Hash();
            this.touchEnabled = false;
            this.touchChildren = false;
            this.mc = new MovieClip();
            this.addChild(this.mc);
            this.entityType = war.ENTITY.NONE;
            this.attackTargets = [];
            this.camp = war.CAMP.NONE;
            this.action = war.ACTION.STAND;
            this.dir = war.DIRECTION.DOWN;
            this.path = [];
            this.speed = 0;
            this.angle = 90;
            this.range = 0;
            this.health = 0;
            this.attack = 2;
            this.attackLoopOK = false;
            this.mc.mc.addEventListener(egret.Event.LOOP_COMPLETE, this.OnLoopComplete, this);
            _super.prototype.initAll.call(this);
        };
        EntityBase.prototype.destroyAll = function () {
            this.attackTargets.length = 0;
            this.mc.mc.removeEventListener(egret.Event.LOOP_COMPLETE, this.OnLoopComplete, this);
            DataUtils.DestroyDataBaseMap(this.comMap);
            this.mc.destroy();
            _super.prototype.destroyAll.call(this);
        };
        EntityBase.prototype.getCom = function (id) {
            return this.comMap.get(id);
        };
        EntityBase.prototype.removeCom = function (id) {
            var com = this.comMap.remove(id);
            if (com == null)
                return;
            com.destroyAll();
            PoolManager.Ins().push(com);
        };
        EntityBase.prototype.setCom = function (com) {
            if (this.comMap.has(com.componentId) == true)
                return;
            this.comMap.set(com.componentId, com);
        };
        EntityBase.prototype.hasCom = function (id) {
            return this.comMap.has(id);
        };
        EntityBase.prototype.OnLoopComplete = function (e) {
            this.attackLoopOK = true;
        };
        return EntityBase;
    }(UIBase));
    war.EntityBase = EntityBase;
    __reflect(EntityBase.prototype, "war.EntityBase");
})(war || (war = {}));
//# sourceMappingURL=EntityBase.js.map