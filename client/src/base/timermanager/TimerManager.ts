/**
 * 定时器
 * 可以通过查看timerArray来看下
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
	 * @param exec 是否立即执行一次(为false则会隔一个delay后才执行第一次)
	 */
	public addTimer(delay:number, cbFn:Function, thisObj:any, exec:boolean = true, ...args:any[]):boolean
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
		timer.packData(delay, cbFn, thisObj, exec, args);
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

			if(timer.execIm == true) // 先处理立即执行的情况
			{
				timer.execIm = false;
				timer.count += 1;
				flag = timer.exec();
				if(flag == false) // 停止
				{
					this.timerArray.splice(index, 1);
					timer.destroyAll();
					PoolManager.Ins().push(timer);
				}
				continue;
			}

			let count = Math.floor((t - timer.lastTime)/timer.delay);
			if(count >= 1)
			{
				timer.lastTime += count * timer.delay;
				for(let i=0 ,len= count; i<len; i++) // 有可能会出现count很大的情况，如切屏。
				{
					timer.count += 1;
					flag = timer.exec();
					if(flag == false || flag == null) // 停止
					{
						this.timerArray.splice(index, 1);
						timer.destroyAll();
						PoolManager.Ins().push(timer);
						break;
					}
				}
			}
			index++;
		}
		return true;
	}
}