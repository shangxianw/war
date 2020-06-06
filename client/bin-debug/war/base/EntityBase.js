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
        function EntityBase() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        EntityBase.prototype.initAll = function () {
            this.comMap = new Hash();
            this.touchEnabled = false;
            this.touchChildren = false;
            var dirCom = PoolManager.Ins().pop(war.ActionCom);
            this.comMap.set(dirCom.componentId, dirCom);
            _super.prototype.initAll.call(this);
        };
        EntityBase.prototype.destroyAll = function () {
            DataUtils.DestroyDataBaseMap(this.comMap);
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
        return EntityBase;
    }(UIBase));
    war.EntityBase = EntityBase;
    __reflect(EntityBase.prototype, "war.EntityBase");
})(war || (war = {}));
//# sourceMappingURL=EntityBase.js.map