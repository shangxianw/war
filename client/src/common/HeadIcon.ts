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
			let homeData = HomeDataMgr.Ins();
			homeData.removeAttrListener("icon", this.OnRefreshIcon, this);
			homeData.removeAttrListener("frame", this.OnRefreshFrame, this);
		}

		public packData(icon:number, frame:number)
		{
			this.icon = icon;
			this.frame = frame;

			let homeData = HomeDataMgr.Ins();
			homeData.addAttrListener("icon", this.OnRefreshIcon, this);
			homeData.addAttrListener("frame", this.OnRefreshFrame, this);
			return this;
		}

		private OnRefreshIcon()
		{
			let homeData = HomeDataMgr.Ins();
			this.setAttr("icon", homeData.icon);
		}

		private OnRefreshFrame()
		{
			let homeData = HomeDataMgr.Ins();
			this.setAttr("frame", homeData.frame);
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
				this.info.removeAttrListener("icon", this.OnRefreshIcon, this);
				this.info.removeAttrListener("frame", this.OnRefreshFrame, this);
				this.info.destroyAll();
			}
		}

		public dataChanged()
		{
			// if(this.data == null)
			// 	return;
			// this.info = this.data;

			// this.info.addAttrListener("icon", this.OnRefreshIcon, this);
			// this.info.addAttrListener("frame", this.OnRefreshFrame, this);
		}
		// public packData(data:HeadIconData)
		// {
		// }

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