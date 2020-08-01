class LayerManager extends DataBase
{
	public stageMain:eui.UILayer;
	public war:eui.UILayer;
	public panel:eui.UILayer;
	protected init()
	{
		if(this.stageMain == null)
			return
		
	}

	protected destroy()
	{
		this.war = null;
		this.panel = null;
		this.stageMain = null;
	}

	public initLayer(main:eui.UILayer)
	{
		this.stageMain = main;

		this.war = new eui.UILayer();
		this.war.name = `warLayer`;
		this.stageMain.addChild(this.war);
		this.panel = new eui.UILayer();
		this.stageMain.addChild(this.panel);
		this.panel.name = `panelLayer`;
	}

	private static Instance:LayerManager;
	public static Ins()
	{
		if(LayerManager.Instance == null)
			LayerManager.Instance = new LayerManager();
		return LayerManager.Instance;
	}
}