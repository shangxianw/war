class MovieClip extends UIBase
{
	public mc:egret.MovieClip;
	private mcFactory:egret.MovieClipDataFactory;
	public constructor()
	{
		super();
	}

	protected init()
	{
		this.mc = new egret.MovieClip();
		this.addChild(this.mc)
	}

	public initData(fileName:string, clipName:string, action:string=null, count:number=0)
	{
		if(fileName == null || clipName == null)
		{
			// LogUtils.Error(`参数错误`);
			return false;
		}

		let data = RES.getResAsync(`${fileName}_json`, ()=>{
			let txtr = RES.getResAsync(`${fileName}_png`, ()=>{
				data = RES.getRes(`${fileName}_json`)
				let txtr = RES.getRes(`${fileName}_png`)
				if(data == null || txtr == null)
				{
					// LogUtils.Error(`资源未加载`);
					return false;
				}

				this.mcFactory = new egret.MovieClipDataFactory(data, txtr);
				this.mc.movieClipData = this.mcFactory.generateMovieClipData(clipName);

				if(action != null)
				{
					this.play(action, count);
				}
				return true;
			}, this);
		}, this);
	}

	public destroy()
	{
		this.mcFactory.clearCache();
	}

	public play(action:string, count:number)
	{
		if(this.mc.currentLabel == action)
			return;
		this.mc.gotoAndPlay(action, count);
		this.height = this.mc.height;
	}
}