module war
{
	export class Ka1Data extends DataBase
	{
		public kaId:number;
		protected init()
		{

		}

		protected destroy()
		{

		}

		public packData(kaId:number)
		{
			this.kaId = kaId;
			return this;
		}
	}

	export class Ka1 extends UIBase
	{
		private qualityImg:eui.Image;
		private kaIcon:eui.Image;
		private cost:eui.BitmapLabel;
		public info:Ka1Data;
		public constructor()
		{
			super("Ka1Skin");
		}

		protected init()
		{
			this.touchChildren = false;
		}

		protected destroy()
		{
			if(this.info != null)
				this.info.destroyAll();
		}

		public initData(info:Ka1Data)
		{
			if(info == null)
				return;
			this.info = info;
			this.initView();
		}

		private initView()
		{
			let cfg:IHero = ConfigManager.Ins().get(CONFIG.HERO)[this.info.kaId];
			if(cfg == null)
				return;
			this.qualityImg.source = Utils.GetQualityBg(cfg.quality);
			this.kaIcon.source = Utils.GetKaIcon(cfg.heroid);
			this.cost.text = `${cfg.cost}`;
		}
	}
}