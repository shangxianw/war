module war
{
	export class GravityCom extends ComBase
	{
		public g:number;
		protected init()
		{
			this.g = WarDataMgr.Ins().G;
			this.comType = Component.Gravity;
		}

		protected destroy()
		{

		}

		public setG(g:number)
		{
			this.g = g;
		}
	}
}