class WGroup extends eui.Group
{
	public constructor()
	{
		super();
		this.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBegin, this)
		this.addEventListener(egret.Event.REMOVED_FROM_STAGE, this.onDestroy, this)
	}

	private onDestroy()
	{
		TweenUtils.RemoveTween(this)
		this.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBegin, this)
		this.addEventListener(egret.Event.REMOVED_FROM_STAGE, this.onDestroy, this)
	}

	private onTouchBegin(e:egret.TouchEvent)
	{
		TweenUtils.Scale(this, 0.9, 0.9, 60, true)
		this.$stage.addEventListener(egret.TouchEvent.TOUCH_CANCEL, this.onTouchCancle, this);
        this.$stage.addEventListener(egret.TouchEvent.TOUCH_END, this.onStageTouchEnd, this);
	}

	private onTouchCancle(e:egret.TouchEvent)
	{
		TweenUtils.Scale(this, 1, 1, 60, false)
		var stage = e.$currentTarget;
		stage.removeEventListener(egret.TouchEvent.TOUCH_CANCEL, this.onTouchCancle, this);
        stage.removeEventListener(egret.TouchEvent.TOUCH_END, this.onStageTouchEnd, this);
	}

	private onStageTouchEnd(e:egret.TouchEvent)
	{
		TweenUtils.Scale(this, 1, 1, 60, false)
		var stage = e.$currentTarget;
		stage.removeEventListener(egret.TouchEvent.TOUCH_CANCEL, this.onTouchCancle, this);
        stage.removeEventListener(egret.TouchEvent.TOUCH_END, this.onStageTouchEnd, this);
	}
}