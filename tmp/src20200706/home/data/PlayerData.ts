module home
{
	export class PlayerData extends DataBase
	{
		public playerId:number;
		public playerName:string;
		public iconId:number;
		public iconFrameId:number;
		public level:number;
		public exp:number;
		public cups:number;
		public icon:number;
		public frame:number;

		public kaMap:Hash<number, KaData>
		public teamArray:number[]; // 卡组

		protected init()
		{
			this.playerId = null;
			this.iconId = null;
			this.iconFrameId = null;
			this.level = null;
			this.exp = null;
			this.playerName = null;
			this.cups = null;
			this.teamArray = [];
			this.kaMap = new Hash<number, KaData>();
		}

		protected destroy()
		{
			DataUtils.DestroyDataBaseMap(this.kaMap);
		}
	}
}