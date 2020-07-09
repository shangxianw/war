module war
{
	export abstract class EntityBase extends UIBase
	{
		public entityType:number;
		public speedCom:SpeedCom;
		public actionCom:ActionCom;
		public dirCom:DirCom;
		public attackCom:AttackCom;
		public campCom:CampCom;
		public healthCom:HealthCom;

		private _mc:MovieClip;
		public attackLoopOK:boolean;
		protected comMap:Hash<number, ComBase>;

		public constructor(skinName:string = null)
		{
			super(skinName);
			if(skinName != null)
				this.skinName = skinName;
		}

		protected initAll()
		{
			this.touchEnabled = false;
			this.touchChildren = false;

			this.comMap = new Hash<number, ComBase>();
			this.speedCom = WarPool.Ins().pop(SpeedCom) as SpeedCom;
			this.actionCom = WarPool.Ins().pop(ActionCom) as ActionCom;
			this.dirCom = WarPool.Ins().pop(DirCom) as DirCom;
			this.attackCom = WarPool.Ins().pop(AttackCom) as AttackCom;
			this.campCom = WarPool.Ins().pop(CampCom) as CampCom;
			this.healthCom = WarPool.Ins().pop(HealthCom) as HealthCom;
			super.initAll();
		}

		public destroyAll()
		{
			this.speedCom.destroyAll();
			WarPool.Ins().push(this.speedCom);
			this.speedCom = null;

			this.actionCom.destroyAll();
			WarPool.Ins().push(this.actionCom);
			this.actionCom = null;

			this.dirCom.destroyAll();
			WarPool.Ins().push(this.dirCom);
			this.dirCom = null;

			this.attackCom.destroyAll();
			WarPool.Ins().push(this.attackCom);
			this.attackCom = null;

			this.campCom.destroyAll();
			WarPool.Ins().push(this.campCom);
			this.campCom = null;

			this.healthCom.destroyAll();
			WarPool.Ins().push(this.healthCom);
			this.healthCom = null;
			DataUtils.DestroyDataBaseMap(this.comMap);

			this._mc.mc.removeEventListener(egret.Event.LOOP_COMPLETE, this.OnLoopComplete, this)
			this._mc.destroy();
			super.destroyAll();
		}

		public get mc()
		{
			if(this._mc == null)
			{
				this._mc = new MovieClip();
				this.addChildAt(this._mc, 0);
				this._mc.mc.addEventListener(egret.Event.LOOP_COMPLETE, this.OnLoopComplete, this)
			}
			return this._mc;
		}

		private OnLoopComplete(e:egret.Event)
		{
			this.attackLoopOK = true;
		}

		public getCom(comType:number)
		{
			return this.comMap.get(comType);
		}

		public setCom(com:ComBase)
		{
			if(this.comMap.has(com.comId) == true)
				return false;
			this.comMap.set(com.comId, com);
		}

		public removeCom(comId:number)
		{
			let pathC = this.comMap.remove(comId) as PathCom;
			pathC.destroyAll();
			WarPool.Ins().push(pathC);
		}
	}
}