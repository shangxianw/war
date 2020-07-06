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
    var EntityInfoView = (function (_super) {
        __extends(EntityInfoView, _super);
        function EntityInfoView() {
            return _super.call(this, "EntityInfoViewSkin") || this;
        }
        EntityInfoView.prototype.init = function () {
            this.anchorOffsetX = this.width >> 1;
            this.anchorOffsetY = this.height >> 1;
            // DrawUtils.DrawEntityId(this);
        };
        EntityInfoView.prototype.destroy = function () {
        };
        EntityInfoView.prototype.initData = function (entityId, value, max) {
            this.entityId = entityId;
            this.healthBar.minimum = 0;
            this.healthBar.value = value;
            this.healthBar.maximum = max;
            var entity = war.WarDataMgr.Ins().entityMap.get(this.entityId);
            if (entity == null) {
                LogUtils.Error("\u4E0D\u5B58\u5728\u5BF9\u5E94\u5B9E\u4F53 " + entityId);
                return false;
            }
            this.addAttrCB(entity.healthCom, "hp", this.OnHpUpdate, this);
        };
        EntityInfoView.prototype.updatePos = function () {
            var entity = war.WarDataMgr.Ins().entityMap.get(this.entityId);
            if (entity == null)
                return;
            this.healthBar.y = -entity.mc.height;
        };
        EntityInfoView.prototype.OnHpUpdate = function () {
            var entity = war.WarDataMgr.Ins().entityMap.get(this.entityId);
            this.healthBar.value = entity.healthCom.hp;
        };
        return EntityInfoView;
    }(UIBase));
    war.EntityInfoView = EntityInfoView;
    __reflect(EntityInfoView.prototype, "war.EntityInfoView");
})(war || (war = {}));
//# sourceMappingURL=EntityInfoView.js.map