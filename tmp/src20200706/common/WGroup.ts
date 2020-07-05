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
		ListenerMgr.Ins().addEventListen(this, egret.TouchEvent.TOUCH_BEGIN, this.OnTouchBegin, this);
		ListenerMgr.Ins().addEventListen(this, egret.Event.REMOVED_FROM_STAGE, this.destroy, this);
	}

	public destroy()
	{
		ListenerMgr.Ins().removeEventListen(this, egret.TouchEvent.TOUCH_BEGIN, this.OnTouchBegin, this);
		ListenerMgr.Ins().removeEventListen(this, egret.Event.REMOVED_FROM_STAGE, this.destroy, this);
	}

	private OnTouchBegin(e:egret.TouchEvent)
	{
		ListenerMgr.Ins().addEventListen(this, egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, e.target.OnTouchCancle, this);
        ListenerMgr.Ins().addEventListen(this, egret.TouchEvent.TOUCH_END, e.target.OnStageTouchEnd, this);

		e.target.scaleX = e.target.scaleY = 0.9;
	}

	private OnTouchCancle(e:egret.TouchEvent)
	{
		ListenerMgr.Ins().removeEventListen(this, egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, e.target.OnTouchCancle, this);
		ListenerMgr.Ins().removeEventListen(this, egret.TouchEvent.TOUCH_END, e.target.OnStageTouchEnd, this);
		e.target.scaleX = e.target.scaleY = 1;
	}

	private OnStageTouchEnd(e:egret.TouchEvent)
	{
		ListenerMgr.Ins().removeEventListen(this, egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, e.target.OnTouchCancle, this);
		ListenerMgr.Ins().removeEventListen(this, egret.TouchEvent.TOUCH_END, e.target.OnStageTouchEnd, this);
		e.target.scaleX = e.target.scaleY = 1;
	}
}