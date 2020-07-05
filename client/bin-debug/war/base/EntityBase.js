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
            this.touchEnabled = false;
            this.touchChildren = false;
            this.comMap = new Hash();
            this.speedCom = WarPool.Ins().pop(war.SpeedCom);
            this.actionCom = WarPool.Ins().pop(war.ActionCom);
            this.dirCom = WarPool.Ins().pop(war.DirCom);
            this.attackCom = WarPool.Ins().pop(war.AttackCom);
            this.campCom = WarPool.Ins().pop(war.CampCom);
            this.healthCom = WarPool.Ins().pop(war.HealthCom);
            _super.prototype.initAll.call(this);
        };
        EntityBase.prototype.destroyAll = function () {
            this.speedCom.destroyAll();
            WarPool.Ins().push(this.speedCom);
            this.speedCom = null;
            this.actionCom.destroyAll();
            WarPool.Ins().push(this.actionCom);
            this.actionCom = null;
            this.dirCom.destroyAll();
            WarPool.Ins().push(this.dirCom);
            this.dirCom = null;
            this.attackCom.destroyAll();
            WarPool.Ins().push(this.attackCom);
            this.attackCom = null;
            this.campCom.destroyAll();
            WarPool.Ins().push(this.campCom);
            this.campCom = null;
            this.healthCom.destroyAll();
            WarPool.Ins().push(this.healthCom);
            this.healthCom = null;
            DataUtils.DestroyDataBaseMap(this.comMap);
            this._mc.mc.removeEventListener(egret.Event.LOOP_COMPLETE, this.OnLoopComplete, this);
            this._mc.destroy();
            _super.prototype.destroyAll.call(this);
        };
        Object.defineProperty(EntityBase.prototype, "mc", {
            get: function () {
                if (this._mc == null) {
                    this._mc = new MovieClip();
                    this.addChildAt(this._mc, 0);
                    this._mc.mc.addEventListener(egret.Event.LOOP_COMPLETE, this.OnLoopComplete, this);
                }
                return this._mc;
            },
            enumerable: true,
            configurable: true
        });
        EntityBase.prototype.OnLoopComplete = function (e) {
            this.attackLoopOK = true;
        };
        EntityBase.prototype.getCom = function (comType) {
            return this.comMap.get(comType);
        };
        EntityBase.prototype.setCom = function (com) {
            if (this.comMap.has(com.comId) == true)
                return false;
            this.comMap.set(com.comId, com);
        };
        EntityBase.prototype.removeCom = function (comId) {
            var pathC = this.comMap.remove(comId);
            pathC.destroyAll();
            WarPool.Ins().push(pathC);
        };
        return EntityBase;
    }(UIBase));
    war.EntityBase = EntityBase;
    __reflect(EntityBase.prototype, "war.EntityBase");
})(war || (war = {}));
//# sourceMappingURL=EntityBase.js.map