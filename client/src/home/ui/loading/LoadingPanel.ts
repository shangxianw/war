module home
{
	export class LoadingPanelData extends ViewData
	{
		public resGroupArray:string[];	// 加载资源组
		public resArray:string[];		// 加载资源(针对动态资源、如玩家领主)

		public heroArray:number[];
		public isNext:boolean;
		public currIndex:number;
		protected init()
		{
			this.resGroup = "loading";
			this.layer = LayerManager.Ins().Panel;
			this.isNext = true;
			this.heroArray = [];
			this.currIndex = 0;
		}

		protected destroy()
		{
			this.heroArray.length = 0;
			this.currIndex = 0;
		}

		public packData()
		{
			this.isNext = true;
			this.currIndex = 0;
			this.heroArray = [10080, 10090, 10010, 10040, 10070, 10150, 10120, 10130];
			this.resGroupArray = [];
		}
	}

	export class LoadingPanel extends ViewBase
	{
		private tips:eui.Label;
		private nextBtn:WButton;
		private bg:eui.Image;
		private bar:eui.ProgressBar;

		public info:LoadingPanelData;
		public constructor()
		{
			super("LoadingPanelSkin", LoadingPanelData);	
		}

		protected init()
		{
			this.info.packData();
		}

		protected destroy()
		{
			if(this.info != null)
				this.info.destroyAll();
			Utils.showBreathTween(this.bg, false);
			TimerManager.Ins().removeTimer(this.OnLoadRes, this);
		}

		public initData(data:any)
		{
			this.info.packData();
		}

		public initView()
		{
			Utils.showBreathTween(this.bg, true, {time:1000});
			// TimerManager.Ins().addTimer(100, this.OnLoadRes, this);
			this.addEvent(this.nextBtn, egret.TouchEvent.TOUCH_TAP, this.OnTap, this);
		}

		private OnLoadRes()
		{
			if(this.info.isNext == true)
			{
				if(this.info.currIndex >= this.info.heroArray.length)
				{
					TimerManager.Ins().removeTimer(this.OnLoadRes, this);
					return false;
				}
				this.info.isNext = false;
				let heroId = this.info.heroArray[this.info.currIndex];
				let resName = `herobg_${heroId}_png`;
				ResManager.Ins().loadResAsync(resName, this.OnLoadHeroOk, this);
			}
			return true;
		}

		private OnLoadHeroOk()
		{
			console.log(this.info.currIndex);

			let heroModel = new eui.Image;
			heroModel.source = `herobg_${this.info.heroArray[this.info.currIndex]}_png`
			this.addChild(heroModel);
			heroModel.x = Math.random() * 1280;
			heroModel.y = Math.random() * 720;
			heroModel.scaleX = heroModel.scaleY = 0.5;

			this.info.isNext = true;
			this.info.currIndex++;
		}

		private OnTap()
		{
			ViewManager.Ins().close(this);
			ViewManager.Ins().open(home.HomePanel);
		}
	}
}