module war
{
	export abstract class EntityBase extends eui.Component
	{
		public hasCode:number;
		private comMap:Hash<number, ComBase>
		public constructor()
		{
			super();
			this.init()
		}

		public init()
		{
			this.comMap = new Hash<number, ComBase>();
		}

		public destroy()
		{
			for(let com of this.comMap.values())
			{
				com.destroy()
			}
			this.comMap.destroy();
			this.comMap = null;
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
			com.destroy();
		}
	}
}