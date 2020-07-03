module home
{
	export class HeadIconData extends DataBase
	{
		public icon:number;
		public frame:number;
		protected init()
		{
			this.icon = 0;
			this.frame = 0;
		}

		protected destroy()
		{
			this.icon = 0;
			this.frame = 0;

		}

		public packData(icon:number, frame:number)
		{
			this.icon = icon;
			this.frame = frame;
			let homeData = HomeDataMgr.Ins();
			this.addAttrCB(homeData, "icon", this.OnRefreshIcon, this);
			this.addAttrCB(homeData, "frame", this.OnRefreshIcon, this);
			return this;
		}

		private OnRefreshIcon()
		{
			let homeData = HomeDataMgr.Ins();
			this.setAttr("icon", homeData.myData.icon);
		}

		private OnRefreshFrame()
		{
			let homeData = HomeDataMgr.Ins();
			this.setAttr("frame", homeData.myData.frame);
		}
	}

	export class HeadIcon extends UIBase
	{
		private headFrame:eui.Image;
		private headIcon:eui.Image;

		public info:HeadIconData;
		public constructor()
		{
			super("HeadIconSkin");
		}

		protected init()
		{
			
		}

		public destroy()
		{
			if(this.info != null)
			{
				this.info.destroyAll();
			}
		}

		public update()
		{
			this.info.addAttrListener("icon", this.OnRefreshIcon, this);
			this.info.addAttrListener("frame", this.OnRefreshFrame, this);
		}

		private OnRefreshIcon()
		{
			this.headIcon.source = Utils.GetHeadIcon(this.info.icon);
		}

		private OnRefreshFrame()
		{
			this.headFrame.source = Utils.GetHeadFrame(this.info.frame);
		}
	}
}