module war
{
	export abstract class EntityBase extends UIBase
	{
		protected comMap:Hash<number, ComBase>;
		protected initAll()
		{
			this.comMap = new Hash<number, ComBase>();
			super.initAll();
		}

		public destroyAll()
		{
			DataUtils.DestroyDataBaseMap(this.comMap);
			super.destroyAll();
		}

		public getCom(id:number)
		{
			return this.comMap.get(id);
		}
	}
}