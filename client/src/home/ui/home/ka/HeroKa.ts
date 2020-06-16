
module home
{
	export class HeroKaData extends ViewData
	{
		public kaId:number;
		public cost:number;
		public quality:number;
		protected init()
		{
			this.resGroup = "";
			this.layer = LayerManager.Ins().Panel;
		}

		protected destroy()
		{
			
		}

		public packData(kaId:number)
		{
			let hero = HomeDataMgr.Ins().kaDataMgr.getKa(kaId);
			if(hero == null)
				return;
			let cfg:IHero = hero.cfg;
			this.kaId = kaId;
			this.cost = cfg.cost;
			this.quality = cfg.quality;
		}
	}

	export class HeroKa extends UIBase
	{
		private costLb:eui.BitmapLabel;
		private typeBg:eui.Image;
		private kaImg:eui.Image;

		public info:HeroKaData;
		public constructor()
		{
			super();
			this.skinName = "HeroKaSkin";
		}

		protected init()
		{

		}

		protected destroy()
		{
			if(this.info != null)
				this.info.destroyAll();
		}

		public packData(data:HeroKaData)
		{
			if(data == null)
				return;
			this.info = data;
			
			this.costLb.text = String(this.info.cost);
			this.typeBg.source = Utils.GetQualityBg(this.info.quality);
			this.kaImg.source = Utils.GetKaIcon(this.info.kaId);
		}
	}
}
