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
            var entityArray = war.WarDataMgr.Ins().entityMap.values();
            var aiCount = 0;
            for (var _i = 0, entityArray_1 = entityArray; _i < entityArray_1.length; _i++) {
                var e = entityArray_1[_i];
                if (e == null)
                    continue;
                var aiCom = e.getComponent(war.Component.AI);
                if (aiCom == null)
                    continue;
                aiCount += 1;
            }
            if (aiCount >= war.WarDataMgr.Ins().MaxAiCount)
                return;
            // 当场上的ai数量少于最大数量时，会添加到舞台中
            var addCount = war.WarDataMgr.Ins().MaxAiCount - aiCount;
            var gameArea = war.WarDataMgr.Ins().warPanel.gameArea;
            for (var i = 0, len = addCount; i < len; i++) {
                var x = Math.floor(Math.random() * gameArea.width);
                var y = Math.floor(Math.random() * gameArea.height);
                var w = Math.max(Math.floor(Math.random() * 150), 50);
                war.WarUtils.CreateAI(x, y, w, w, gameArea);
            }
        };
        return AISystem;
    }(war.SystemBase));
    war.AISystem = AISystem;
    __reflect(AISystem.prototype, "war.AISystem");
})(war || (war = {}));
//# sourceMappingURL=AISystem.js.map