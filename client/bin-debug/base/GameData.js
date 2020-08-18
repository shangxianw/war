var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var GameData = (function () {
    function GameData() {
    }
    GameData.setFrameRate = function (frameRate) {
        LayerManager.Ins().stageMain.stage.frameRate = frameRate;
    };
    GameData.getFrameRate = function () {
        return LayerManager.Ins().stageMain.stage.frameRate;
    };
    GameData.DevelopMode = DevelopMode.DEBUG;
    return GameData;
}());
__reflect(GameData.prototype, "GameData");
//# sourceMappingURL=GameData.js.map