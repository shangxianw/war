module war
{
	export class WarPanelData extends DataBase implements IViewData
	{
		public resGroup = [];
		public layer = LayerManager.Ins().War;
		public resGroupId:number;

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
			super("WarPanelSkin");
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
			this.preKa.info.packData(kaId, this.preKa.x, this.preKa.y, 0);

			let kaArray = this.info.myKaArray.slice(0, 4);
			for(let i=0, len=4; i<len; i++)
			{
				let kaId = this.info.getMyNextKa();
				let ka = PoolManager.Ins().pop(Ka1) as Ka1;
				ka.info.packData(kaId, this.info.kaX[i], this.info.kaY, 0);
				ka.initView();
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

		private resetKa()
		{
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
			
			let hero = WarUtils.CreateEntity(Entity.Hero, 10010, true) as HeroEntity;
			hero.x = this.info.createKa.x;
			hero.y = this.info.createKa.y;
			DrawUtils.DrawEntityRange(hero);

			let pathc:PathCom = WarPool.Ins().pop(PathCom) as PathCom;
			let x = WarUtils.ToGridX(this.info.createKa.x);
			let y = WarUtils.ToGridY(this.info.createKa.y);
			let pos = WarDataMgr.Ins().getEnemyTarget(hero);
			let path = WarDataMgr.Ins().findPath(x, y, pos[0], pos[1]);
			pathc.setPath(path);
			hero.setCom(pathc);
			
			let tmpHero = this.optionGroup.removeChild(this.info.createKa) as HeroEntity;
			tmpHero.destroyAll();
			WarPool.Ins().push(tmpHero);
			this.entityGroup.addChild(hero);
			
			let preKaData = this.preKa.info;
			this.info.currKa.info.refreshKa(preKaData.kaId);
			this.preKa.info.refreshKa(this.info.getMyNextKa());

			// 血量条
			let entityInfo = WarDataMgr.Ins().infoMap.get(hero.iii);
			if(entityInfo != null)
			{
				entityInfo.x = hero.x;
				entityInfo.y = hero.y;
				this.entityInfoGroup.addChild(entityInfo);
			}

			this.resetKa();
		}

		private initTower()
		{
			let king = WarUtils.CreateEntity(Entity.King, 99040, true) as KingEntity;
			king.x = WarUtils.ToLocalX(6);
			king.y = WarUtils.ToLocalY(12);
			DrawUtils.DrawEntityRange(king);
			this.entityGroup.addChild(king);
			// 血量条
			let entityInfo = WarDataMgr.Ins().infoMap.get(king.iii);
			if(entityInfo != null)
			{
				this.entityInfoGroup.addChild(entityInfo);
			}

			king = WarUtils.CreateEntity(Entity.King, 99040, false) as KingEntity
			king.x = WarUtils.ToLocalX(47);
			king.y = WarUtils.ToLocalY(12);
			DrawUtils.DrawEntityRange(king);
			this.entityGroup.addChild(king);
			// 血量条
			entityInfo = WarDataMgr.Ins().infoMap.get(king.iii);
			if(entityInfo != null)
			{
				this.entityInfoGroup.addChild(entityInfo);
			}
		}

		private initQueen()
		{
			let queen = WarUtils.CreateEntity(Entity.Queen, 19020, true);
			queen.x = WarUtils.ToLocalX(12);
			queen.y = WarUtils.ToLocalY(4);
			DrawUtils.DrawEntityRange(queen);
			this.entityGroup.addChild(queen);
			// 血量条
			let entityInfo = WarDataMgr.Ins().infoMap.get(queen.iii);
			if(entityInfo != null)
			{
				this.entityInfoGroup.addChild(entityInfo);
			}

			// ---------------------------------------------------------------------------
			queen = WarUtils.CreateEntity(Entity.Queen, 19020, true);
			queen.x = WarUtils.ToLocalX(12);
			queen.y = WarUtils.ToLocalY(18);
			DrawUtils.DrawEntityRange(queen);
			this.entityGroup.addChild(queen);
			// 血量条
			entityInfo = WarDataMgr.Ins().infoMap.get(queen.iii);
			if(entityInfo != null)
			{
				this.entityInfoGroup.addChild(entityInfo);
			}

			// --------------------------------------------------------------------------- ENEMY
			queen = WarUtils.CreateEntity(Entity.Queen, 19021, false);
			queen.x = WarUtils.ToLocalX(41);
			queen.y = WarUtils.ToLocalY(4);
			DrawUtils.DrawEntityRange(queen);
			this.entityGroup.addChild(queen);
			// 血量条
			entityInfo = WarDataMgr.Ins().infoMap.get(queen.iii);
			if(entityInfo != null)
			{
				this.entityInfoGroup.addChild(entityInfo);
			}

			// ---------------------------------------------------------------------------
			queen = WarUtils.CreateEntity(Entity.Queen, 19021, false);
			queen.x = WarUtils.ToLocalX(41);
			queen.y = WarUtils.ToLocalY(18);
			DrawUtils.DrawEntityRange(queen);
			this.entityGroup.addChild(queen);
			// 血量条
			entityInfo = WarDataMgr.Ins().infoMap.get(queen.iii);
			if(entityInfo != null)
			{
				this.entityInfoGroup.addChild(entityInfo);
			}
		}
	}
}