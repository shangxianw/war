class LayerManager
{
	public War:eui.UILayer;
	public Main:eui.UILayer;
	public Panel:eui.UILayer;
	public Menu:eui.UILayer;
	public Tips:eui.UILayer;
	public constructor()
	{
		this.init();
	}

	public init()
	{
		let Main = GameUtils.main;
		if(Main == null)
			return LogUtils.Warn(`no Main`);
		this.War = new eui.UILayer();
		this.War.name = "War";
		Main.addChild(this.War);

		this.Main = new eui.UILayer();
		this.Main.name = "Main";
		Main.addChild(this.Main);

		this.Panel = new eui.UILayer();
		this.Panel.name = "Panel";
		Main.addChild(this.Panel);

		this.Menu = new eui.UILayer();
		this.Menu.name = "Menu";
		Main.addChild(this.Menu);

		this.Tips = new eui.UILayer();
		this.Tips.name = "Tips";
		Main.addChild(this.Tips);
	}

	public destroy()
	{

	}

	private static Instance:LayerManager;
	public static Ins()
	{
		if(LayerManager.Instance == null)
			LayerManager.Instance = new LayerManager();
		return LayerManager.Instance;
	}
}