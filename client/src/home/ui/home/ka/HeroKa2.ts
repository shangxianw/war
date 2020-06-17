module home
{
	export class HeroKa2Data extends ViewData
	{
		public heroId:number;
		public heroKaData:HeroKaData;
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
				return null;
			this.heroId = kaId;
			this.heroKaData = PoolManager.Ins().pop(HeroKaData) as HeroKaData;
			this.heroKaData.packData(kaId);
			return this;
		}
	}

	export class HeroKa2 extends UIBase
	{
		private costLb:eui.BitmapLabel;
		private typeBg:eui.Image;
		private kaImg:eui.Image;
		private heroKa:HeroKa;

		public info:HeroKa2Data;
		public constructor()
		{
			super();
			this.skinName = "HeroKa2Skin";
		}

		protected init()
		{

		}

		protected destroy()
		{
			if(this.info != null)
				this.info.destroyAll();
		}

		public packData(data:HeroKa2Data)
		{
			if(data == null)
				return;
			this.info = data;

			this.heroKa.data = this.info.heroKaData;
		}
	}
}
