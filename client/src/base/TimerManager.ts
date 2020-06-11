class TimerData extends DataBase
{
	public cbFn:Function;
	public thisObj:any;
	public delay:number;
	public count:number;
	
	public lastTime:number;
	protected init()
	{
		this.cbFn = null;
		this.thisObj = null;
		this.delay = 0;
		this.count = -1;
		this.lastTime = null;
	}

	protected destroy()
	{
		this.cbFn = null;
		this.thisObj = null;
		this.delay = 0;
		this.count = -1;
		this.lastTime = null;
	}

	public packData(delay:number, cbFn:Function, thisObj:any, lastTime:number)
	{
		this.delay = delay;
		this.cbFn = cbFn;
		this.thisObj = thisObj;
		this.lastTime = lastTime;
		return this;
	}

	// 应该支持参数
	public exec()
	{
		if(this.cbFn == null || this.thisObj == null)
			return false;
		return this.cbFn.call(this.thisObj);
	}
}

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
		for(let timer of this.timerArray)
		{
			timer.destroyAll();
			PoolManager.Ins().push(timer);
		}
		this.timerArray.length = 0;
		egret.stopTick(this.update, this);
	}

	private static instance:TimerManager;
	public static Ins()
	{
		if(TimerManager.instance == null)
			TimerManager.instance = new TimerManager();
		return TimerManager.instance;
	}

	/**
	 * 增加定时器
	 * @param delay 间隔(毫秒)
	 * @param cnFn 执行回调函数
	 */
	public addTimer(delay:number, cbFn:Function, thisObj:any):boolean
	{
		if(delay == null || cbFn == null || thisObj == null)
		{
			LogUtils.Warn(`${Utils.GetClassNameByObj(this)} : 参数有误`);
			return false;
		}

		if(this.hasTimer(cbFn, thisObj) == true)
		{
			LogUtils.Warn(`${Utils.GetClassNameByObj(this)} : 已存在同一个定时器 ${delay} ${cbFn} ${thisObj}`);
			return false;
		}

		let timer:TimerData = PoolManager.Ins().pop(TimerData);
		timer.packData(delay, cbFn, thisObj, egret.getTimer());
		this.timerArray.push(timer);
		return true;
	}

	public removeTimer(cbFn:Function, thisObj:any):boolean
	{
		if(cbFn == null || thisObj == null)
		{
			LogUtils.Warn(`${Utils.GetClassNameByObj(this)} : 参数有误`);
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
				PoolManager.Ins().push(timer);
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
			
			let count = Math.floor((t - timer.lastTime)/timer.delay);
			if(count >= 1)
			{
				timer.lastTime += count * timer.delay;
				if(timer.count < 0) // 无限次执行
				{
					for(let i=0 ,len= count; i<len; i++)
					{
						flag = timer.exec();
						timer.count++;
						if(flag == false) // 停止
						{
							this.timerArray.splice(index, 1);
							timer.destroyAll();
							PoolManager.Ins().push(timer);
							break;
						}
					}	
				}
			}
			index++;
		}
		return true;
	}
}