class SceneManager
{
	public constructor()
	{
		this.init();
	}

	public init()
	{
		
	}

	public changeScene(type:number)
	{
		if(type == SceneType.Home)
		{
			ViewManager.Ins().closeAll()
		}
		else if(type == SceneType.War)
		{
			ViewManager.Ins().closeAll()
			ViewManager.Ins().open(war.WarPanel)
		}
	}

	public destroy()
	{

	}

	private static Instance:SceneManager;
	public static Ins()
	{
		if(SceneManager.Instance == null)
			SceneManager.Instance = new SceneManager();
		return SceneManager.Instance;
	}
}