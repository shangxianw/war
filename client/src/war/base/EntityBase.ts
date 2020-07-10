module war
{
	export abstract class EntityBase extends DataBase
	{
		public hasCode:number;
		private comMap:Hash<number, ComBase>

		public initAll()
		{
			this.comMap = new Hash<number, ComBase>();
			this.initAll()
		}

		public destroyAll()
		{
			for(let com of this.comMap.values())
			{
				com.destroyAll()
			}
			this.comMap.destroy();
			this.comMap = null;
			super.destroyAll();
		}

		public getCom(comType:number)
		{
			return this.comMap.get(comType);
		}

		public setCom(com:ComBase)
		{
			if(this.comMap.has(com.hasCode) == true)
				return false;
			this.comMap.set(com.hasCode, com);
		}

		public removeCom(hasCode:number)
		{
			if(this.comMap.has(hasCode) == false)
				return false;
			let com:ComBase = this.comMap.remove(hasCode)
			com.destroyAll();
		}
	}
}