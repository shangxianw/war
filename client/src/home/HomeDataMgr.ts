module home
{
	export class HomeDataMgr extends DataBase
	{
		public playerId:number;
		public playerName:string;
		public level:number;
		public exp:number;
		protected init()
		{
			this.level = 0;
			this.exp = 0;
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

		// ---------------------------------------------------------------------- 组装前端数据
		public packDataByClient()
		{
			this.playerId = 1000001; // 希望突破百万用户~
			this.playerName = "wsx";
			this.level = 1;
			this.exp = 0;
		}
	}
}