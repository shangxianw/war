class HeroInfoPanel extends UIBase
{
	private bigModel:eui.Image;
	private tit1:eui.Label; // 阵营标题
	private tit2:eui.Label; // 品质标题
	private img1:eui.Image; // 阵营标题底
	private img2:eui.Image;	// 品质标题底
	private camp:eui.Label;
	private quality:eui.Label;
	private desc:eui.Label;
	private tipGroup:eui.Group;
	private title:eui.Label;
	private heroka:HeroKa;
	private attrGroup:eui.Group;
	private addExp:eui.BitmapLabel;
	private upgradeBtn:WButton;

	public init()
	{
		this.skinName = "HeroInfoPanelSkin"
	}

	public initData()
	{
	}

	public initView()
	{
		this.addMsgListener("hero_upgrade", ()=>{
			let info = HomeDataMgr.Ins().heroDataMgr.heroMap.get(10010)
			this.title.text = info.cfg.name;
			this.desc.text = info.cfg.desc
			this.heroka.initData()
		}, this)
			this.addEvent(this.upgradeBtn, egret.TouchEvent.TOUCH_TAP, this.OnUpgrade, this)

	}

	private OnUpgrade(e:egret.TouchEvent)
	{
		MessageManager.Ins().update("hero_upgrade")
	}

	public destroy()
	{
		this.heroka.destroy();
	}
}