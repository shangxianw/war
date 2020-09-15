var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/**
 *
场景管理器
一般场景：主城、战场、选服界面
切换时先清理掉所有的面板(数据、资源)，战场的层级内容也销毁掉
修改帧率：如果在战场中，则改为60，否则是30
HomeDataMgr的数据是不用清掉的，但退出战场则需要把战场的信息清掉。
每次场景切换时，都要把必要的东西销毁得干干净净，尽量把内存降到最低，同时也可切换到空场景，以检查哪些资源没有销毁掉
多了场景管理，就相当于有了环境入口，以前不知道怎么一步步从登陆到进入战场的过程写得好看，
现在知道了，其实每一个步骤都是断开的，只不过通过重新组合把她们连在了一起，完全可以一进来就是战场
 */
var SceneManager = (function () {
    function SceneManager() {
        this.init();
    }
    SceneManager.prototype.init = function () {
        this.sceneType = SceneType.None;
    };
    SceneManager.prototype.changeScene = function (type) {
        this.sceneType = type;
        ViewManager.Ins().closeAll();
        TimerManager.Ins().removeAllTimer();
        ResManager.Ins().destroyAllGroup(); // 会把常驻资源也删掉的喂
        // war.WarDataMgr.Ins().destroy()
        if (type == SceneType.None) {
            // 用于检查内存
            return true;
        }
        if (type == SceneType.Home) {
            this.enterHome();
            return true;
        }
        else if (type == SceneType.War) {
            this.enterWar();
            return true;
        }
        else if (type == SceneType.SelectServer) {
            this.enterSelectServer();
            return true;
        }
        else if (type == SceneType.Login) {
            this.enterLogin();
            return true;
        }
        else {
            // error
            return false;
        }
    };
    // ---------------------------------------------------------------------- 进入主城
    SceneManager.prototype.enterHome = function () {
        GameData.setFrameRate(FrameRateType.Home);
        ViewManager.Ins().open(HomeLoading);
    };
    // ---------------------------------------------------------------------- 进入战场
    SceneManager.prototype.enterWar = function () {
        GameData.setFrameRate(FrameRateType.War);
        ViewManager.Ins().open(WarLoading);
    };
    // ---------------------------------------------------------------------- 进入选服
    SceneManager.prototype.enterSelectServer = function () {
        GameData.setFrameRate(FrameRateType.Home);
    };
    // ---------------------------------------------------------------------- 登录
    SceneManager.prototype.enterLogin = function () {
        GameData.setFrameRate(FrameRateType.War);
        ViewManager.Ins().open(LoginPanel);
    };
    SceneManager.prototype.destroy = function () {
        this.sceneType = SceneType.None;
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