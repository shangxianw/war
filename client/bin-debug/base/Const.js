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
/**
 * 货币支付类型
 */
var CostType;
(function (CostType) {
    CostType[CostType["RMB"] = 1] = "RMB";
    CostType[CostType["Gold"] = 2] = "Gold";
    CostType[CostType["Dimand"] = 3] = "Dimand";
})(CostType || (CostType = {}));
//# sourceMappingURL=Const.js.map