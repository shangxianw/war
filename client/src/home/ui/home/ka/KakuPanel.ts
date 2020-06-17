module home
{
	export class KakuPanelData extends ViewData
	{
		public selKa:HeroKa2;
		protected init()
		{
			this.resGroup = "";
			this.layer = LayerManager.Ins().Panel;
		}

		protected destroy()
		{
			this.selKa = null;
		}

		public packData()
		{
			
		}
	}

	export class KakuPanel extends ViewBase
	{
		private heroGroup:eui.Group;
		private maskk:eui.Image;
		public readGroup:eui.Group;
		private readyBg:eui.Image;

		public info:KakuPanelData;
		public constructor()
		{
			super("KakuPanelSkin", KakuPanelData);
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
			let heroIdArry = HomeDataMgr.Ins().kaDataMgr.kaMap.keys();
			let kaData:HeroKa2Data;
			let ka:HeroKa2;
			let index = 0;
			for(let heroId of heroIdArry)
			{
				kaData = PoolManager.Ins().pop(HeroKa2Data) as HeroKa2Data;
				kaData.packData(heroId);

				ka = PoolManager.Ins().pop(HeroKa2) as HeroKa2;
				ka.packData(kaData);
				// item宽190，面板宽711，item总宽190*3 = 570，剩余间隙总和711-570 = 141，一个间隙为 141/4=35
				ka.x = 225 * (index%3);
				ka.y = 143 * Math.floor((index/3));
				this.heroGroup.addChild(ka);
				
				index++;
			}

			this.maskk.blendMode = egret.BlendMode.ERASE;
			let reverseMask = new egret.Sprite();
			reverseMask.graphics.beginFill(0, 1);
			reverseMask.graphics.drawRect(0, 0, this.readyBg.width, this.readyBg.height);
			reverseMask.graphics.endFill();
			reverseMask.addChild(this.maskk);
			
			let renderTex = new egret.RenderTexture();
			renderTex.drawToTexture(reverseMask);
			let mask = new egret.Bitmap(renderTex);
			this.readGroup.addChild(mask);
			this.readyBg.mask = mask;

			// this.readyBg.mask = this.maskk;

			this.addEvent(this.heroGroup, egret.TouchEvent.TOUCH_TAP, this.OnHeroGroupTap, this);
			this.addEvent(this.readyBg, egret.TouchEvent.TOUCH_TAP, this.OnReaBgTap, this);
		}

		private OnHeroGroupTap(e:egret.TouchEvent)
		{
			let target:egret.DisplayObject = e.target;
			if(target.name == "heroKa")
			{
				if(this.info.selKa != null)
				{
					this.info.selKa.setState(false);
				}
				let p = target.parent as HeroKa2;
				p.setState(true);
				this.heroGroup.setChildIndex(p, 777);
				this.info.selKa = p;
			}
			else if(target.name == "infoBtn")
			{
				let p = target.parent as HeroKa2;
				// alert(`${p.info.heroId}查看信息`);
			}
			else if(target.name == "fightBtn")
			{
				let p = target.parent as HeroKa2;
				this.readGroup.visible = true;
				if(this.info.selKa != null)
				{
					this.info.selKa.setState(false);
				}
			}
		}

		private OnReaBgTap(e:egret.TouchEvent)
		{
			this.readGroup.visible = false;
		}
	}
}