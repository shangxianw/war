module war
{
	export abstract class DataBase
	{
		public hasCode:number
		public constructor()
		{
			this.initAll()
		}

		public initAll()
		{
			this.hasCode = IDManager.Ins().getNewId();
			this.init();
		}

		public destroyAll()
		{
			this.hasCode = null;
			this.destroy();
		}

		protected abstract init()
		protected abstract destroy()
	}
}