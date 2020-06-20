
module home
{
	export class HeroKaData extends DataBase
	{
		public kaId:number;
		public level:number;
		public canUp:boolean;
		protected init()
		{
			
		}

		protected destroy()
		{
			
		}

		// 从我的卡牌中获取数据
		public packData(kaId:number)
		{
			let hero = HomeDataMgr.Ins().myData.kaMap.get(kaId);
			if(hero == null)
				return;
			this.kaId = hero.kaId;
			this.level = hero.level;

			this.addAttrCB(hero, "level", ()=>{
				this.canUp = this.kaId == 10010; // 假设有张升级表~
				this.updateAttr("level");
			}, this);
		}
	}

	export class HeroKa extends WItemRenderBase
	{
		private costLb:eui.BitmapLabel;
		private typeBg:eui.Image;
		private kaImg:eui.Image;
		private testId:eui.Label;
		private level:eui.Label;
		private upTips:eui.Image;

		public info:HeroKaData;
		public constructor()
		{
			super();
			this.skinName = "HeroKaSkin";
		}

		protected init()
		{
			this.touchChildren = false;
		}

		public destroy()
		{
			if(this.info != null)
			{
				this.info.destroyAll();
			}
		}

		public dataChanged()
		{
			if(this.data == null)
				return;
			this.info = this.data;
			
			let heroCfg 		 = ConfigManager.Ins().get(CONFIG.HERO)[this.info.kaId] as IHero;
			this.costLb.text	 = String(heroCfg.cost);
			this.typeBg.source   = Utils.GetQualityBg(heroCfg.quality);
			this.kaImg.source 	 = Utils.GetKaIcon(this.info.kaId);
			this.level.text      = `${this.info.level}级`;
			this.testId.text 	 = `${this.info.kaId}`;
			this.testId.visible  = GameData.DevelopMode == DevelopMode.DEBUG;

			this.info.addAttrListener("level", this.OnShowUpTips, this);
		}

		private OnShowUpTips()
		{
			this.upTips.visible  = this.info.canUp;
		}
	}
}
