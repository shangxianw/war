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
class SceneManager
{
	public sceneType:number;
	public constructor()
	{
		this.init();
	}

	public init()
	{
		this.sceneType = SceneType.None
	}

	public changeScene(type:number):boolean
	{
		this.sceneType = type;
		ViewManager.Ins().closeAll()
		TimerManager.Ins().removeAllTimer()
		ResManager.Ins().destroyAllGroup() // 会把常驻资源也删掉的喂
		// war.WarDataMgr.Ins().destroy()
		if(type == SceneType.None)
		{
			// 用于检查内存
			return true
		}
		if(type == SceneType.Home)
		{
			this.enterHome()
			return true
		}
		else if(type == SceneType.War)
		{
			this.enterWar()
			return true
		}
		else if(type == SceneType.SelectServer)
		{
			this.enterSelectServer()
			return true
		}
		else if(type == SceneType.Login)
		{
			this.enterLogin()
			return true
		}
		else
		{
			// error
			return false
		}
	}

	// ---------------------------------------------------------------------- 进入主城
	private enterHome()
	{
		GameData.setFrameRate(FrameRateType.Home)
		ViewManager.Ins().open(HomeLoading)
	}

	// ---------------------------------------------------------------------- 进入战场
	private enterWar()
	{
		GameData.setFrameRate(FrameRateType.War)
		ViewManager.Ins().open(WarLoading)
	}

	// ---------------------------------------------------------------------- 进入选服
	private enterSelectServer()
	{
		GameData.setFrameRate(FrameRateType.Home)
	}

	// ---------------------------------------------------------------------- 登录
	private enterLogin()
	{
		GameData.setFrameRate(FrameRateType.War)
		ViewManager.Ins().open(LoginPanel)
	}

	public destroy()
	{
		this.sceneType = SceneType.None
	}

	private static Instance:SceneManager;
	public static Ins()
	{
		if(SceneManager.Instance == null)
			SceneManager.Instance = new SceneManager();
		return SceneManager.Instance;
	}
}