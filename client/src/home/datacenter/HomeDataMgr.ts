module home
{
	export class HomeDataMgr extends DataBase
	{
		public myData:PlayerData;
		public myFamily:FamilyData;

		public kaDataMgr:KaDataMgr;
		public familyDataMgr:FamilyDataMgr;
		
		private static instance:HomeDataMgr;
		public static Ins()
		{
			if(HomeDataMgr.instance == null)
				HomeDataMgr.instance = new HomeDataMgr();
			return HomeDataMgr.instance;
		}

		protected init()
		{
			this.myData = PoolManager.Ins().pop(PlayerData) as PlayerData;
			this.kaDataMgr = new KaDataMgr();
		}

		protected destroy()
		{
			this.myData.destroyAll();
			PoolManager.Ins().push(this.myData);

			this.kaDataMgr.destroyAll();
			this.kaDataMgr = null;
		}

		// ---------------------------------------------------------------------- 组装前端数据
		public packMyData()
		{
			this.myData.playerId = 1000001;
			this.myData.iconId = 1;
			this.myData.iconFrameId = 1;
			this.myData.level = 1;
			this.myData.exp = 0;
			this.myData.playerName = "wsx";
			this.myData.cups = 0;
			this.myData.teamArray = [10010, 10040, 10050, 10070, 10080, 10090, 10100, 10110];
			let lvArray = [1, 1, 1, 2, 2, 2, 3, 3];
			let index = 0;
			this.myData.kaMap = new Hash<number, KaData>();
			for(let id of this.myData.teamArray)
			{
				HomeDataMgr.Ins().kaDataMgr.addKa(id, lvArray[index]);
				index++;
			}
		}
	}
}