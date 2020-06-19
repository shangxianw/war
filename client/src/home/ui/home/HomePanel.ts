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
			let teamArray = HomeDataMgr.Ins().myData.teamArray;
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
		private kaBtn:WButton;
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
		}

		public initData(data:any)
		{
			this.info.packData();
		}

		public initView()
		{
			this.initKa()

			let homeData = HomeDataMgr.Ins();
			this.cups.label = String(homeData.myData.cups);
			this.playerName.text = homeData.myData.playerName;
			this.addEvent(this.fightBtn, egret.TouchEvent.TOUCH_TAP, this.OnFightTap, this);
			this.addEvent(this.kaBtn, egret.TouchEvent.TOUCH_TAP, this.OnKaTap, this);
		}

		private initKa()
		{
			for(let i=0, len=this.info.kaDataArray.length; i<len; i++)
			{
				let ka = neww(HeroKa) as HeroKa;
				ka.data = this.info.kaDataArray[i];
				ka.x = 14 + 226 * (i%2);			// 等间距14
				ka.y = 0 + 141 * Math.floor(i/2);	// 等间距 高568 5个间隙 item高137，共137*4= 548，余568-548=20，间距为22/5=4
				this.kaGroup.addChild(ka);
			}
		}

		private OnFightTap()
		{
			ViewManager.Ins().close(this);
			ViewManager.Ins().open(war.WarMatchPanel);
		}

		private OnKaTap()
		{
			ViewManager.Ins().open(home.KakuPanel);
		}
	}
}