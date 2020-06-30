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
			this.layer = LayerManager.Ins().Panel;
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
				// this.info.currKa.x = this.info.currKa.info.initX;
				// this.info.currKa.y = this.info.currKa.info.initY;
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
			hero.mc.initData("hero_10010", "hero_10010");
			hero.mc.startPlay("stand4", -1);

			return hero;
		}

		private addToEntityGroup()
		{
			if(this.info.createKa == null)
				return;
			let speedc:SpeedCom = PoolManager.Ins().pop(SpeedCom) as SpeedCom;
			speedc.angle = 0;
			speedc.speed = 10;
			this.info.createKa.setCom(speedc);

			let pathc:PathCom = PoolManager.Ins().pop(PathCom) as PathCom;
			let x = WarUtils.ToGridX(this.info.createKa.x);
			let y = WarUtils.ToGridY(this.info.createKa.y);
			let path = WarDataMgr.Ins().findPath(x, y, 40, 15);
			pathc.setPath(path);
			this.info.createKa.setCom(pathc);

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
		}
	}
}