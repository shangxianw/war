module home
{
	export class KakuPanelData extends ViewData
	{
		protected init()
		{
			this.resGroup = "";
			this.layer = LayerManager.Ins().Panel;
		}

		protected destroy()
		{
			
		}

		public packData()
		{
			
		}
	}

	export class KakuPanel extends ViewBase
	{
		private heroGroup:eui.Group;

		public info:KakuPanelData;
		public constructor()
		{
			super("KakuPanelSkin", KakuPanelData);
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
			let heroIdArry = HomeDataMgr.Ins().kaDataMgr.kaMap.keys();
			let kaData:HeroKa2Data;
			let ka:HeroKa2;
			let index = 0;
			for(let heroId of heroIdArry)
			{
				kaData = PoolManager.Ins().pop(HeroKa2Data) as HeroKa2Data;
				kaData.packData(heroId);

				ka = PoolManager.Ins().pop(HeroKa2) as HeroKa2;
				ka.packData(kaData);
				// item宽190，面板宽711，item总宽190*3 = 570，剩余间隙总和711-570 = 141，一个间隙为 141/4=35
				ka.x = 225 * (index%3);
				ka.y = 143 * Math.floor((index/3));
				this.heroGroup.addChild(ka);
				
				index++;
			}
		}
	}
}