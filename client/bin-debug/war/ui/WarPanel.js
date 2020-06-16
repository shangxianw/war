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
    var WarPanelData = (function (_super) {
        __extends(WarPanelData, _super);
        function WarPanelData() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        WarPanelData.prototype.init = function () {
            this.resGroup = "";
            this.layer = LayerManager.Ins().Panel;
        };
        WarPanelData.prototype.destroy = function () {
            war.WarDataMgr.Ins().endWar();
            war.WarDataMgr.Ins().destroyAll();
        };
        WarPanelData.prototype.packData = function () {
            war.WarDataMgr.Ins();
            war.WarDataMgr.Ins().startWar();
        };
        return WarPanelData;
    }(ViewData));
    war.WarPanelData = WarPanelData;
    __reflect(WarPanelData.prototype, "war.WarPanelData");
    var WarPanel = (function (_super) {
        __extends(WarPanel, _super);
        function WarPanel() {
            return _super.call(this, "WarPanelSkin", WarPanelData) || this;
        }
        WarPanel.prototype.init = function () {
        };
        WarPanel.prototype.destroy = function () {
            if (this.info != null)
                this.info.destroyAll();
        };
        WarPanel.prototype.initData = function (data) {
            this.info.packData();
        };
        WarPanel.prototype.initView = function () {
            war.DrawUtils.DrawGrid(this.testGrid);
            this.initEntity();
            this.addEvent(this.entityGroup, egret.TouchEvent.TOUCH_TAP, this.OnEntityGroupTap, this);
        };
        WarPanel.prototype.OnEntityGroupTap = function (e) {
            var x = war.WarUtils.ToGridX(e.localX);
            var y = war.WarUtils.ToGridY(e.localY);
            if (war.WarUtils.CheckXYRangeValide(x, y) == false) {
                LogUtils.Error("丢卡的位置有误");
                return false;
            }
            var iptCom = PoolManager.Ins().pop(war.InputCom);
            iptCom.packHero(war.INPUT.CREATE_HERO, x, y, 26, 3, this.entityGroup, war.CAMP.WE);
            war.WarDataMgr.Ins().inputArray.push(iptCom);
        };
        // ---------------------------------------------------------------------- 初始化实体
        WarPanel.prototype.initEntity = function () {
            var iptCom = PoolManager.Ins().pop(war.InputCom);
            iptCom.packQueen(war.INPUT.CREATE_QUEEN, 7, 3, this.entityGroup, war.CAMP.WE);
            war.WarDataMgr.Ins().inputArray.push(iptCom);
            var iptCom2 = PoolManager.Ins().pop(war.InputCom);
            iptCom2.packQueen(war.INPUT.CREATE_QUEEN, 7, 12, this.entityGroup, war.CAMP.WE);
            war.WarDataMgr.Ins().inputArray.push(iptCom2);
            var iptCom3 = PoolManager.Ins().pop(war.InputCom);
            iptCom3.packQueen(war.INPUT.CREATE_QUEEN, 26, 3, this.entityGroup, war.CAMP.ENEMY);
            war.WarDataMgr.Ins().inputArray.push(iptCom3);
            var iptCom4 = PoolManager.Ins().pop(war.InputCom);
            iptCom4.packQueen(war.INPUT.CREATE_QUEEN, 26, 12, this.entityGroup, war.CAMP.ENEMY);
            war.WarDataMgr.Ins().inputArray.push(iptCom4);
            var iptCom5 = PoolManager.Ins().pop(war.InputCom);
            iptCom5.packKing(war.INPUT.CREATE_KING, 3, 7, this.entityGroup, war.CAMP.WE);
            war.WarDataMgr.Ins().inputArray.push(iptCom5);
            var iptCom6 = PoolManager.Ins().pop(war.InputCom);
            iptCom6.packKing(war.INPUT.CREATE_KING, 32, 7, this.entityGroup, war.CAMP.ENEMY);
            war.WarDataMgr.Ins().inputArray.push(iptCom6);
        };
        return WarPanel;
    }(ViewBase));
    war.WarPanel = WarPanel;
    __reflect(WarPanel.prototype, "war.WarPanel");
})(war || (war = {}));
//# sourceMappingURL=WarPanel.js.map