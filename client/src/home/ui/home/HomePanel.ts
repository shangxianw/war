module home
{
	export class HomePanelData extends ViewData
	{
		public kaDataArray:HeroKaData[];
		protected init()
		{
			this.resGroup = "";
			this.layer = LayerManager.Ins().Panel;
			this.kaDataArray = [];
		}

		protected destroy()
		{
			DataUtils.DestroyDataBaseArray(this.kaDataArray);
			this.kaDataArray.length = 0;
		}

		public packData()
		{
			let teamArray = HomeDataMgr.Ins().kaDataMgr.teamArray;
			for(let kaId of teamArray)
			{
				let kaDataInfo = PoolManager.Ins().pop(HeroKaData) as HeroKaData;
				kaDataInfo.packData(kaId);
				this.kaDataArray.push(kaDataInfo);
			}
		}
	}

	export class HomePanel extends ViewBase
	{
		public info:HomePanelData;
		private nextBtn:WButton;
		private kaGroup:eui.Group;
		private headIcon:HeadIcon;
		private cups:WButton;
		private playerName:eui.Label;
		private fightBtn:WGroup;
		public constructor()
		{
			super("HomePanelSkin", HomePanelData);
		}

		protected init()
		{
			
		}

		protected destroy()
		{
			if(this.info != null)
				this.info.destroyAll();
			this.headIcon.destroyAll();
		}

		public initData(data:any)
		{
			this.info.packData();
			// this.addEvent(this.nextBtn, egret.TouchEvent.TOUCH_TAP, this.OnTap, this);
		}

		public initView()
		{
			this.initKa()

			// let heroIconData = PoolManager.Ins().pop(HeadIconData) as HeadIconData;
			// this.headIcon.packData(heroIconData);

			let homeData = HomeDataMgr.Ins();
			this.cups.label = String(homeData.cups);
			this.playerName.text = homeData.playerName;
			this.addEvent(this.fightBtn, egret.TouchEvent.TOUCH_TAP, this.OnFightTap, this);
		}

		private initKa()
		{
			for(let i=0, len=this.info.kaDataArray.length; i<len; i++)
			{
				let ka = PoolManager.Ins().pop(HeroKa) as HeroKa;
				ka.data = this.info.kaDataArray[i];
				ka.x = 14 + 226 * (i%2);			// 等间距14
				ka.y = 16 + 153 * Math.floor(i/2);	// 等间距16
				this.kaGroup.addChild(ka);
			}
		}

		private OnFightTap()
		{
			ViewManager.Ins().close(this);
			ViewManager.Ins().open(war.WarMatchPanel);
		}
	}
}