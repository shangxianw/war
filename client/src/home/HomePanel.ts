class HomePanelData extends ViewData
{
	protected init()
	{
		this.resGroup = [];
		this.layer = LayerManager.Ins().panel;
	}

	protected destroy()
	{
		
	}
}

class HomePanel extends ViewBase
{
	private fightBtn:eui.Button;
	private renderLb:eui.Label;
	private logicLb:eui.Label;
	
	public info:HomePanelData;
	public constructor()
	{
		super();
		this.skinName = "HomePanelSkin";
	}

	protected init() 
	{
		
	}

	protected destroy()
	{
		this.fightBtn.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.OnFightTap, this)
	}

	public open()
	{
		this.fightBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.OnFightTap, this)
		// this.showFrame()
	}

	private OnFightTap(e:egret.TouchEvent)
	{
		SceneManager.Ins().changeScene(SceneType.War)
	}

	// ---------------------------------------------------------------------- 帧率测试
	// private logicFps = 1
	// private renderFps = 60
	// private lastLogic = 0
	// private lastRender = 0
	// private updateLogic = 0
	// private updateRender = 0

	// private frameTest:eui.Rect
	// private frameTest0:eui.Rect;
	// private testX:number = 0
	// private showFrame()
	// {
	// 	egret.startTick(this.OnUpdateLogic, this)
	// 	egret.startTick(this.OnUpdaterRender, this)
	// }

	// private OnUpdateLogic(t:number)
	// {
	// 	let dt = t - this.lastLogic;
	// 	let delay = 1000 / this.logicFps 
	// 	this.updateLogic += dt
	// 	if(this.updateLogic < delay)
	// 		return true;
	// 	this.lastLogic = t
	// 	this.updateLogic -= delay

	// 	this.logicLb.text = `logic:${t}`
	// 	this.testX = Math.floor(t/10);
	// 	return true
	// }

	// private OnUpdaterRender(t:number)
	// {
	// 	let dt = t - this.lastRender;
	// 	let delay = 1000 / this.renderFps 
	// 	this.updateRender += dt
	// 	if(this.updateRender < delay)
	// 		return true;
	// 	this.lastRender = t
	// 	this.updateRender -= delay


	// 	let distance = this.testX - this.frameTest.x
	// 	this.frameTest.x += distance / dt;
		
	// 	this.frameTest0.x = Math.floor(t/10)
	// 	// this.frameTest.x = this.testX;
	// 	this.renderLb.text = `render:${t}`
	// 	return true
	// }
}


