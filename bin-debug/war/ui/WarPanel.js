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
        };
        WarPanelData.prototype.destroy = function () {
        };
        return WarPanelData;
    }(DataBase));
    war.WarPanelData = WarPanelData;
    __reflect(WarPanelData.prototype, "war.WarPanelData");
    var WarPanel = (function (_super) {
        __extends(WarPanel, _super);
        function WarPanel() {
            return _super.call(this, "WarPanelSkin") || this;
        }
        WarPanel.prototype.init = function () {
            this.PanelId = ViewIdConst.WarPanel;
            this.Layer = LayerManager.Ins().War;
        };
        WarPanel.prototype.destroy = function () {
            this.testGrid.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.OnGridTap, this);
        };
        WarPanel.prototype.initData = function (info) {
            this.drawGrid();
        };
        WarPanel.prototype.drawGrid = function () {
            this.gridShape = new egret.Shape();
            this.gridShape.graphics.lineStyle(1, 0xff0000);
            var space = 40;
            var rows = 13;
            var cols = 20;
            this.gridShape.x = 100;
            this.gridShape.y = 240;
            for (var i = 0, len = rows; i < len; i++) {
                for (var j = 0, len2 = cols; j < len2; j++) {
                    this.gridShape.graphics.drawRect(space * i, space * j, space, space);
                }
            }
            this.gridShape.graphics.endFill();
            this.addChild(this.gridShape);
            this.testGrid.addEventListener(egret.TouchEvent.TOUCH_TAP, this.OnGridTap, this);
        };
        WarPanel.prototype.OnGridTap = function (e) {
            var w = this.testGrid.width;
            var h = this.testGrid.height;
            var space = 40;
            var x = Math.floor(e.localX / space);
            var y = Math.floor(e.localY / space);
            if (this.tapShape == null) {
                this.tapShape = new egret.Shape();
                this.tapShape.x = 100;
                this.tapShape.y = 240;
                this.addChild(this.tapShape);
            }
            this.tapShape.graphics.clear();
            this.tapShape.graphics.beginFill(0xff0000);
            var path = war.WarDataMgr.Ins().findPath([0, 0], [x, y]);
            for (var _i = 0, path_1 = path; _i < path_1.length; _i++) {
                var node = path_1[_i];
                this.tapShape.graphics.drawRect(space * node.x, space * node.y, space, space);
            }
            // console.log(x, y)
            this.tapShape.graphics.endFill();
            console.log(path);
            // 创建英雄
            var hero = PoolManager.Ins().pop(war.HeroEntity);
            hero.x = 100 + space * x;
            hero.y = 240 + space * y;
            this.addChild(hero);
        };
        return WarPanel;
    }(ViewBase));
    war.WarPanel = WarPanel;
    __reflect(WarPanel.prototype, "war.WarPanel");
})(war || (war = {}));
//# sourceMappingURL=WarPanel.js.map