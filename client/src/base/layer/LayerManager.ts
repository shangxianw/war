class LayerManager extends DataBase
{
	public stageMain:eui.UILayer; // 最外层的Main
	
	public war:eui.UILayer;		// 战斗层
	public panel:eui.UILayer;	// 面板层
	public tips:eui.UILayer;    // 提示层，如获得，伤害等
	public init()
	{
		if(this.stageMain == null)
			return
	}

	public destroy()
	{
		super.destroy();
		this.panel = null;
		this.stageMain = null;
	}

	public initLayer(main:eui.UILayer)
	{
		this.stageMain = main;

		this.war = new eui.UILayer();
		this.war.name = `war`;
		this.war.touchEnabled = false
		this.stageMain.addChild(this.war);
		
		this.panel = new eui.UILayer();
		this.panel.name = `panel`;
		this.panel.touchEnabled = false
		this.stageMain.addChild(this.panel);

		this.tips = new eui.UILayer();
		this.tips.name = `tips`;
		this.tips.touchEnabled = false
		this.stageMain.addChild(this.tips);
	}

	private static Instance:LayerManager;
	public static Ins()
	{
		if(LayerManager.Instance == null)
			LayerManager.Instance = new LayerManager();
		return LayerManager.Instance;
	}
}