
class LoginPanel extends ViewBase
{
	private loginBtn:eui.Button;
	private desc:eui.Label;
	public constructor()
	{
		super();
		this.skinName = "LoginPanelSkin";
		this["data"] = this.info
	}

	public init() 
	{
		
	}

	public destroy()
	{
		this.loginBtn.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.OnLoginTap, this)
	}

	public open()
	{
		this.loginBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.OnLoginTap, this)
		

	}

	private OnLoginTap(e:egret.TouchEvent)
	{
		let item:IItemConfig
		this.canCost(item.costtype, item.cost)
		
		// if(item.quality == QualityType.Common || item.quality == QualityType.Shishi)
		// ViewManager.Ins().open(HomePanel, "wsx")
		// SceneManager.Ins().changeScene(SceneType.Home)
		// ViewManager.Ins().close(home.LoginPanel)
		// ViewManager.Ins().close("home.LoginPanel")
	}

	private canCost(type:number, price:number)
	{
		let item:IItemConfig
		let cost:ICostConfig
		let player:IHero

		let has = player[cost.attrname]
		if(has < price)
			return [false, cost.falitips];
		return [true, cost.successtips]
	}
}

enum QualityType
{
	Common = 1,
	Rare = 2,
	Shishi = 3,
	Chuanqi = 4
}

enum CostType
{
	Gold = 1,
	Dimand = 2,
	Contribute = 3,
	Key = 4,
	Rmb = 5
}

interface IQualityConfig
{
	id:number;
	name:string;
	color:number;
	strolecolor:number;
}

interface ICostConfig
{
	id:number;
	name:string
	attrname:string;
	successtips:string;
	falitips:string;
}

interface IItemConfig
{
	costtype:number
	cost:number;
	quality:number;
}

interface IHero
{
	gold:number;
	dimand:number;
	key:number;
}

