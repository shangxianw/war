module home
{
	export class HomePanelData extends ViewData
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

	export class HomePanel extends ViewBase
	{
		private fightBtn:eui.Button;
		
		public info:HomePanelData;
		public constructor()
		{
			super();
			this.skinName = "HomePanelSkin";
		}

		protected init() 
		{
			
		}

		protected destroy()
		{
			this.fightBtn.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.OnFightTap, this)
		}

		public open()
		{
			this.fightBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.OnFightTap, this)
		}

		private OnFightTap(e:egret.TouchEvent)
		{
			SceneManager.Ins().changeScene(SceneType.War)
		}
	}
}


