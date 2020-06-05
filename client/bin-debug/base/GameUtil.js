var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var GameUtils = (function () {
    function GameUtils() {
    }
    Object.defineProperty(GameUtils, "StageWidth", {
        get: function () {
            return GameUtils.main.stage.stageWidth;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GameUtils, "StageHeight", {
        get: function () {
            return GameUtils.main.stage.stageHeight;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GameUtils, "ScreenWidth", {
        get: function () {
            return document.documentElement.clientWidth;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GameUtils, "ScreenHeight", {
        get: function () {
            return document.documentElement.clientHeight;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GameUtils, "Stage", {
        get: function () {
            return GameUtils.main.stage;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GameUtils, "StageCenterX", {
        get: function () {
            return this.StageWidth / 2;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GameUtils, "StageCenterY", {
        get: function () {
            return this.StageHeight / 2;
        },
        enumerable: true,
        configurable: true
    });
    return GameUtils;
}());
__reflect(GameUtils.prototype, "GameUtils");
//# sourceMappingURL=GameUtil.js.map