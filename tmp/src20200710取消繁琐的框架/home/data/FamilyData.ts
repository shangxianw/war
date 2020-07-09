module home
{
	export class FamilyData extends DataBase
	{
		public familyId:number;
		public icon:number;
		public frame:number;
		public desc:string;
		public memberMap:Hash<number, PlayerData>;
		protected init()
		{
			this.familyId = null;
			this.icon = null;
			this.frame = null;
			this.desc = null;
			this.memberMap = new Hash<number, PlayerData>();
		}

		protected destroy()
		{
			DataUtils.DestroyDataBaseMap(this.memberMap);
		}

		public packData()
		{

		}
	}
}