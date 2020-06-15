class ResData extends DataBase
{
	public resName:string;
	public referenceCount:number;
	public destroyTime:number;
	protected init()
	{
		this.resName = "" ;
		this.referenceCount = 0;
	}

	protected destroy()
	{
		this.resName = "" ;
		this.referenceCount = 0;
	}

	public packData(resName:string)
	{
		this.resName = resName;
		return this;
	}

	public reduceCount()
	{
		this.referenceCount = Math.max(this.referenceCount-1, 0);
		if(this.referenceCount <= 0) // 没有引用，则应该记录时间
			this.destroyTime = egret.getTimer() + ResManager.Ins().READY_DERTROY_SECOND*1000;
	}

	public addCount()
	{
		this.referenceCount++;
		this.destroyTime = null;
	}
}

class ResGroupData extends DataBase
{
	public groupName:string;
	public priority:number;
	public itemsLoaded:number;
	public itemsTotal:number;
	public resArray:string[];

	public cbFn:Function;
	public progFn:Function;
	public errFn:Function;
	public thisObj:any;

	public errLoadCount:number;
	protected init()
	{
		this.errLoadCount = 0;
		this.groupName = "";
		this.priority = null;
		this.itemsLoaded = null;
		this.itemsTotal = null;
		this.resArray = [];
	}

	protected destroy()
	{
		this.resArray.length = 0;
		this.errLoadCount = 0;
		this.groupName = null;
		this.priority = null;
		this.itemsLoaded = null;
		this.itemsTotal = null;
	}

	public packData(groupName:string, cbFn:Function=null, thisObj:any=null, progFn:Function=null, errFn:Function=null, priority:number)
	{
		this.groupName = groupName;
		this.priority = priority;
		this.cbFn = cbFn;
		this.errFn = errFn;
		this.thisObj = thisObj;
		this.progFn = progFn;
		return this;
	}

	public execCb(query:any)
	{
		if(this.cbFn == null || this.thisObj == null)
			return;
		this.cbFn.call(this.thisObj, query);
	}

	public execProg(query:any)
	{
		if(this.progFn == null || this.thisObj == null)
			return;
		this.progFn.call(this.thisObj, query);
	}

	public execErr(query:any)
	{
		if(this.errFn == null || this.thisObj == null)
			return;
		this.errFn.call(this.thisObj, query);
	}
}

