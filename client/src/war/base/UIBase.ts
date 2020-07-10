module war
{
	export abstract class UIBase extends eui.Component
	{
		public hasCode:number
		public constructor()
		{
			super();
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