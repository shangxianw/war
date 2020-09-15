/**
 * 继承的按钮类
 * 主要是做一些点击效果，和增加多余字段
 * 当一个按钮里有多个可变元素时，可给其元素id定义为以下几种名称，这样在使用的时候就不需要管逻辑如何，只需要处理UI的情况
 * 即用相同的id名称去适配多个UI，只要UI元素的id是相同的即可
 */
class WButton extends eui.Button
{
	public label1:eui.Label;
	public label2:eui.Label;
	public label3:eui.Label;

	public icon1:eui.Image;
	public icon2:eui.Image;
	public icon3:eui.Image;

	public constructor()
	{
		super();
		this.touchChildren = false;
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