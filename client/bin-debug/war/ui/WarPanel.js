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
            this.resGroup = [];
            this.layer = LayerManager.Ins().panel;
        };
        WarPanelData.prototype.destroy = function () {
        };
        return WarPanelData;
    }(ViewData));
    war.WarPanelData = WarPanelData;
    __reflect(WarPanelData.prototype, "war.WarPanelData");
    var WarPanel = (function (_super) {
        __extends(WarPanel, _super);
        function WarPanel() {
            var _this = _super.call(this) || this;
            _this.skinName = "WarPanelSkin";
            return _this;
        }
        WarPanel.prototype.init = function () {
        };
        WarPanel.prototype.destroy = function () {
            this.touchGroup.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.OnTouchGroupTap, this);
            this.addEntity.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.OnAddTap, this);
            this.addSpeed.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.OnAddSpeed, this);
            this.rmSpeed.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.OnRmSpeed, this);
        };
        WarPanel.prototype.open = function () {
            war.WarDataMgr.Ins().startWar();
            this.initMap();
            this.addEntity.addEventListener(egret.TouchEvent.TOUCH_TAP, this.OnAddTap, this);
            this.addSpeed.addEventListener(egret.TouchEvent.TOUCH_TAP, this.OnAddSpeed, this);
            this.rmSpeed.addEventListener(egret.TouchEvent.TOUCH_TAP, this.OnRmSpeed, this);
        };
        WarPanel.prototype.initMap = function () {
            // 初始化地图
            var map = new eui.Image();
            map.source = "map_1001_jpg";
            map.horizontalCenter = 0;
            map.verticalCenter = 0;
            map.scaleX = map.scaleY = 2;
            LayerManager.Ins().war.map.addChild(map);
            egret.Tween.get(map)
                .wait(100)
                .to({
                scaleX: 1,
                scaleY: 1
            }, 500)
                .call(function () {
                war.DrawUtils.DrawMapGrid(war.WarDataMgr.Ins().Ncols, war.WarDataMgr.Ins().Nrows);
            });
            this.touchGroup.addEventListener(egret.TouchEvent.TOUCH_TAP, this.OnTouchGroupTap, this);
        };
        WarPanel.prototype.OnTouchGroupTap = function (e) {
            war.WarFactory.CreateHero(10010, e.localX, e.localY);
        };
        WarPanel.prototype.OnAddTap = function (e) {
            // WarFactory.CreateHero(10010, e.localX, e.localY)
            var heroId = 10010;
            var entity = new war.HeroEntity();
            this.heroId = entity.hasCode;
            var posCom = new war.PosCom();
            posCom.x = 640;
            posCom.y = 360;
            entity.setComponent(posCom);
            var renderCom = new war.RenderCom();
            var render = new war.HeroRender();
            render.initData(heroId);
            render.x = posCom.x;
            render.y = posCom.y;
            renderCom.setRender(render);
            entity.setComponent(renderCom);
            war.WarDataMgr.Ins().addEntity(entity);
            LayerManager.Ins().war.body.addChild(render);
        };
        WarPanel.prototype.OnAddSpeed = function () {
            var entity = war.WarDataMgr.Ins().entityMap.get(this.heroId);
            var speedCom = new war.SpeedCom();
            speedCom.setData(0.06, 90);
            entity.setComponent(speedCom);
        };
        WarPanel.prototype.OnRmSpeed = function () {
            var entity = war.WarDataMgr.Ins().entityMap.get(this.heroId);
            entity.removeComponent(war.Component.Speed);
        };
        return WarPanel;
    }(ViewBase));
    war.WarPanel = WarPanel;
    __reflect(WarPanel.prototype, "war.WarPanel");
})(war || (war = {}));
//# sourceMappingURL=WarPanel.js.map