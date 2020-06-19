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
			this.heroKaData.destroyAll();
			removee(this.heroKaData);
		}

		public packData(kaId:number)
		{
			let hero = HomeDataMgr.Ins().myData.kaMap.get(kaId);
			if(hero == null)
				return null;
			this.heroId = kaId;
			this.heroKaData = neww(HeroKaData);
			this.heroKaData.packData(kaId);
			return this;
		}
	}

	export class HeroKa2 extends WItemRenderBase
	{
		private heroKa:HeroKa;
		private fightBtn:WButton;
		private infoBtn:WButton;

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
			this.setState(false);
			this.heroKa.data = this.info.heroKaData;
		}

		public setState(showActive:boolean)
		{
			if(showActive == true)
			{
				this.currentState = "active"
			}
			else
			{
				this.currentState = "common";
			}
		}
	}
}
