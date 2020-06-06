module war
{
	export abstract class EntityBase extends UIBase
	{
		protected comMap:Hash<number, ComBase>;
		public mc:MovieClip;
		protected initAll()
		{
			this.comMap = new Hash<number, ComBase>();
			this.touchEnabled = false;
			this.touchChildren = false;
			let dirCom:ActionCom = PoolManager.Ins().pop(ActionCom);
			this.comMap.set(dirCom.componentId, dirCom);
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

		public removeCom(id:number)
		{
			let com:ComBase = this.comMap.remove(id);
			if(com == null)
				return;
			com.destroyAll();
			PoolManager.Ins().push(com);
		}

		public setCom(com:ComBase)
		{
			if(this.comMap.has(com.componentId) == true)
				return;
			this.comMap.set(com.componentId, com);
		}

		public hasCom(id:number)
		{
			return this.comMap.has(id);
		}
	}
}