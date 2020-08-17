class WarLayer extends eui.UILayer
{
	public map:eui.UILayer;		// 地图层
	public body:eui.UILayer;	// 实体层，如角色，塔，mpc之类
	public effect:eui.UILayer;	// 效果层，如技能特效，炮弹，弓箭

	public constructor()
	{
		super();
	}

	protected destroy()
	{
		this.map = null;
		this.body = null;
		this.effect = null;
	}

	public initLayer()
	{
		this.map = new eui.UILayer();
		this.map.name = `map`;
		this.map.touchEnabled = false
		this.addChild(this.map);

		this.body = new eui.UILayer();
		this.body.name = `body`;
		this.body.touchEnabled = false
		this.addChild(this.body);

		this.effect = new eui.UILayer();
		this.effect.name = `effect`;
		this.effect.touchEnabled = false
		this.addChild(this.effect);
	}
}