class ResManager extends DataBase
{
	private groupArray:ResGroupData[]; // 待加载资源组
	private useGroupArray:ResGroupData[] // 在使用中的资源组
	private isLoading:boolean;
	private currLaodInfo:ResGroupData;
	private waitDestroyGroup:string[]; // 用于记录当前正在加载中，但需要被销毁的资源名(因为官方还没有提供取消下载的接口，而且既然资源都加载了，就不要轻易删掉)
	private ERROR_LOAD_COUNT:number;
	public READY_DERTROY_SECOND:number;
	private DESTROY_ONCE_COUNT:number;
	private resMap:Hash<string, ResData>;
	protected init()
	{
		this.DESTROY_ONCE_COUNT = 1; // 一次销毁n个
		this.ERROR_LOAD_COUNT = 5;	 // 五次重连都失败就跳过
		this.READY_DERTROY_SECOND = 5; // 5秒后资源会被销毁(如果引用为0)
		this.isLoading = false;
		this.groupArray = [];
		this.useGroupArray = [];
		this.waitDestroyGroup = [];
		this.currLaodInfo = null;
		this.resMap = new Hash<string, ResData>();
		RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE,this.OnResourceLoadComplete,this);
		RES.addEventListener(RES.ResourceEvent.GROUP_PROGRESS,this.OnResourceLoadProgress,this);
		RES.addEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR,this.OnResourceLoadError,this);
		TimerManager.Ins().addTimer(1000, this.update, this);
	}

	protected destroy()
	{
		for(let resData of this.resMap.values())
		{
			resData.destroyAll();
			PoolManager.Ins().push(resData);
		}
		this.resMap.destroy(); // 有待验证，是不是会把里面的子项给delete掉，导致resdata变成了null

		TimerManager.Ins().removeTimer(this.update, this);
		for(let groupInfo of this.groupArray)
		{
			groupInfo.destroyAll();
			PoolManager.Ins().push(groupInfo);
		}
		this.groupArray.length = 0;

		for(let groupInfo of this.useGroupArray)
		{
			groupInfo.destroyAll();
			PoolManager.Ins().push(groupInfo);
		}
		this.useGroupArray.length = 0;

		this.waitDestroyGroup.length = 0;
		this.isLoading = false;
		this.currLaodInfo = null;
		RES.removeEventListener(RES.ResourceEvent.GROUP_COMPLETE,this.OnResourceLoadComplete,this);
		RES.removeEventListener(RES.ResourceEvent.GROUP_PROGRESS,this.OnResourceLoadProgress,this);
		RES.removeEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR,this.OnResourceLoadError,this);
	}

	private static instance:ResManager;
	public static Ins()
	{
		if(ResManager.instance == null)
			ResManager.instance = new ResManager();
		return ResManager.instance;
	}

	// 默认放在队列的后面
	public loadGroup(groupName:string, cbFn:Function=null, thisObj:any=null, progFn:Function=null, errFn:Function=null, priority:number = null)
	{
		if(groupName == null || groupName == "")
		{
			return LogUtils.Error(`${Utils.GetClassNameByObj(this)} : loadGroup 方法参数有误`);
		}
		
		let grouInfo = PoolManager.Ins().pop(ResGroupData) as ResGroupData;

		if(priority != null) // 如果有优先级，数字越小优先级越高，最高位0
		{
			grouInfo.packData(groupName, cbFn, thisObj, progFn, errFn, priority);
		}
		else
		{
			grouInfo.packData(groupName, cbFn, thisObj, progFn, errFn, this.groupArray.length);
		}
		LogUtils.Log(`将资源组 ${groupName} 加入到加载列表, 优先级为 ${grouInfo.priority}`);
		this.groupArray.push(grouInfo);
		this.groupArray.sort(this.sortGroupArray);
		1;
		1
	}

	private sortGroupArray(a:ResGroupData, b:ResGroupData)
	{
		return a.priority < b.priority ? -1 : 1;
	}

	public destroyGroup(groupName:string)
	{
		if(groupName == null)
		{
			return LogUtils.Error(`${Utils.GetClassNameByObj(this)} : loadGroup 方法参数有误`);
		}

		// 正在加载中的资源组
		let resInfo:ResData;
		if(this.currLaodInfo != null && this.currLaodInfo.groupName == groupName)
		{
			this.waitDestroyGroup.push(groupName);
			return;
		}

		// 如果还没有加载
		let index = 0;
		for(let groupInfo of this.groupArray)
		{
			if(groupInfo.groupName == groupName)
			{
				groupInfo.destroyAll();
				PoolManager.Ins().push(groupInfo);
				this.groupArray.splice(index, 1);
				return;
			}
			index++;
		}

		// 如果已经加载完
		index = 0;
		for(let groupInfo of this.useGroupArray)
		{
			if(groupInfo.groupName == groupName)
			{
				for(let resName of groupInfo.resArray)
				{
					if(this.resMap.has(resName) == false)
					{
						LogUtils.Error(`${Utils.GetClassNameByObj(this)} : ${resName} 没有被记录起来`);
						continue;
					}
					resInfo = this.resMap.get(resName);
					resInfo.reduceCount();
				}

				groupInfo.destroyAll();
				PoolManager.Ins().push(groupInfo);
				this.useGroupArray.splice(index, 1);
				return;
			}
			index++;
		}
	}

	private OnResourceLoadComplete(e:RES.ResourceEvent)
	{
		LogUtils.Log(`资源组 ${e.groupName} 加载完成`);
		if(this.currLaodInfo != null)
		{
			this.currLaodInfo.execCb(e);
		}
		this.loadEnd();
	}

	private OnResourceLoadProgress(e:RES.ResourceEvent)
	{
		this.currLaodInfo.itemsLoaded = e.itemsLoaded;
		this.currLaodInfo.itemsTotal = e.itemsTotal;
		if(this.currLaodInfo.resArray.indexOf(e.resItem.name) >= 0)
		{
			LogUtils.Warn(`${Utils.GetClassNameByObj(this)} : ${this.currLaodInfo.groupName} 有相同的资源项 ${e.resItem.name}`); // 为啥没有判断资源组是否存在的API
		}
		else
		{
			this.currLaodInfo.resArray.push(e.resItem.name);
			let resInfo:ResData;
			if(this.resMap.has(e.resItem.name) == false)
			{
				resInfo = PoolManager.Ins().pop(ResData);
				this.resMap.set(e.resItem.name, resInfo);
			}
			resInfo = this.resMap.get(e.resItem.name);
			resInfo.packData(e.resItem.name);
			resInfo.addCount();
			if(this.currLaodInfo != null)
			{
				this.currLaodInfo.execProg(e);
			}
			LogUtils.Log(`正在加载资源组 ${e.groupName} 的 ${e.resItem.name}`);
		}
	}

	private OnResourceLoadError(e:RES.ResourceEvent)
	{
		this.currLaodInfo.errLoadCount++;
		if(this.currLaodInfo.errLoadCount >= this.ERROR_LOAD_COUNT)
		{
			LogUtils.Error(`${Utils.GetClassNameByObj(this)} : ${this.currLaodInfo.groupName} 加载失败，准备加载下一个资源组`);
			if(this.currLaodInfo != null)
			{
				this.currLaodInfo.execErr(e);
			}
			this.loadEnd();
			return;
		}
		LogUtils.Error(`${Utils.GetClassNameByObj(this)} : ${this.currLaodInfo.groupName} 加载失败，尝试重新加载`);
		RES.loadGroup(e.groupName);
	}

	// 该方法有两个功能
	// 1、一个接着一个加载资源组
	// 2、监测资源的引用情况，如果引用为0，则销毁掉。
	private update()
	{
		if(this.isLoading == false)
		{
			let flag = this.loadNextGroup();
			this.isLoading = flag;
		}
		
		let array:ResData[] = DataUtils.CopyArray(this.resMap.values()); // 必须复制一个出来，因为在遍历的过程中有可能删掉自己，导致数组长度不等。
		let destroyCount = 0;
		for(let resData of array)
		{
			if(resData == null)
			{
				LogUtils.Error(`${Utils.GetClassNameByObj(this)} : 发现空资源项`);
				continue;
			}

			if(resData.referenceCount > 0)
				continue;

			if(resData.destroyTime == null)
			{
				LogUtils.Error(`${Utils.GetClassNameByObj(this)} : 待销毁资源 ${resData.resName} 未设置销毁时间`);
				continue;
			}

			if(egret.getTimer() < resData.destroyTime)
				continue;
			
			RES.destroyRes(resData.resName);
			LogUtils.Log(`删除资源 ${resData.resName}`);
			this.resMap.remove(resData.resName);
			resData.destroyAll();
			PoolManager.Ins().push(resData);
			destroyCount++;
			if(destroyCount >= this.DESTROY_ONCE_COUNT) // 防止卡顿
				break;
		}

		return true;
	}

	private loadNextGroup():boolean
	{
		this.currLaodInfo = this.groupArray.shift();
		if(this.currLaodInfo == null)
		{
			// LogUtils.Error(`${Utils.GetClassNameByObj(this)} 不存在资源组名`); // 为啥没有判断资源组是否存在的API
			return false;
		}
		RES.loadGroup(this.currLaodInfo.groupName);
		return true;
	}

	private loadEnd()
	{
		let item = this.currLaodInfo
		this.useGroupArray.push(item);
		this.destroyWaitGroup();

		this.currLaodInfo = null;
		this.isLoading = false;
	}

	// 对于正在加载中，又想销毁的资源组，要等到资源组加载完成后，才进行销毁(因为官方没有取消加载的接口)
	private destroyWaitGroup()
	{
		let waitGroupName:string;
		let resData:ResData;
		while(this.waitDestroyGroup.length > 0)
		{
			waitGroupName = this.waitDestroyGroup.shift();
			if(waitGroupName == null)
				continue;
			let array:ResGroupData[] = DataUtils.CopyArray(this.useGroupArray);
			let index = -1;
			for(let useGroup of array)
			{
				index++;
				if(useGroup == null)
					continue;
				
				if(useGroup.groupName == waitGroupName)
				{
					for(let resName of useGroup.resArray)
					{
						if(this.resMap.has(resName) == false)
							continue;
						resData = this.resMap.get(resName);
						resData.reduceCount();
					}
					this.useGroupArray.splice(index, 1);
					useGroup.destroyAll();
					PoolManager.Ins().push(useGroup);
				}

			}
		}
	}

	public loadRes(resName:string):boolean
	{
		if(resName == null || resName == "" || RES.hasRes(resName) == false)
		{
			LogUtils.Error("参数有误");
			return false;
		}

		if(this.resMap.has(resName) == false)
		{
			let resData = PoolManager.Ins().pop(ResData) as ResData;
			resData.packData(resName);
			this.resMap.set(resName, resData);
		}
		let resData = this.resMap.get(resName);
		resData.addCount();
		return true;
	}

	public loadResAsync(resName:string, cbFn:RES.GetResAsyncCallback, thisObj:Object)
	{
		if(resName == null || resName == "" || RES.hasRes(resName) == false || cbFn == null || thisObj == null)
		{
			LogUtils.Error("参数有误");
			return false;
		}

		RES.getResAsync(resName, ()=>{
			if(this.resMap.has(resName) == false)
			{
				let resData = PoolManager.Ins().pop(ResData) as ResData;
				resData.packData(resName);
				this.resMap.set(resName, resData);
			}
			let resData = this.resMap.get(resName);
			resData.addCount();
			cbFn.call(thisObj);
		}, this)
	}

	public desRes(resName:string):boolean
	{
		if(resName == null || resName == "" || RES.hasRes(resName) == false)
		{
			LogUtils.Error("参数有误");
			return false;
		}

		if(this.resMap.has(resName) == false)
		{
			LogUtils.Error(`没有记录 ${resName} 的引用!`);
			return false;
		}

		let resData = this.resMap.get(resName);
		resData.reduceCount();
		return true;
	}
}