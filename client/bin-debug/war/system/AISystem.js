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
    /**
     * 名称：AI系统
     * 功能：负责创建各类跳板
     * 原理：将滚动区域分成一个个矩形，每次检测当前的滚动条进度，
     */
    var AISystem = (function (_super) {
        __extends(AISystem, _super);
        function AISystem() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        AISystem.prototype.init = function () {
            this.sysType = war.System.AI;
        };
        AISystem.prototype.destroy = function () {
        };
        AISystem.prototype.update = function (entity, deltaTime) {
            if (entity == null)
                return;
            // if(1)
            // 	return;
            var posCom = entity.getComponent(war.Component.Pos);
            var ctrlCom = entity.getComponent(war.Component.Ctrl);
            var renderCom = entity.getComponent(war.Component.Render);
            if (posCom == null || ctrlCom == null || renderCom == null)
                return;
            var warData = war.WarDataMgr.Ins();
            var lastLevel = warData.lastStepLevel;
            var currLevel = warData.currStepLevel;
            var space = warData.StepLevelHeight;
            if (lastLevel == null || lastLevel == currLevel)
                return;
            warData.lastStepLevel = warData.currStepLevel;
            var checkCount = warData.CheckSpaceCount;
            var bottomLine = 0;
            var topLine = 0;
            var count = 0;
            var randomStepCount = 0;
            var x, y;
            // 向上检查阶梯数
            for (var i = 0, len = checkCount; i < len; i++) {
                topLine = currLevel - space * (i + 1);
                bottomLine = currLevel - space * i;
                count = 0;
                var entityArray = DataUtils.CopyArray(war.WarDataMgr.Ins().entityMap.values());
                for (var _i = 0, entityArray_1 = entityArray; _i < entityArray_1.length; _i++) {
                    var entity2 = entityArray_1[_i];
                    if (entity2 == null)
                        continue;
                    var stepCom2 = entity2.getComponent(war.Component.Step);
                    var posCom2 = entity2.getComponent(war.Component.Pos);
                    if (stepCom2 == null || posCom2 == null)
                        continue;
                    if (posCom2.y <= bottomLine && posCom2.y > topLine)
                        count += 1;
                }
                if (count > 0)
                    continue;
                // 创建阶梯
                randomStepCount = Math.max(Math.floor(Math.random() * warData.MaxStepCount), 1);
                for (var j = 0, len2 = randomStepCount; j < len2; j++) {
                    x = Math.floor(Math.random() * warData.StageWidth);
                    y = Math.floor(bottomLine - Math.random() * space);
                    war.WarUtils.CreateStepEntity(x, y, warData.StepWidth, warData.StepHeight, renderCom.render.parent);
                }
            }
            // 向下检查阶梯数
            var remoceEntityArray = [];
            for (var i = 0, len = checkCount; i < len; i++) {
                topLine = currLevel + space * i;
                bottomLine = currLevel + space * (i + 1);
                remoceEntityArray.length = 0;
                var entityArray = DataUtils.CopyArray(war.WarDataMgr.Ins().entityMap.values());
                for (var _a = 0, entityArray_2 = entityArray; _a < entityArray_2.length; _a++) {
                    var entity2 = entityArray_2[_a];
                    if (entity2 == null)
                        continue;
                    var stepCom = entity2.getComponent(war.Component.Step);
                    var posCom2 = entity2.getComponent(war.Component.Pos);
                    if (stepCom == null || posCom2 == null)
                        continue;
                    if (posCom2.y <= bottomLine && posCom2.y > topLine)
                        remoceEntityArray.push(entity2);
                }
                // 创建阶梯
                while (remoceEntityArray.length > 0) {
                    var e = remoceEntityArray.pop();
                    war.WarDataMgr.Ins().removeEntity(e);
                }
            }
        };
        return AISystem;
    }(war.SystemBase));
    war.AISystem = AISystem;
    __reflect(AISystem.prototype, "war.AISystem");
})(war || (war = {}));
//# sourceMappingURL=AISystem.js.map