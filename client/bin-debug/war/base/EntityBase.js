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
            _super.prototype.initAll.call(this);
            this.comMap = new Hash();
        };
        EntityBase.prototype.destroyAll = function () {
            for (var _i = 0, _a = this.comMap.values(); _i < _a.length; _i++) {
                var com = _a[_i];
                com.destroyAll();
            }
            this.comMap.destroy();
            // this.comMap = null;
            _super.prototype.destroyAll.call(this);
        };
        EntityBase.prototype.getComponent = function (comType) {
            return this.comMap.get(comType);
        };
        EntityBase.prototype.setComponent = function (com) {
            if (this.comMap.has(com.comType) == true)
                return false;
            this.comMap.set(com.comType, com);
        };
        EntityBase.prototype.removeComponent = function (comType) {
            if (this.comMap.has(comType) == false)
                return false;
            var com = this.comMap.remove(comType);
            com.destroyAll();
        };
        return EntityBase;
    }(DataBase));
    war.EntityBase = EntityBase;
    __reflect(EntityBase.prototype, "war.EntityBase");
})(war || (war = {}));
//# sourceMappingURL=EntityBase.js.map