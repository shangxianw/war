module war
{
	export class Ka1Data extends DataBase
	{
		public kaId:number;
		public kaX:number;
		public kaY:number;

		public currEnergy:number;
		public cost:number;
		protected init()
		{
			this.kaId = 0;
			this.kaX = 0;
			this.kaY = 0;
		}

		protected destroy()
		{
			this.kaId = 0;
			this.kaX = 0;
			this.kaY = 0;
		}

		public packData(kaId:number, x:number, y:number, currEnergy:number)
		{
			this.kaId = kaId;
			let cfg:IHero = ConfigManager.Ins().get(CONFIG.HERO)[kaId];
			if(cfg == null)
				return;
			this.cost = cfg.cost;
			this.kaX = x;
			this.kaY = y;
			this.flushAttr("kaId");
			this.refreshCost(currEnergy)
			return this;
		}

		public refreshCost(currEnergy:number)
		{
			this.currEnergy = currEnergy;
			this.flushAttr("currEnergy");
		}

		// 针对重置的情况
		public refreshKa(kaId:number)
		{
			this.kaId = kaId;
			let cfg:IHero = ConfigManager.Ins().get(CONFIG.HERO)[kaId];
			if(cfg == null)
				return;
			this.cost = cfg.cost;
			this.flushAttr("kaId");
			this.refreshCost(0);
		}
	}

	export class Ka1 extends UIBase
	{
		private qualityImg:eui.Image;
		private kaIcon:eui.Image;
		private cost:eui.BitmapLabel;
		private circleShape:egret.Shape;
		private arcGroup:eui.Group;
		private lockImg:eui.Image;

		public info:Ka1Data;
		public constructor()
		{
			super("Ka1Skin");
		}

		protected init()
		{
			this.touchChildren = false;
		}

		protected destroy()
		{
			if(this.info != null)
				this.info.destroyAll();
		}

		public initView()
		{
			this.addAttrCB(this.info, "kaId", this.OnInitView, this);
			this.addAttrCB(this.info, "currEnergy", this.OnRefreshKaCost, this);
		}

		private OnInitView()
		{
			let cfg:IHero = ConfigManager.Ins().get(CONFIG.HERO)[this.info.kaId];
			if(cfg == null)
				return;
			this.qualityImg.source = Utils.GetQualityBg(cfg.quality);
			this.kaIcon.source = Utils.GetKaIcon(cfg.heroid);
			this.cost.text = `${cfg.cost}`;
		}

		public OnRefreshKaCost()
		{
			if(this.circleShape == null)
			{
				this.circleShape = new egret.Shape();
				this.arcGroup.addChild(this.circleShape);
				this.lockImg.mask = this.circleShape;
			}
			
			let angel = Math.min((this.info.currEnergy/this.info.cost)*360, 360);
			this.circleShape.graphics.clear();
			this.circleShape.graphics.beginFill(0xffff00);
			this.circleShape.graphics.moveTo(0, 0);
			this.circleShape.graphics.lineTo(200, 0);
			this.circleShape.graphics.drawArc(0, 0, 120, 0, angel*Math.PI/180);
			this.circleShape.graphics.lineTo(0, 0);
			this.circleShape.graphics.endFill();
		}
	}
}