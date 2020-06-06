module war
{
	export class MovieClip extends egret.MovieClip
	{
		public currAction:string;
		public constructor()
		{
			super();
		}

		public initData(fileName:string, clipName:string)
		{
			let data = RES.getRes(`${fileName}_json`);
			let txtr = RES.getRes(`${fileName}_png`);
			let mcFactory:egret.MovieClipDataFactory = new egret.MovieClipDataFactory(data, txtr);
			this.movieClipData = mcFactory.generateMovieClipData(clipName);
		}

		public startPlay(action:string, count:number)
		{
			if(this.currAction != action)
			{
				this.currAction = action;
				this.gotoAndPlay(action, count);
			}
		}
	}
}