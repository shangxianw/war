module war
{
	export abstract class EntityBase extends DataBase
	{
		public entityType:number;
		public comMap:Hash<number, ComBase>

		public initAll()
		{
			super.initAll()
			this.comMap = new Hash<number, ComBase>();
		}

		public destroyAll()
		{
			for(let com of this.comMap.values())
			{
				com.destroyAll()
			}
			this.comMap.destroy();
			// this.comMap = null;
			super.destroyAll();
		}

		public getComponent(comType:number)
		{
			return this.comMap.get(comType);
		}

		public setComponent(com:ComBase)
		{
			if(this.comMap.has(com.comType) == true)
				return false;
			this.comMap.set(com.comType, com);
		}

		public removeComponent(comType:number)
		{
			if(this.comMap.has(comType) == false)
				return false;
			let com:ComBase = this.comMap.remove(comType)
			com.destroyAll();
		}
	}
}