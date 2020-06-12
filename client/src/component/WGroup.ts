class WGroup extends eui.Group
{
	public constructor()
	{
		super();
		this.init();
	}

	private init()
	{
		this.touchChildren = false;
	}

	protected childrenCreated():void
	{
		super.childrenCreated();
		this.initData();
	}

	private initData()
	{
		this.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.OnTouchBegin, this);
		this.addEventListener(egret.Event.REMOVED_FROM_STAGE, this.destroy, this);
	}

	public destroy()
	{
		this.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.OnTouchBegin, this);
		this.removeEventListener(egret.Event.REMOVED_FROM_STAGE, this.destroy, this);
	}

	private OnTouchBegin(e:egret.TouchEvent)
	{
		this.$stage.addEventListener(egret.TouchEvent.TOUCH_CANCEL, this.OnTouchCancle, this);
        this.$stage.addEventListener(egret.TouchEvent.TOUCH_END, this.OnStageTouchEnd, this);

		this.scaleX = this.scaleY = 0.9;
	}

	private OnTouchCancle(e:egret.TouchEvent)
	{
		this.$stage.removeEventListener(egret.TouchEvent.TOUCH_CANCEL, this.OnTouchCancle, this);
		this.$stage.removeEventListener(egret.TouchEvent.TOUCH_END, this.OnStageTouchEnd, this);
		this.scaleX = this.scaleY = 1;
	}

	private OnStageTouchEnd(e:egret.TouchEvent)
	{
		this.$stage.removeEventListener(egret.TouchEvent.TOUCH_CANCEL, this.OnTouchCancle, this);
		this.$stage.removeEventListener(egret.TouchEvent.TOUCH_END, this.OnStageTouchEnd, this);
		this.scaleX = this.scaleY = 1;
	}
}