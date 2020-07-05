module war
{
	export class WarPanelData extends ViewData
	{
		public myKaArray:number[];
		public enemyKaArray:number[];
		public myCurrStep:number;
		public lastTime:number = 0;
		public currEnergy:number = 0;
		public speed:number = 2;

		public kaX:number[] = [396, 556, 718, 880];
		public kaY = 632;
		public anchorOffsetX:number = 106;
		public anchorOffsetY:number = 68;
		public scale:number = 0.74;
		public initX:number = 198;
		public initY:number = 656;
		public initScale = 0.6;
		public shiftY:number = -10;

		public currKa:Ka1;
		public createKa:EntityBase;

		protected init()
		{
			this.resGroup = [];
			this.layer = LayerManager.Ins().War;
		}

		protected destroy()
		{
			WarDataMgr.Ins().endWar();
			WarDataMgr.Ins().destroyAll();
		}

		public packData()
		{
			WarDataMgr.Ins();
			WarDataMgr.Ins().startWar();
			this.myCurrStep = 0;
			this.myKaArray = [10010, 10040, 10050, 10070, 10080, 10090, 10100, 10110];
			this.enemyKaArray = [10010, 10040, 10050, 10070, 10080, 10090, 10100, 10110];
		}

		public getMyNextKa()
		{
			this.myCurrStep++;
			if(this.myCurrStep >= this.myKaArray.length)
				this.myCurrStep = 0;
			return this.myKaArray[this.myCurrStep];
		}

		public comsumeKa(kaId:number)
		{
			let cfg:IHero = ConfigManager.Ins().get(CONFIG.HERO)[kaId];
			if(cfg == null)
				return;
			this.currEnergy -= cfg.cost;
		}
	}

	export class WarPanel extends ViewBase
	{
		private entityInfoGroup:eui.Group;
		private testGrid:eui.Group;
		private drawGroup:eui.Group;
		private entityGroup:eui.Group;
		private kaGroup:eui.Group;
		private mapImg:eui.Image;
		private costBar:CostBar;
		private optionGroup:eui.Group;
		private preKa:Ka1;

		public info:WarPanelData;
		public constructor()
		{
			super("WarPanelSkin", WarPanelData);
		}

		protected init()
		{
			
		}

		protected destroy()
		{
			if(this.info != null)
				this.info.destroyAll();
		}

		public initData(data:any)
		{
			this.info.packData();
		}

		public initView()
		{
			DrawUtils.DrawGrid(this.testGrid);
			this.initKa();
			this.initTower();
			this.initQueen();
			this.mapImg.source = Utils.GetMap(1001);
			
			let barData = new CostBarData();
			barData.packData(this.info.speed);
			this.costBar.initData(barData);
			this.addEvent(this, egret.Event.ENTER_FRAME, this.ShowEnergy, this)
		}

		// ---------------------------------------------------------------------- 能量充盈
		private ShowEnergy()
		{
			let currTime = egret.getTimer();
			let deltaTime = (currTime - this.info.lastTime)/1000;
			this.info.lastTime = currTime;

			this.costBar.OnUpdate();

			this.info.currEnergy +=  (this.info.speed * deltaTime)/10;
			this.info.currEnergy = Math.min(10, this.info.currEnergy);
			this.preKa.info.refreshCost(this.info.currEnergy)
			for(let i=0, len=this.kaGroup.numChildren; i<len; i++)
			{
				let ka = this.kaGroup.getChildAt(i) as Ka1;
				ka.info.refreshCost(this.info.currEnergy)
			}
		}

		// ---------------------------------------------------------------------- 初始化卡牌
		private initKa()
		{
			let kaId = this.info.getMyNextKa();
			let kaData = PoolManager.Ins().pop(Ka1Data) as Ka1Data;
			kaData.packData(kaId, this.preKa.x, this.preKa.y, 0);
			this.preKa.initData(kaData);

			let kaArray = this.info.myKaArray.slice(0, 4);
			for(let i=0, len=4; i<len; i++)
			{
				let kaId = this.info.getMyNextKa();
				let ka = PoolManager.Ins().pop(Ka1) as Ka1;
				let kaData = PoolManager.Ins().pop(Ka1Data) as Ka1Data;
				kaData.packData(kaId, this.info.kaX[i], this.info.kaY, 0);
				ka.initData(kaData);
				ka.x = this.info.initX;
				ka.y = this.info.initY;
				ka.scaleX = ka.scaleY = this.info.initScale;
				ka.anchorOffsetX = this.info.anchorOffsetX;
				ka.anchorOffsetY = this.info.anchorOffsetY;
				this.kaGroup.addChild(ka);
				this.addEvent(ka, egret.TouchEvent.TOUCH_BEGIN, this.OnKaTouchBegin ,this);
			}

			setTimeout(()=>{
				this.showInitKaTween();
			}, 500);
		}

		// ---------------------------------------------------------------------- 初始化卡牌动画		
		private showInitKaTween()
		{
			for(let i=0, len=4; i<len; i++)
			{
				let ka = this.kaGroup.getChildAt(i) as Ka1;
				egret.Tween.removeTweens(ka);
				egret.Tween.get(ka)
				.to({
					x: this.info.kaX[i],
					y: this.info.kaY,
					scaleX: this.info.scale,
					scaleY: this.info.scale
				}, 250*i)
			}
		}

		// ---------------------------------------------------------------------- 拖卡
		private OnKaTouchBegin(e:egret.TouchEvent)
		{
			let ka:Ka1 = e.target;
			let kaIndex:number = this.kaGroup.getChildIndex(ka);
			if(kaIndex < 0)
				return;
			this.kaGroup.setChildIndex(ka, 777);
			ka.y += this.info.shiftY;
			this.info.currKa = ka;
			this.addEvent(ka, egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, this.OnKaTouchOutside, this);
			this.addEvent(ka, egret.TouchEvent.TOUCH_END, this.OnKaTouchEnd, this);
			this.addEvent(ka, egret.TouchEvent.TOUCH_MOVE, this.OnKaTouchMove, this);
		}

		private OnKaTouchOutside(e:egret.TouchEvent)
		{
			this.info.currKa.y -= this.info.shiftY;
			this.info.currKa.alpha = 1;
			this.removeEvent(this.info.currKa, egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, this.OnKaTouchOutside, this);
			this.removeEvent(this.info.currKa, egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, this.OnKaTouchEnd, this);
			this.removeEvent(this.info.currKa, egret.TouchEvent.TOUCH_MOVE, this.OnKaTouchMove, this);
		}

		private OnKaTouchEnd(e:egret.TouchEvent)
		{
			let kaIndex:number = this.kaGroup.getChildIndex(this.info.currKa);
			if(kaIndex >= 0)
			{
				this.info.currKa.alpha = 1;
				this.addToEntityGroup();
			}
			this.removeEvent(this.info.currKa, egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, this.OnKaTouchOutside, this);
			this.removeEvent(this.info.currKa, egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, this.OnKaTouchEnd, this);
			this.removeEvent(this.info.currKa, egret.TouchEvent.TOUCH_MOVE, this.OnKaTouchMove, this);
		}

		private OnKaTouchMove(e:egret.TouchEvent)
		{
			this.info.currKa.x = e.stageX;
			this.info.currKa.y = e.stageY;
			this.info.currKa.alpha = 0;
			DrawUtils.DrawActiveCeil(e.stageX, e.stageY, this.drawGroup);

			if(this.info.createKa == null)
			{
				this.info.createKa = this.createKa(this.info.currKa.info.kaId, e.stageX, e.stageY);
				this.optionGroup.addChild(this.info.createKa);
			}
			
			let xy = WarUtils.GetRealXY(e.stageX, e.stageY);

			this.info.createKa.x = xy[0];
			this.info.createKa.y = xy[1];
		}

		// ---------------------------------------------------------------------- 创建英雄
		private createKa(kaId:number, x:number, y:number)
		{
			let hero:HeroEntity = PoolManager.Ins().pop(HeroEntity);
			hero.x = WarUtils.ToLocalX(x);
			hero.y = WarUtils.ToLocalY(y);
			hero.mc.initData("hero_10010", "hero_10010", "stand4", -1);

			return hero;
		}

		private addToEntityGroup()
		{
			if(this.info.createKa == null)
				return;
			this.info.createKa.angle = 0;
			this.info.createKa.speed = 20;
			this.info.createKa.action = ACTION.STAND;
			this.info.createKa.dir = DIRECTION.DOWN;
			this.info.createKa.camp = CAMP.WE;
			this.info.createKa.range = 100;
			this.info.createKa.health = 1000;
			this.info.createKa.attack = 10;
			DrawUtils.DrawEntityRange(this.info.createKa);

			let pathc:PathCom = PoolManager.Ins().pop(PathCom) as PathCom;
			let x = WarUtils.ToGridX(this.info.createKa.x);
			let y = WarUtils.ToGridY(this.info.createKa.y);
			let path = WarDataMgr.Ins().findPath(x, y, 45, 12);
			pathc.setPath(path);
			this.info.createKa.setCom(pathc);
			this.info.createKa.action = ACTION.RUN;

			this.optionGroup.removeChild(this.info.createKa);
			let hero = this.info.createKa;
			this.entityGroup.addChild(hero);
			WarDataMgr.Ins().addEntity(hero);

			let preKaData = this.preKa.info;
			this.info.currKa.info.refreshKa(preKaData.kaId);
			this.preKa.info.refreshKa(this.info.getMyNextKa());

			this.info.currKa.x = this.info.initX;
			this.info.currKa.y = this.info.initY;
			this.info.currKa.scaleX = this.info.currKa.scaleY = this.info.initScale;
			egret.Tween.removeTweens(this.info.currKa);
			egret.Tween.get(this.info.currKa)
			.to({
				x: this.info.currKa.info.kaX,
				y: this.info.currKa.info.kaY,
				scaleX: this.info.scale,
				scaleY: this.info.scale
			}, 250)

			this.info.comsumeKa(this.info.currKa.info.kaId);
			this.info.createKa = null;

			// 血量条
			let entityInfo = new EntityInfoView();
			entityInfo.entityId = hero.uniqueCode;
			entityInfo.x = hero.x;
			entityInfo.y = hero.y;
			entityInfo.initHealth(hero.health, hero.health);
			this.entityInfoGroup.addChild(entityInfo);
			WarDataMgr.Ins().infoMap.set(hero.uniqueCode, entityInfo);
		}

		private initTower()
		{
			let king:KingEntity = PoolManager.Ins().pop(KingEntity) as KingEntity;
			king.x = WarUtils.ToLocalX(6);
			king.y = WarUtils.ToLocalY(12);
			king.mc.initData("hero_99040", "hero_99040", "stand0");
			king.action = ACTION.STAND;
			king.dir = DIRECTION.RIGHT;
			king.camp = CAMP.WE;
			king.angle = 0;
			DrawUtils.DrawEntityCamp(king);
			king.range = 40;
			DrawUtils.DrawEntityRange(king);
			king.health = 100;

			this.entityGroup.addChild(king);
			WarDataMgr.Ins().addEntity(king);

			// 血量条
			let entityInfo = new EntityInfoView();
			entityInfo.entityId = king.uniqueCode;
			entityInfo.x = king.x;
			entityInfo.y = king.y;
			entityInfo.initHealth(king.health, king.health);
			this.entityInfoGroup.addChild(entityInfo);
			WarDataMgr.Ins().infoMap.set(king.uniqueCode, entityInfo);

			// ---------------------------------------------------------------------------
			let king2:KingEntity = PoolManager.Ins().pop(KingEntity) as KingEntity;
			king2.x = WarUtils.ToLocalX(46);
			king2.y = WarUtils.ToLocalY(12);
			king2.mc.initData("hero_99020", "hero_99020","stand2");
			king2.mc.scaleX = -1;
			king2.action = ACTION.STAND;
			king2.dir = DIRECTION.LEFT;
			king2.angle = 180;
			king2.camp = CAMP.ENEMY;
			DrawUtils.DrawEntityCamp(king2);
			king2.range = 240;
			king2.health = 100;
			DrawUtils.DrawEntityRange(king2);

			this.entityGroup.addChild(king2);
			WarDataMgr.Ins().addEntity(king2);

			// 血量条
			entityInfo = new EntityInfoView();
			entityInfo.entityId = king2.uniqueCode;
			entityInfo.x = king2.x;
			entityInfo.y = king2.y;
			entityInfo.initHealth(king.health, king.health);
			this.entityInfoGroup.addChild(entityInfo);
			WarDataMgr.Ins().infoMap.set(king2.uniqueCode, entityInfo);
		}

		private initQueen()
		{
			let queen:QueenEntity = PoolManager.Ins().pop(QueenEntity) as QueenEntity;
			queen.x = WarUtils.ToLocalX(12);
			queen.y = WarUtils.ToLocalY(4);
			queen.action = ACTION.STAND;
			queen.dir = DIRECTION.RIGHT;
			queen.mc.initData("hero_19020", "hero_19020","stand");
			queen.mc.scaleX = -1;
			queen.angle = 0;
			queen.camp = CAMP.WE;
			DrawUtils.DrawEntityCamp(queen);
			queen.range = 40;
			queen.health = 100;
			DrawUtils.DrawEntityRange(queen);

			this.entityGroup.addChild(queen);
			WarDataMgr.Ins().addEntity(queen);

			// 血量条
			let entityInfo = new EntityInfoView();
			entityInfo.entityId = queen.uniqueCode;
			entityInfo.x = queen.x;
			entityInfo.y = queen.y;
			entityInfo.initHealth(queen.health, queen.health);
			this.entityInfoGroup.addChild(entityInfo);
			WarDataMgr.Ins().infoMap.set(queen.uniqueCode, entityInfo);

			// ---------------------------------------------------------------------------
			queen = PoolManager.Ins().pop(QueenEntity) as QueenEntity;
			queen.x = WarUtils.ToLocalX(12);
			queen.y = WarUtils.ToLocalY(18);
			queen.action = ACTION.STAND;
			queen.dir = DIRECTION.RIGHT;
			queen.mc.initData("hero_19020", "hero_19020","stand");
			queen.mc.scaleX = -1;
			queen.angle = 0;
			queen.camp = CAMP.WE;
			DrawUtils.DrawEntityCamp(queen);
			queen.range = 40;
			queen.health = 100;
			DrawUtils.DrawEntityRange(queen);

			this.entityGroup.addChild(queen);
			WarDataMgr.Ins().addEntity(queen);

			// 血量条
			entityInfo = new EntityInfoView();
			entityInfo.entityId = queen.uniqueCode;
			entityInfo.x = queen.x;
			entityInfo.y = queen.y;
			entityInfo.initHealth(queen.health, queen.health);
			this.entityInfoGroup.addChild(entityInfo);
			WarDataMgr.Ins().infoMap.set(queen.uniqueCode, entityInfo);

			// --------------------------------------------------------------------------- ENEMY
			queen = PoolManager.Ins().pop(QueenEntity) as QueenEntity;
			queen.x = WarUtils.ToLocalX(41);
			queen.y = WarUtils.ToLocalY(4);
			queen.action = ACTION.STAND;
			queen.dir = DIRECTION.LEFT;
			queen.mc.initData("hero_19021", "hero_19021","stand");
			queen.angle = 180;
			queen.camp = CAMP.ENEMY;
			DrawUtils.DrawEntityCamp(queen);
			queen.range = 40;
			queen.health = 100;
			DrawUtils.DrawEntityRange(queen);

			this.entityGroup.addChild(queen);
			WarDataMgr.Ins().addEntity(queen);

			// 血量条
			entityInfo = new EntityInfoView();
			entityInfo.entityId = queen.uniqueCode;
			entityInfo.x = queen.x;
			entityInfo.y = queen.y;
			entityInfo.initHealth(queen.health, queen.health);
			this.entityInfoGroup.addChild(entityInfo);
			WarDataMgr.Ins().infoMap.set(queen.uniqueCode, entityInfo);

			// ---------------------------------------------------------------------------
			queen = PoolManager.Ins().pop(QueenEntity) as QueenEntity;
			queen.x = WarUtils.ToLocalX(41);
			queen.y = WarUtils.ToLocalY(18);
			queen.action = ACTION.STAND;
			queen.dir = DIRECTION.LEFT;
			queen.mc.initData("hero_19021", "hero_19021","stand");
			queen.angle = 180;
			queen.camp = CAMP.ENEMY;
			DrawUtils.DrawEntityCamp(queen);
			queen.range = 40;
			queen.health = 100;
			DrawUtils.DrawEntityRange(queen);

			this.entityGroup.addChild(queen);
			WarDataMgr.Ins().addEntity(queen);

			// 血量条
			entityInfo = new EntityInfoView();
			entityInfo.entityId = queen.uniqueCode;
			entityInfo.x = queen.x;
			entityInfo.y = queen.y;
			entityInfo.initHealth(queen.health, queen.health);
			this.entityInfoGroup.addChild(entityInfo);
			WarDataMgr.Ins().infoMap.set(queen.uniqueCode, entityInfo);
		}
	}
}