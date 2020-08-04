class MovieClip extends UIBase
{
	private frameRate:number;
	public mc:egret.MovieClip;
	private mcFactory:egret.MovieClipDataFactory;
	public constructor()
	{
		super();
		this.width = 0
		this.height = 0
	}

	protected init()
	{
		this.mc = new egret.MovieClip();
		this.addChild(this.mc)
		let shap = new egret.Shape()
		shap.graphics.beginFill(0xff0000)
		shap.graphics.drawCircle(0, 0, 5)
		shap.graphics.endFill()
		this.addChild(shap)
	}

	public initData(fileName:string, clipName:string, action:string=null, count:number=-1)
	{
		if(fileName == null || clipName == null)
		{
			// LogUtils.Error(`参数错误`);
			return false;
		}

		ResManager.Ins().loadResAsync(`${fileName}_json`, (data1, key1)=>{
			ResManager.Ins().loadResAsync(`${fileName}_png`, (data2, key2)=>{
				let data = data1
				let txtr = data2
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
			},this)
		},this)
	}

	public destroy()
	{
		this.mcFactory.clearCache();
		this.mcFactory = null
		this.mc = null;
	}

	public play(action:string, count:number=-1)
	{
		if(this.mc.currentLabel == action)
			return;
		this.mc.gotoAndPlay(action, count);
	}

	public stop()
	{
		this.mc.stop()
	}

	public setFrameRate(frameRate:number)
	{
		this.mc.frameRate = frameRate
	}
}