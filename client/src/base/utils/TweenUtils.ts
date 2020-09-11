class TweenUtils
{
	public static RemoveTween(target:egret.DisplayObject)
	{
		egret.Tween.removeTweens(target)
	}

	/**
	 * @param starInScale1 是否从缩放为1开始进行缩放
	 */
	public static Scale(target:egret.DisplayObject, scaleX:number=0.9, scaleY:number=0.9, time:number=60, starInScale1:boolean=true)
	{
		TweenUtils.RemoveTween(target)
		if(starInScale1 == true)
			target.scaleX = target.scaleY = 1
		egret.Tween.get(target).to({scaleX:scaleX, scaleY:scaleY}, time)
	}
}