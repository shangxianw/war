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
            var _this = _super.call(this) || this;
            _this.init();
            return _this;
        }
        EntityBase.prototype.init = function () {
            this.comMap = new Hash();
        };
        EntityBase.prototype.destroy = function () {
            for (var _i = 0, _a = this.comMap.values(); _i < _a.length; _i++) {
                var com = _a[_i];
                com.destroy();
            }
            this.comMap.destroy();
            this.comMap = null;
        };
        EntityBase.prototype.getCom = function (comType) {
            return this.comMap.get(comType);
        };
        EntityBase.prototype.setCom = function (com) {
            if (this.comMap.has(com.hasCode) == true)
                return false;
            this.comMap.set(com.hasCode, com);
        };
        EntityBase.prototype.removeCom = function (hasCode) {
            if (this.comMap.has(hasCode) == false)
                return false;
            var com = this.comMap.remove(hasCode);
            com.destroy();
        };
        return EntityBase;
    }(eui.Component));
    war.EntityBase = EntityBase;
    __reflect(EntityBase.prototype, "war.EntityBase");
})(war || (war = {}));
//# sourceMappingURL=EntityBase.js.map