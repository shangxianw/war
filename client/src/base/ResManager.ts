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
		this.referenceCount++;
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

	public packData(groupName:string, priority:number)
	{
		this.groupName = groupName;
		this.priority = priority;
		return this;
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
		this.DESTROY_ONCE_COUNT = 20; // 一次销毁n个
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
		TimerManager.Ins().addTimer(100, this.update, this);
	}

	protected destroy()
	{
		for(let resData of this.resMap.values)
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

	public loadGroup(groupName:string, priority:number = null)
	{
		if(groupName == null)
		{
			return LogUtils.Error(`${Utils.GetClassNameByObj(this)} : loadGroup 方法参数有误`);
		}
		
		let grouInfo = PoolManager.Ins().pop(ResGroupData) as ResGroupData;

		if(priority != null) // 如果有优先级，数字越小优先级越高，最高位0
		{
			grouInfo.packData(groupName, priority);
		}
		else
		{
			grouInfo.packData(groupName, this.groupArray.length);
		}
		this.groupArray.push(grouInfo);
	}

	public destroyGroup(groupName:string)
	{
		if(groupName == null)
		{
			return LogUtils.Error(`${Utils.GetClassNameByObj(this)} : loadGroup 方法参数有误`);
		}

		// 如果这个资源组正在加载
		let resInfo:ResData;
		if(this.currLaodInfo.groupName == groupName)
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
				this.groupArray.splice(index, 1);
				return;
			}
			index++;
		}
	}

	private OnResourceLoadComplete(e:RES.ResourceEvent)
	{
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
		}

	}

	private OnResourceLoadError(e:RES.ResourceEvent)
	{
		this.currLaodInfo.errLoadCount++;
		if(this.currLaodInfo.errLoadCount >= this.ERROR_LOAD_COUNT)
		{
			LogUtils.Error(`${Utils.GetClassNameByObj(this)} : ${this.currLaodInfo.groupName} 加载失败`); // 为啥没有判断资源组是否存在的API
			this.loadEnd();
			return;
		}
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
		
		let array = this.resMap.values; // 必须复制一个出来，因为在遍历的过程中有可能删掉自己，导致数组长度不等。
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

			if(egret.getTimer() + this.READY_DERTROY_SECOND*1000 < resData.destroyTime)
				continue;
			
			RES.destroyRes(resData.resName);
			destroyCount++;
			if(destroyCount >= this.DESTROY_ONCE_COUNT) // 防止卡顿
				break;
		}

		this.destroyWaitGroup();
		return true;
	}

	private loadNextGroup():boolean
	{
		this.currLaodInfo = this.groupArray.shift();
		if(this.currLaodInfo == null || this.currLaodInfo.groupName == "")
		{
			LogUtils.Error(`${Utils.GetClassNameByObj(this)} 不存在资源组名 ${this.currLaodInfo.groupName}`); // 为啥没有判断资源组是否存在的API
			return false;
		}
		RES.loadGroup(this.currLaodInfo.groupName);
		return true;
	}

	private loadEnd()
	{
		let item = this.currLaodInfo
		this.useGroupArray.push(item);
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

			for(let useGroup of this.useGroupArray)
			{
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
				}

			}
		}
	}
}