var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var war;
(function (war) {
    var DrawUtils = (function () {
        function DrawUtils() {
        }
        DrawUtils.DrawMapGrid = function (nCols, nRows) {
            if (this.isTest == false)
                return;
            var shiftX = war.WarDataMgr.Ins().MapStartX;
            var shiftY = war.WarDataMgr.Ins().MapStartY;
            var shape = new egret.Shape();
            var shape2 = new egret.Shape();
            shape.graphics.lineStyle(0.5, 0xff0000);
            shape2.graphics.beginFill(0xff0000, 0.5);
            for (var i = 0, len = nCols; i < len; i++) {
                for (var j = 0, len2 = nRows; j < len2; j++) {
                    var size = war.WarDataMgr.Ins().CeilSize;
                    var x = i * size + shiftX;
                    var y = j * size + shiftY;
                    var node = war.WarDataMgr.Ins().grid.getNode(i, j);
                    if (node.walkable == false)
                        shape2.graphics.drawRect(x, y, size, size);
                    shape.graphics.drawRect(x, y, size, size);
                }
            }
            shape.graphics.endFill();
            shape2.graphics.endFill();
            LayerManager.Ins().war.map.addChild(shape);
            LayerManager.Ins().war.map.addChild(shape2);
        };
        DrawUtils.DrawPath = function (entity) {
            if (this.isTest == false)
                return;
            var renderCom = entity.getComponent(war.Component.Render);
            var posCom = entity.getComponent(war.Component.Pos);
            var pathCom = entity.getComponent(war.Component.Path);
            if (pathCom == null || posCom == null || renderCom == null)
                return;
            if (renderCom.pathShap == null) {
                renderCom.pathShap = new egret.Shape;
                LayerManager.Ins().war.map.addChild(renderCom.pathShap);
            }
            renderCom.pathShap.graphics.clear();
            renderCom.pathShap.graphics.lineStyle(2, 0xffff00);
            renderCom.pathShap.graphics.moveTo(posCom.x, posCom.y);
            for (var _i = 0, _a = pathCom.path; _i < _a.length; _i++) {
                var node = _a[_i];
                var localX = war.WarUtils.GridX2LocalX(node.x);
                var localY = war.WarUtils.GridY2LocalY(node.y);
                renderCom.pathShap.graphics.lineTo(localX, localY);
            }
            renderCom.pathShap.graphics.endFill();
        };
        // ---------------------------------------------------------------------- 画中心点
        DrawUtils.DrawAnchorCenter = function (entity) {
            if (DrawUtils.isTest == false)
                return;
            var renderCom = entity.getComponent(war.Component.Render);
            var posCom = entity.getComponent(war.Component.Pos);
            if (renderCom == null || posCom == null)
                return;
            if (renderCom.anchorShap == null) {
                renderCom.anchorShap = new egret.Shape();
                LayerManager.Ins().war.effect.addChild(renderCom.anchorShap);
            }
            renderCom.anchorShap.graphics.clear();
            renderCom.anchorShap.graphics.beginFill(0xff0000, 1);
            // renderCom.anchorShap.graphics.lineStyle(2, 0x000000);
            renderCom.anchorShap.graphics.drawCircle(posCom.x, posCom.y, 5);
            renderCom.anchorShap.graphics.endFill();
        };
        // ---------------------------------------------------------------------- 普攻射程
        DrawUtils.DrawAttackRange = function (entity) {
            if (DrawUtils.isTest == false)
                return;
            var renderCom = entity.getComponent(war.Component.Render);
            var atkCom = entity.getComponent(war.Component.Attack);
            var actionCom = entity.getComponent(war.Component.Action);
            var posCom = entity.getComponent(war.Component.Pos);
            if (renderCom == null || atkCom == null || posCom == null || actionCom == null)
                return;
            if (renderCom.attackShap == null) {
                renderCom.attackShap = new egret.Shape();
                LayerManager.Ins().war.map.addChild(renderCom.attackShap);
            }
            renderCom.attackShap.graphics.clear();
            if (actionCom.action == war.Action.Attack)
                renderCom.attackShap.graphics.beginFill(0xffffff, 0.5);
            else
                renderCom.attackShap.graphics.beginFill(0x000000, 0.5);
            renderCom.attackShap.graphics.lineStyle(1, 0x000000);
            renderCom.attackShap.graphics.drawCircle(posCom.x, posCom.y, atkCom.range);
            renderCom.attackShap.graphics.endFill();
        };
        // ---------------------------------------------------------------------- hascode
        DrawUtils.DrawHasCode = function (entity) {
            if (DrawUtils.isTest == false)
                return;
            var renderCom = entity.getComponent(war.Component.Render);
            var posCom = entity.getComponent(war.Component.Pos);
            if (renderCom == null || posCom == null)
                return;
            if (renderCom.hasCodeLb == null) {
                renderCom.hasCodeLb = new eui.Label();
                renderCom.hasCodeLb.text = "" + entity.hasCode;
                renderCom.hasCodeLb.validateNow();
                LayerManager.Ins().war.effect.addChild(renderCom.hasCodeLb);
            }
            renderCom.hasCodeLb.x = posCom.x;
            renderCom.hasCodeLb.y = posCom.y;
        };
        DrawUtils.isTest = true;
        return DrawUtils;
    }());
    war.DrawUtils = DrawUtils;
    __reflect(DrawUtils.prototype, "war.DrawUtils");
})(war || (war = {}));
//# sourceMappingURL=DrawUtils.js.map