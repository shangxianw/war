/**
 * 定时器管理器
 */
class TimerManager extends DataBase
{
	public timerArray:TimerData[];
	protected init()
	{
		this.timerArray = []
		egret.startTick(this.update, this);
	}

	protected destroy()
	{
		egret.stopTick(this.update, this);
		this.removeAllTimer()
		this.timerArray = null;
	}

	/**
	 * 增加定时器
	 * @param delay 间隔(毫秒)
	 * @param cnFn 执行回调函数
	 * @param isExec 是否立即执行一次(为false则会隔一个delay后才执行第一次)
	 * @returns 通过在回调函数内返回 true 或 false 来判断是否执行下一次定时操作，如果为false，则会删除定时器
	 */
	public addTimer(delay:number, cbFn:Function, thisObj:any, isExec:boolean = true, ...args:any[]):boolean
	{
		if(delay == null || cbFn == null || thisObj == null)
		{
			return false;
		}

		let timer:TimerData = new TimerData()
		timer.packData(delay, cbFn, thisObj, isExec, args);
		this.timerArray.push(timer);
		return true;
	}

	/**
	 * 删除定时器
	 * 增加定时器一定要销毁掉，但不一定通过该方法，也可以在回调函数中返回false，则同样会删除定时器
	 */
	public removeTimer(cbFn:Function, thisObj:any):boolean
	{
		if(cbFn == null || thisObj == null)
		{
			return false;
		}

		let array:TimerData[] = DataUtils.CopyArray(this.timerArray);
		let index = 0;
		for(let timer of array)
		{
			if(timer == null)
				continue;
			
			if(timer.cbFn == cbFn && timer.thisObj == thisObj)
			{
				this.timerArray.splice(index, 1);
				timer.destroyAll();
				timer = null
				return true;
			}
			index++;
		}
		return false;
	}

	public hasTimer(cbFn:Function, thisObj:any):boolean
	{
		let array:TimerData[] = DataUtils.CopyArray(this.timerArray);
		for(let timer of array)
		{
			if(timer == null)
				continue;
			
			if(timer.cbFn == cbFn && timer.thisObj == thisObj)
				return true;
		}
		return false;
	}

	public removeAllTimer()
	{
		for(let timer of this.timerArray)
		{
			timer.destroyAll()
		}
		this.timerArray.length = 0
	}

	// ---------------------------------------------------------------------- 更新
	private update(t:number):boolean
	{
		let array:TimerData[] = DataUtils.CopyArray(this.timerArray);
		let flag:boolean;
		let index = 0;
		for(let timer of array)
		{
			if(timer == null)
			{
				index++;
				continue;
			}

			if(timer.execIm == true) // 先处理立即执行的情况
			{
				timer.execIm = false;
				timer.count += 1;
				flag = timer.exec(timer.count);
				if(flag == false) // 停止
				{
					this.timerArray.splice(index, 1);
					timer.destroyAll();
					timer = null
				}
				continue;
			}

			let count = Math.floor((t - timer.lastTime)/timer.delay);
			if(count >= 1)
			{
				timer.lastTime += count * timer.delay;
				timer.count += count;
				flag = timer.exec(timer.count);
				if(flag == false || flag == null) // 停止
				{
					this.timerArray.splice(index, 1);
					timer.destroyAll();
					timer = null
					break;
				}
			}
			index++;
		}
		return true;
	}

	private static instance:TimerManager;
	public static Ins()
	{
		if(TimerManager.instance == null)
			TimerManager.instance = new TimerManager();
		return TimerManager.instance;
	}
}