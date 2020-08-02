class LayerManager extends DataBase
{
	public stageMain:eui.UILayer; // 最外层的Main
	
	public map:eui.UILayer;		// 地图层
	public body:eui.UILayer;	// 实体层，如角色，塔，mpc之类
	public effect:eui.UILayer;	// 效果层，如技能特效，炮弹，弓箭
	public panel:eui.UILayer;	// 面板层
	public tips:eui.UILayer;    // 提示层，如获得，伤害等
	protected init()
	{
		if(this.stageMain == null)
			return
	}

	protected destroy()
	{
		this.map = null;
		this.body = null;
		this.effect = null;
		this.panel = null;
		this.stageMain = null;
	}

	public initLayer(main:eui.UILayer)
	{
		this.stageMain = main;

		this.map = new eui.UILayer();
		this.map.name = `map`;
		this.map.touchEnabled = false
		this.stageMain.addChild(this.map);

		this.body = new eui.UILayer();
		this.body.name = `body`;
		this.body.touchEnabled = false
		this.stageMain.addChild(this.body);

		this.effect = new eui.UILayer();
		this.effect.name = `effect`;
		this.effect.touchEnabled = false
		this.stageMain.addChild(this.effect);
		
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