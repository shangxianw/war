module home
{
	export class KaData extends DataBase
	{
		public kaId:number;
		public level:number;
		protected init()
		{
			this.kaId = 0;
			this.level = 0;
		}

		protected destroy()
		{
			this.kaId = 0;
			this.level = 0;
		}

		public packData(kaId:number, level:number)
		{
			this.kaId = kaId;
			this.level = level;
		}

		public get cfg():IHero
		{
			let cfg = ConfigManager.Ins().get(CONFIG.HERO)[this.kaId] as IHero;
			return cfg;
		}
	}
}