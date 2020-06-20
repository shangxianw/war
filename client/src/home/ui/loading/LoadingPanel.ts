module home
{
	export class LoadingPanelData extends ViewData
	{
		public resGroupArray:string[];	// 加载资源组
		public cfgGroupArray:string[];  // 加载配置表资源
		public currCount:number;
		protected init()
		{
			this.resGroup = ["loading"];
			this.layer = LayerManager.Ins().Panel;
		}

		protected destroy()
		{
			
		}

		public packData()
		{
			this.currCount = 0;
			this.resGroupArray = ["common_preload", "war_preload"]; // war_preload 对应的英雄应该在matchpanel的时候加载的~
			this.cfgGroupArray = ["hero_json", "upgrade_json"];
		}
	}

	export class LoadingPanel extends ViewBase
	{
		private tips:eui.Label;
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
		}

		public initData(data:any)
		{
			this.info.packData();
		}

		public initView()
		{
			this.loadRes();
			Utils.showBreathTween(this.bg, true, {time:1000});
		}

		// ---------------------------------------------------------------------- 加载资源组
		private loadRes()
		{
			this.bar.minimum = 0;
			this.bar.value = 0;
			for(let groupName of this.info.resGroupArray)
			{
				ResManager.Ins().loadGroup(groupName, this.OnLoadGroupOk, this, this.OnLoadGroupProgress, this.OnLoadGroupError);
			}
		}

		private OnLoadGroupOk(e:RES.ResourceEvent)
		{
			this.info.currCount++;
			if(this.info.currCount >= this.info.resGroupArray.length) // 结束
			{
				this.info.currCount = 0;
				this.loadCfg();
			}
		}

		private OnLoadGroupProgress(e:RES.ResourceEvent)
		{
			this.bar.maximum = e.itemsTotal;
			this.bar.value = e.itemsLoaded;
		}

		private OnLoadGroupError(e:RES.ResourceEvent)
		{
			
		}

		// ---------------------------------------------------------------------- 加载配置表
		private loadCfg()
		{
			for(let cfgName of this.info.cfgGroupArray)
			{
				ResManager.Ins().loadResAsync(cfgName, this.OnLoadCfgOK, this);
			}
		}

		private OnLoadCfgOK(data, key:string)
		{
			this.info.currCount++;
			ConfigManager.Ins().set(key, data);
			if(this.info.currCount >= this.info.cfgGroupArray.length) // 结束
			{
				this.info.currCount = 0;
				this.loadOK();
			}
		}

		// ---------------------------------------------------------------------- 加载完成
		private loadOK()
		{
			ViewManager.Ins().close(this);
			ViewManager.Ins().open(home.HomePanel);
		}
	}
}