module home
{
	export class HomePanelData extends DataBase implements IViewData
	{
		public resGroup = [];
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
			
		}
	}

	export class HomePanel extends ViewBase
	{
		private fightBtn:eui.Button;
		public info:HomePanelData;
		public constructor()
		{
			super("HomePanelSkin");
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
			this.addEvent(this.fightBtn, egret.TouchEvent.TOUCH_TAP, ()=>{
				ViewManager.Ins().close(this);
				ViewManager.Ins().open(war.WarMatchPanel);
			}, this)

			let a = new MovieClip();
			a.initData("hero_10010", "hero_10010", "run0", -1);
			this.addChild(a);
			a.x = 300;
			a.y = 300;

			let b = new DragonBonesEffect();
			b.initData("199030", "199030", "199030", 0);
			this.addChild(b);
			b.x = 900;
			b.y = 500;
		}
	}
}