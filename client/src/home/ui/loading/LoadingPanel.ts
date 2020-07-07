module home
{
	export class LoadingPanelData extends DataBase implements IViewData
	{
		public resGroupArray:string[];	// 加载资源组
		public cfgGroupArray:string[];  // 加载配置表资源
		public currCount:number;
		public resGroup = ["common_loading"];
		public layer = LayerManager.Ins().Panel;
		public resGroupId:number;
		protected init()
		{
			
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
			super("LoadingPanelSkin");
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
			ResManager.Ins().loadGroup(this.info.resGroupArray, this.OnLoadGroupOk, this, this.OnLoadGroupProgress, this.OnLoadGroupError);
		}

		private OnLoadGroupOk(e:RES.ResourceEvent)
		{
			this.loadCfg();
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
			ResManager.Ins().loadGroup(["config_preload"], ()=>{
				let array = RES.getGroupByName("config_preload");
				for(let item of array)
				{
					ConfigManager.Ins().set(item.name, RES.getRes(item.name));
				}
				this.loadOK();
			}, this)
			
		}

		// ---------------------------------------------------------------------- 加载完成
		private loadOK()
		{
			ViewManager.Ins().close(this);
			ViewManager.Ins().open(home.HomePanel);
		}
	}
}