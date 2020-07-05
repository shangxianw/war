module war
{
	export abstract class EntityBase extends UIBase
	{
		public entityType:number;
		public attackTargets:EntityBase[];
		public camp:number;
		public action:number;
		public dir:number;
		public path:astar.Node[];
		public mc:MovieClip;
		public speed:number;
		public angle:number;
		public range:number;
		public health:number;
		public attack:number;

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
			this.comMap = new Hash<number, ComBase>();
			this.touchEnabled = false;
			this.touchChildren = false;
			this.mc = new MovieClip();
			this.addChild(this.mc);

			this.entityType = ENTITY.NONE;
			this.attackTargets = [];
			this.camp = CAMP.NONE;
			this.action = ACTION.STAND;
			this.dir = DIRECTION.DOWN;
			this.path = [];
			this.speed = 0;
			this.angle = 90;
			this.range = 0;
			this.health = 0;
			this.attack = 2;
			this.attackLoopOK = false;

			this.mc.mc.addEventListener(egret.Event.LOOP_COMPLETE, this.OnLoopComplete, this)

			super.initAll();
		}

		public destroyAll()
		{
			this.attackTargets.length = 0;
			this.mc.mc.removeEventListener(egret.Event.LOOP_COMPLETE, this.OnLoopComplete, this)
			DataUtils.DestroyDataBaseMap(this.comMap);
			this.mc.destroy();
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

		private OnLoopComplete(e:egret.Event)
		{
			this.attackLoopOK = true;
		}
	}
}