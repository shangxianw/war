module war
{
	export class WarPanelData extends ViewData
	{
		public myKaArray:number[];
		public enemyKaArray:number[];

		public kaX:number[] = [396, 556, 718, 880];
		public kaY = 632;
		public anchorOffsetX:number = 106;
		public anchorOffsetY:number = 68;
		public scale:number = 0.74;
		public initX:number = 198;
		public initY:number = 656;
		public initScale = 0.6;
		public shiftY:number = -20;

		public currKa:Ka1;

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

			this.myKaArray = [10010, 10020, 10030, 10040, 10050, 10060, 10070, 10080];
			this.enemyKaArray = [10010, 10020, 10030, 10040, 10050, 10060, 10070, 10080];
		}
	}

	export class WarPanel extends ViewBase
	{
		private testGrid:eui.Group;
		private entityGroup:eui.Group;
		private kaGroup:eui.Group;
		private mapImg:eui.Image;
		private costBar:CostBar;
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
			barData.packData(2);
			this.costBar.initData(barData);
		}

		private initKa()
		{
			let kaArray = this.info.myKaArray.slice(0, 5);
			for(let i=0, len=5; i<len; i++)
			{
				let kaId = kaArray[i];
				let ka = PoolManager.Ins().pop(Ka1) as Ka1;
				let kaData = PoolManager.Ins().pop(Ka1Data) as Ka1Data;
				kaData.packData(kaId);
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
			}, 1000);
		}

		private showInitKaTween()
		{
			for(let i=1, len=5; i<len; i++)
			{
				let ka = this.kaGroup.getChildAt(i) as Ka1;
				egret.Tween.removeTweens(ka);
				egret.Tween.get(ka)
				.to({
					x: this.info.kaX[i-1],
					y: this.info.kaY,
					scaleX: this.info.scale,
					scaleY: this.info.scale
				}, 250*i)
			}
		}

		private OnKaTouchBegin(e:egret.TouchEvent)
		{
			let ka:Ka1 = e.target;
			let kaIndex:number = this.kaGroup.getChildIndex(ka);
			if(kaIndex <= 0)
				return;
			ka.y += this.info.shiftY;
			this.info.currKa = ka;
			this.addEvent(ka, egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, this.OnKaTouchOutside, this);
			this.addEvent(ka, egret.TouchEvent.TOUCH_END, this.OnKaTouchEnd, this);
			this.addEvent(ka, egret.TouchEvent.TOUCH_MOVE, this.OnKaTouchMove, this);
		}

		private OnKaTouchOutside(e:egret.TouchEvent)
		{
			this.info.currKa.y -= this.info.shiftY;
			this.removeEvent(this.info.currKa, egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, this.OnKaTouchOutside, this);
			this.removeEvent(this.info.currKa, egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, this.OnKaTouchEnd, this);
			this.removeEvent(this.info.currKa, egret.TouchEvent.TOUCH_MOVE, this.OnKaTouchMove, this);
		}

		private OnKaTouchEnd(e:egret.TouchEvent)
		{
			let kaIndex:number = this.kaGroup.getChildIndex(this.info.currKa);
			if(kaIndex >= 0)
			{
				this.info.currKa.x = this.info.kaX[kaIndex-1];
				this.info.currKa.y = this.info.kaY;
			}
			this.removeEvent(this.info.currKa, egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, this.OnKaTouchOutside, this);
			this.removeEvent(this.info.currKa, egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, this.OnKaTouchEnd, this);
			this.removeEvent(this.info.currKa, egret.TouchEvent.TOUCH_MOVE, this.OnKaTouchMove, this);
		}

		private OnKaTouchMove(e:egret.TouchEvent)
		{
			this.info.currKa.x = e.stageX;
			this.info.currKa.y = e.stageY;
		}
	}
}