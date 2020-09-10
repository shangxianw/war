var SceneType;
(function (SceneType) {
    SceneType[SceneType["None"] = 1] = "None";
    SceneType[SceneType["Home"] = 2] = "Home";
    SceneType[SceneType["War"] = 3] = "War";
    SceneType[SceneType["SelectServer"] = 4] = "SelectServer";
    SceneType[SceneType["Login"] = 5] = "Login";
})(SceneType || (SceneType = {}));
var DevelopMode;
(function (DevelopMode) {
    DevelopMode[DevelopMode["DEBUG"] = 1] = "DEBUG";
})(DevelopMode || (DevelopMode = {}));
var FrameRateType;
(function (FrameRateType) {
    FrameRateType[FrameRateType["Home"] = 30] = "Home";
    FrameRateType[FrameRateType["War"] = 60] = "War";
    FrameRateType[FrameRateType["LogicWar"] = 10] = "LogicWar";
    FrameRateType[FrameRateType["RenderWar"] = 60] = "RenderWar";
})(FrameRateType || (FrameRateType = {}));
var FrameFps;
(function (FrameFps) {
    FrameFps[FrameFps["Logic"] = 60] = "Logic";
    FrameFps[FrameFps["Render"] = 60] = "Render";
})(FrameFps || (FrameFps = {}));
//# sourceMappingURL=Const.js.map