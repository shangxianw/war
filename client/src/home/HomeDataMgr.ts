module home
{
	export class HomeDataMgr extends DataBase
	{
		public playerId:number;
		public playerName:string;
		protected init()
		{
			this.playerId = 1;
			this.playerName = "wsx";
		}

		protected destroy()
		{

		}
		private static instance:HomeDataMgr;
		public static Ins()
		{
			if(HomeDataMgr.instance == null)
				HomeDataMgr.instance = new HomeDataMgr();
			return HomeDataMgr.instance;
		}
	}
}