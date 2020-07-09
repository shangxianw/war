module war
{
	export class CampCom extends ComBase
	{
		public camp:number;
		protected init()
		{
			this.comId = Component.Demo;
			this.camp = Component.Camp;
		}

		protected destroy()
		{
			
		}

		public setCamp(camp:number)
		{
			this.camp = camp;
		}
	}
}