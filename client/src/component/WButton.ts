class WButton extends eui.Button
{
	public constructor()
	{
		super();
		this.addEventListener(egret.Event.REMOVED_FROM_STAGE, this.onDestroy, this)
	}

	private onDestroy()
	{
		TweenUtils.RemoveTween(this)
		this.removeEventListener(egret.Event.REMOVED_FROM_STAGE, this.onDestroy, this)
	}

	protected onTouchBegin(e:egret.TouchEvent)
	{
		TweenUtils.Scale(this, 0.9, 0.9, 60, true)
		this.$stage.addEventListener(egret.TouchEvent.TOUCH_END, this.onTouchEnd, this);
		super.onTouchBegin(e)
	}

	protected onTouchCancle(e:egret.TouchEvent)
	{
		TweenUtils.Scale(this, 1, 1, 60, false)
		var stage = e.$currentTarget;
		stage.removeEventListener(egret.TouchEvent.TOUCH_END, this.onTouchEnd, this);
		super.onTouchCancle(e)
	}

	protected onTouchEnd(e:egret.TouchEvent)
	{
		var stage = e.$currentTarget;
		stage.removeEventListener(egret.TouchEvent.TOUCH_END, this.onTouchEnd, this);
		this.removeEventListener(egret.TouchEvent.TOUCH_CANCEL, this.onTouchCancle, this);
		TweenUtils.Scale(this, 1, 1, 60, false)
	}
}