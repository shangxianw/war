module home
{
	export class MenuPanelData extends ViewData
	{
		protected init()
		{
			this.resGroup = [];
			this.layer = LayerManager.Ins().panel;
		}

		protected destroy()
		{

		}
	}

	export class MenuPanel extends ViewBase
	{
		private startBtn:eui.Button;
		
		public info:MenuPanelData;
		public constructor()
		{
			super();
			this.skinName = "MenuPanelSkin";
		}

		protected destroy()
		{
			this.startBtn.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.OnStarTap, this)
		}

		public open()
		{
			this.startBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.OnStarTap, this);
		}

		private OnStarTap(e:egret.TouchEvent)
		{
			ViewManager.Ins().close(this);
			ViewManager.Ins().open(war.WarPanel);
		}
	}
}