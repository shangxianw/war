var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var war;
(function (war) {
    var DrawUtils = (function () {
        function DrawUtils() {
        }
        DrawUtils.Destroy = function () {
        };
        // ---------------------------------------------------------------------- 绘制网格
        DrawUtils.DrawGrid = function (group) {
            if (DrawUtils.isTest == false)
                return;
            var space = war.WarDataMgr.Ins().grid.space;
            var rows = war.WarDataMgr.Ins().grid.numCols;
            var cols = war.WarDataMgr.Ins().grid.numRows;
            var starX = war.WarDataMgr.Ins().startX;
            var starY = war.WarDataMgr.Ins().startY;
            var shape = new egret.Shape();
            shape.graphics.lineStyle(1, 0x0000ff);
            if (this.cannotWalk == null) {
                this.cannotWalk = new egret.Shape();
                group.addChild(this.cannotWalk);
            }
            this.cannotWalk.graphics.clear();
            this.cannotWalk.graphics.beginFill(0x00ff00, 0.5);
            for (var i = 0, len = rows; i < len; i++) {
                for (var j = 0, len2 = cols; j < len2; j++) {
                    var x = starX + space * i;
                    var y = starY + space * j;
                    shape.graphics.drawRect(x, y, space, space);
                    var grid = war.WarDataMgr.Ins().grid.getNode(i, j);
                    if (grid.walkable == false)
                        this.cannotWalk.graphics.drawRect(x, y, space, space);
                }
            }
            shape.graphics.endFill();
            group.addChild(shape);
        };
        // ---------------------------------------------------------------------- 绘制格子的中心点
        DrawUtils.DrawNodeXY = function (group) {
            if (DrawUtils.isTest == false)
                return;
            var shape = new egret.Shape();
            shape.graphics.beginFill(1, 0x0000ff);
            var nodeArray = war.WarDataMgr.Ins().grid.nodeArray;
            for (var _i = 0, nodeArray_1 = nodeArray; _i < nodeArray_1.length; _i++) {
                var nodeRow = nodeArray_1[_i];
                for (var _a = 0, nodeRow_1 = nodeRow; _a < nodeRow_1.length; _a++) {
                    var nodeCol = nodeRow_1[_a];
                    var x = war.WarUtils.ToLocalX(nodeCol.x);
                    var y = war.WarUtils.ToLocalY(nodeCol.y);
                    shape.graphics.drawCircle(x, y, 2);
                }
            }
            shape.graphics.endFill();
            group.addChild(shape);
        };
        // ---------------------------------------------------------------------- 绘制实体所属阵营
        DrawUtils.DrawEntityCamp = function (entity) {
            if (DrawUtils.isTest == false)
                return;
            if (entity.campCom.camp == null)
                return;
            var shape = new egret.Shape();
            if (entity.campCom.camp == war.Camp.We)
                shape.graphics.beginFill(0x00ff00, 1);
            else if (entity.campCom.camp == war.Camp.Enemy)
                shape.graphics.beginFill(0xff0000, 1);
            shape.graphics.drawCircle(0, 0, 5);
            shape.graphics.endFill();
            entity.addChild(shape);
        };
        // ---------------------------------------------------------------------- 绘制实体普攻射程
        DrawUtils.DrawEntityRange = function (entity) {
            if (DrawUtils.isTest == false)
                return;
            if (entity.attackCom.range == null)
                return;
            var shape = new egret.Shape();
            shape.graphics.beginFill(0xffff00, 0.3);
            shape.graphics.lineStyle(1, 0x000000);
            shape.graphics.drawCircle(0, 0, entity.attackCom.range);
            shape.graphics.endFill();
            entity.addChildAt(shape, 0);
        };
        // ---------------------------------------------------------------------- 绘制当前拖动到的格子
        DrawUtils.DrawActiveCeil = function (localX, localY, group) {
            if (DrawUtils.isTest == false)
                return;
            if (this.activeCeil == null) {
                this.activeCeil = new egret.Shape();
                group.addChild(this.activeCeil);
            }
            var space = war.WarDataMgr.Ins().grid.space;
            var xy = war.WarUtils.GetRealXY(localX, localY);
            var realX = xy[0];
            var realY = xy[1];
            this.activeCeil.graphics.clear();
            this.activeCeil.graphics.beginFill(1, 0x00ff00);
            this.activeCeil.graphics.drawRect(realX - space / 2, realY - space / 2, space, space);
            this.activeCeil.graphics.endFill();
        };
        // 绘制实体id
        DrawUtils.DrawEntityId = function (entity) {
            if (DrawUtils.isTest == false)
                return;
            var idLb = new eui.Label();
            idLb.text = "" + entity.iii;
            idLb.stroke = 2;
            idLb.strokeColor = 0x000;
            idLb.x = -20;
            idLb.y = -50;
            entity.addChild(idLb);
        };
        DrawUtils.DrawPath = function (entity) {
            if (this.isTest == false)
                return;
            var pCom = entity.getCom(war.Component.Path);
            if (pCom == null)
                return;
            var pathShape;
            if (this.pathMap.has(entity.iii) == false) {
                pathShape = new egret.Shape();
                this.pathMap.set(entity.iii, pathShape);
                entity.parent.parent.addChild(pathShape);
            }
            pathShape = this.pathMap.get(entity.iii);
            pathShape.graphics.clear();
            pathShape.graphics.lineStyle(1, 0xff0000);
            pathShape.graphics.moveTo(entity.x, entity.y);
            var path = pCom.getLeftPath(false);
            for (var _i = 0, path_1 = path; _i < path_1.length; _i++) {
                var node = path_1[_i];
                var localX = war.WarUtils.ToLocalX(node.x);
                var localY = war.WarUtils.ToLocalX(node.y);
                pathShape.graphics.lineTo(localX, localY);
            }
            pathShape.graphics.endFill();
        };
        Object.defineProperty(DrawUtils, "pathMap", {
            get: function () {
                if (this._pathMap == null)
                    this._pathMap = new Hash();
                return this._pathMap;
            },
            enumerable: true,
            configurable: true
        });
        DrawUtils.isTest = true;
        return DrawUtils;
    }());
    war.DrawUtils = DrawUtils;
    __reflect(DrawUtils.prototype, "war.DrawUtils");
})(war || (war = {}));
//# sourceMappingURL=DrawUtils.js.map