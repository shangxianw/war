class LayerManager
{
	public War:eui.Component;
	public Main:eui.Component;
	public Panel:eui.Component;
	public Menu:eui.Component;
	public Tips:eui.Component;
	public constructor()
	{
		this.init();
	}

	public init()
	{
		let Main = GameUtils.main;
		if(Main == null)
			return LogUtils.Warn(`no Main`);
		this.War = new eui.Component();
		this.War.name = "War";
		Main.addChild(this.War);

		this.Main = new eui.Component();
		this.Main.name = "Main";
		Main.addChild(this.Main);

		this.Panel = new eui.Component();
		this.Panel.name = "Panel";
		Main.addChild(this.Panel);

		this.Menu = new eui.Component();
		this.Menu.name = "Menu";
		Main.addChild(this.Menu);

		this.Tips = new eui.Component();
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