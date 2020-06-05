module war
{
	export abstract class EntityBase extends UIBase
	{
		protected comMap:Hash<number, ComBase>;
		public mc:MovieClip;
		protected initAll()
		{
			this.comMap = new Hash<number, ComBase>();

			let dirCom:DirectionCom = PoolManager.Ins().pop(DirectionCom);
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

		public setCom(com:ComBase)
		{
			if(this.comMap.has(com.componentId) == true)
				return;
			this.comMap.set(com.componentId, com);
		}

		public setDir(dir:number)
		{
			if(this.comMap.has(COMPONENT.DIRECTION) == false)
				return;
			let dirCom:DirectionCom = this.comMap.get(COMPONENT.DIRECTION);
			dirCom.setDirection(dir);
		}

		public getDir()
		{
			if(this.comMap.has(COMPONENT.DIRECTION) == false)
				return null;
			let dirCom:DirectionCom = this.comMap.get(COMPONENT.DIRECTION);
			return dirCom.getDirection();
		}
	}
}