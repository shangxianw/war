module war
{
	export class WarDataMgr extends DataBase
	{	
		public StageWidth:number = 640;
		public StageHeight:number = 1280;
		public StepWidth:number = 100;
		public StepHeight:number = 30;
		public G:number = 1000;
		public MaxStepCount:number = 10;   // 一个区域最多有N个阶梯
		public CheckSpaceCount:number = 5;
		public StepLevelHeight = 300;

		public entityMap:Hash<number, EntityBase>;
		public world:World;
		public jumpSpeed:number;
		public moveXSpeed:number;
		public stepProductHeight:number;
		
		public currStepLevel:number;
		public lastStepLevel:number;
		
		public beginX:number;
		public endX:number;

		protected init()
		{
			this.jumpSpeed = -1000;
			this.moveXSpeed = 700;
			this.currStepLevel = 0;
			this.lastStepLevel = null;
			this.world = new World();
			this.entityMap = new Hash<number, EntityBase>();
		}

		protected destroy()
		{
			this.world.destroy();
			this.world = null;
			this.destroyEntityMap();
			this.entityMap = null;
		}

		public startWar()
		{
			this.beginX = 0;
			this.endX = 0;
			egret.startTick(this.update, this);
		}

		public endWar()
		{
			this.beginX = 0;
			this.endX = 0;
			egret.stopTick(this.update, this);
			this.destroyEntityMap();
		}

		public update(currTime:number = null):boolean
		{
			try
			{
				this.world.update(currTime);
				return true;
			}
			catch(e)
			{
				return false;
			}
		}

		// ---------------------------------------------------------------------- 实体
		public addEntity(entity:EntityBase)
		{
			if(this.entityMap.has(entity.hasCode) == true)
				return false;
			this.entityMap.set(entity.hasCode, entity);
		}

		public removeEntity(entity:EntityBase):EntityBase
		{
			if(this.entityMap.has(entity.hasCode) == false)
				return null;
			this.entityMap.remove(entity.hasCode);
			entity.destroyAll();
		}

		private destroyEntityMap()
		{
			for(let item of this.entityMap.values())
			{
				item.destroyAll()
			}
			this.entityMap.destroy();
		}

		public updateStepLevel(height:number=null)
		{
			let standLine = 0;
			if(height == null) // 初始化
			{
				standLine = MathUtils.CalcRoundBySpace(this.StageHeight, this.StepLevelHeight);
			}
			else
			{
				standLine = MathUtils.CalcRoundBySpace(height, this.StepLevelHeight);
			}
			this.lastStepLevel = this.currStepLevel;
			this.currStepLevel = standLine;
			this.updateMaxStepCount();
		}

		public updateMaxStepCount()
		{
			if(this.currStepLevel > -1000)
				this.MaxStepCount = 10
			else if(this.currStepLevel > -2000)
				this.MaxStepCount = 9
			else if(this.currStepLevel > -3000)
				this.MaxStepCount = 8
			else if(this.currStepLevel > -4000)
				this.MaxStepCount = 7
			else if(this.currStepLevel > -5000)
				this.MaxStepCount = 6
			else if(this.currStepLevel > -6000)
				this.MaxStepCount = 5
			else if(this.currStepLevel > -7000)
				this.MaxStepCount = 4
			else if(this.currStepLevel > -8000)
				this.MaxStepCount = 3
			else if(this.currStepLevel > -9000)
				this.MaxStepCount = 2
		}

		private static instance:WarDataMgr;
		public static Ins()
		{
			if(WarDataMgr.instance == null)
				WarDataMgr.instance = new WarDataMgr();
			return WarDataMgr.instance;
		}
	}
}