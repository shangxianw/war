var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var SceneManager = (function () {
    function SceneManager() {
        this.init();
    }
    SceneManager.prototype.init = function () {
    };
    SceneManager.prototype.changeScene = function (type) {
        if (type == SceneType.Home) {
            ViewManager.Ins().closeAll();
        }
        else if (type == SceneType.War) {
            ViewManager.Ins().closeAll();
            ViewManager.Ins().open(war.WarPanel);
        }
    };
    SceneManager.prototype.destroy = function () {
    };
    SceneManager.Ins = function () {
        if (SceneManager.Instance == null)
            SceneManager.Instance = new SceneManager();
        return SceneManager.Instance;
    };
    return SceneManager;
}());
__reflect(SceneManager.prototype, "SceneManager");
//# sourceMappingURL=SceneManager.js.map