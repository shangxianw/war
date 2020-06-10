module home
{
	export class HomeDataMgr extends DataBase
	{
		protected init()
		{
			
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