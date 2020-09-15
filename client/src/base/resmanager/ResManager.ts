/**
 * 资源管理器
 * 当使用load相关方法时，会给对应的资源引用+1。
 * 当使用destroy相关方法时，会给对应的资源引用-1。
 * 资源引用为0时，并不会立刻销毁，而是等到一定时间才进行判断。
 * 有个缺点：如果出现资源未销毁的情况，这并不知道是谁没有销毁
 */
class ResManager extends DataBase
{
	private resMap:Hash<string, ResData>;
	private collectArray:CollectData[];   // 待加载资源组集
	private useCollectArray:CollectData[] // 已加载资源组集
	private currCollectData:CollectData;  // 正在加载的资源组集
	private waitDestroyArray:number[];    // 待销毁的资源(处理正在加载的情况)
	private isLoading:boolean;

	public READY_DERTROY_SECOND:number;
	public ERROR_LOAD_COUNT:number;
	public DESTROY_ONCE_COUNT:number;

	private static instance:ResManager;
	public static Ins()
	{
		if(ResManager.instance == null)
			ResManager.instance = new ResManager();
		return ResManager.instance;
	}
	
	public init()
	{
		this.READY_DERTROY_SECOND = 5000;
		this.ERROR_LOAD_COUNT = 5;
		this.DESTROY_ONCE_COUNT = 20;
		this.isLoading = false;

		this.resMap = new Hash<string, ResData>();
		this.collectArray = [];
		this.useCollectArray = [];
		this.waitDestroyArray = []
		RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE,this.OnResourceLoadComplete,this);
		RES.addEventListener(RES.ResourceEvent.GROUP_PROGRESS,this.OnResourceLoadProgress,this);
		RES.addEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR,this.OnResourceLoadError,this);
		TimerManager.Ins().addTimer(200, this.update, this);
	}

	public destroy()
	{
		super.destroy();
		this.isLoading = false;
		DataUtils.DestroyDataBaseArray(this.collectArray);
		DataUtils.DestroyDataBaseArray(this.useCollectArray);
		this.waitDestroyArray =[];
		TimerManager.Ins().removeTimer(this.update, this);
		RES.removeEventListener(RES.ResourceEvent.GROUP_COMPLETE,this.OnResourceLoadComplete,this);
		RES.removeEventListener(RES.ResourceEvent.GROUP_PROGRESS,this.OnResourceLoadProgress,this);
		RES.removeEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR,this.OnResourceLoadError,this);
	}

	public loadGroup(collectArray:string[], cbFn:Function=null, thisObj:any=null, progFn:Function=null, errFn:Function=null, priority:number = null):number
	{
		if(collectArray == null)
		{
			LogUtils.Error(`【资源组集参数错误】`);
			return null;
		}

		if(collectArray.length <= 0)
		{
			if(cbFn != null && thisObj != null)
				cbFn.call(thisObj);
			return null;
		}

		for(let groupName of collectArray)
		{
			if(groupName == null || groupName == "" || RES.getGroupByName(groupName).length <= 0)
			{
				LogUtils.Error(`【资源组集参数错误】${collectArray.toString()} 可能包含不存在资源组，或者资源组子项为空`);
				return null;
			}
		}

		// 保存数据
		let collectData = new CollectData
		collectData.packDate(collectArray, cbFn, thisObj, progFn, errFn, priority);
		this.collectArray.push(collectData);
		this.collectArray.sort(this.sortByPriority);

		// 添加引用
		for(let groupName of collectArray)
		{
			for(let resItem of RES.getGroupByName(groupName))
			{
				let resName = resItem.name;
				let resData:ResData;
				if(this.resMap.has(resName) == false)
				{
					resData = new ResData()
					resData.packData(resName);
					this.resMap.set(resName, resData);
				}
				resData = this.resMap.get(resName);
				resData.addRefCount();
			}
		}
		LogUtils.Log(`【资源组集加入到列表】id:${collectData.hasCode} ${collectArray.toString()}`)
		return collectData.hasCode;
	}

	public destroyGroup(hasCode:number)
	{
		if(hasCode == null || hasCode <= 0)
		{
			LogUtils.Error(`【资源组集参数错误】`);
			return false;
		}

		let cData:CollectData;
		for(let collectData of this.collectArray)
		{
			if(collectData.hasCode == hasCode)
			{
				cData = collectData;
				let index = this.collectArray.indexOf(collectData);
				this.collectArray.splice(index, 1);
				break;
			}
		}
		if(cData == null)
		{
			for(let collectData of this.useCollectArray)
			{
				if(collectData.hasCode == hasCode)
				{
					cData = collectData;
					let index = this.useCollectArray.indexOf(collectData);
					this.useCollectArray.splice(index, 1);
					break;
				}
			}
		}

		if(cData == null)
		{
			if(this.currCollectData.hasCode == hasCode)
			{
				this.waitDestroyArray.push(hasCode);
				LogUtils.Warn(`【资源组集正在在加载中，稍后释放】id:${hasCode}`);
				return true;
			}
			else
			{
				LogUtils.Warn(`【销毁不存在的资源组集】id:${hasCode}`);
				return true;
			}
		}
		
		// 减少引用
		this.reduceRefCount(cData);
		cData.destroy();
		cData = null
		cData = null;
		LogUtils.Log(`【销毁资源组集】id:${hasCode}`)
		return true;
	}

	public destroyAllGroup()
	{
		let cData:CollectData;
		for(let collectData of this.collectArray)
		{
			cData = collectData;
			let index = this.collectArray.indexOf(collectData);
			this.collectArray.splice(index, 1);
		}
		if(cData != null)
			this.destroyGroup(cData.hasCode)
	}

	public loadRes(resName:string)
	{
		if(resName == null || resName == "")
		{
			LogUtils.Warn("【加载资源错误】参数错误");
			return null;
		}

		if(RES.hasRes(resName) == false)
		{
			LogUtils.Warn("【加载资源错误】资源管理器不存在该配置");
			return null;
		}

		let resItem = RES.getRes(resName);
		if(resItem == null)
		{
			LogUtils.Log(`【资源未先加载到内存】resName:${resName}`);
			return null;
		}

		let resData:ResData;
		if(this.resMap.has(resName) == false)
		{
			resData = new ResData()
			resData.packData(resName);
			this.resMap.set(resName, resData);
		}
		resData = this.resMap.get(resName);
		resData.addRefCount();

		LogUtils.Log(`【加载资源】resName:${resName}`);
		return resItem;
	}

	public loadResAsync(resName:string, cbFn:Function , thisObj:Object)
	{
		let callBack = function(data, key)
		{
			let resData:ResData;
			if(this.resMap.has(resName) == false)
			{
				resData = new ResData()
				resData.packData(resName);
				this.resMap.set(resName, resData);
			}
			resData = this.resMap.get(resName);
			resData.addRefCount();
			cbFn.call(thisObj, data, key)
		}
		RES.getResAsync(resName, callBack, this)
	}

	public destroyRes(resName:string)
	{
		if(resName == null || resName == "")
		{
			LogUtils.Warn("【加载资源错误】参数错误");
			return null;
		}

		if(RES.hasRes(resName) == false)
		{
			LogUtils.Warn("【加载资源错误】资源管理器不存在该配置");
			return null;
		}

		let resData:ResData;
		if(this.resMap.has(resName) == false)
		{
			LogUtils.Log(`【销毁资源】resName:${resName}`);
			return true;
		}
		resData = this.resMap.get(resName);
		resData.reduceRefCount(egret.getTimer());
		LogUtils.Log(`【销毁资源】resName:${resName}`);
		return true;
	}

	// ----------------------------------------------------------------------
	private OnResourceLoadComplete(e:RES.ResourceEvent)
	{
		LogUtils.Log(`【加载资源组完成】id:${this.currCollectData.hasCode} groupName:${e.groupName}`);
		this.isLoading = false;
		if(this.currCollectData.isEnd() == true)
		{
			if(this.waitDestroyArray.length <= 0)
			{
				this.currCollectData.execCb(e);
				this.useCollectArray.push(this.currCollectData);
				LogUtils.Log(`【加载资源组集完成】id:${this.currCollectData.hasCode}`);
			}
			else
			{
				let i=0;
				for(let hasCode of this.waitDestroyArray)
				{
					if(this.currCollectData.hasCode == hasCode)
					{
						this.waitDestroyArray.splice(i, 1);
						this.reduceRefCount(this.currCollectData);
						this.currCollectData.destroy();
						this.currCollectData = null
						LogUtils.Log(`【销毁已完成的资源组集】id:${this.currCollectData.hasCode}`);
						break;
					}
					i++;
				}
			}
			this.currCollectData = null;
		}
	}

	private OnResourceLoadProgress(e:RES.ResourceEvent)
	{
		this.currCollectData.itemsLoaded = e.itemsLoaded;
		this.currCollectData.itemsTotal = e.itemsTotal;
		this.currCollectData.execProg(e);
		LogUtils.Log(`【加载资源】id:${this.currCollectData.hasCode} groupName:${e.groupName} resName:${e.resItem.name}`)
	}

	private OnResourceLoadError(e:RES.ResourceEvent)
	{
		this.currCollectData.addErrCount();
		if(this.currCollectData.errLoadCount <= this.ERROR_LOAD_COUNT)
		{
			LogUtils.Warn(`【重新加载资源组】id:${this.currCollectData.hasCode} groupName:${e.groupName} count:${this.currCollectData.errLoadCount}`);
			this.reloadGroup(e.groupName);
		}
		else
		{
			LogUtils.Error(`【加载资源组错误】id:${this.currCollectData.hasCode} groupName:${e.groupName} count:${this.currCollectData.errLoadCount}`);
			this.currCollectData.execErr(e)
			if(this.currCollectData.isEnd() == true)
				this.currCollectData = null;
			this.loadNextGroup();
		}
	}

	private update()
	{
		if(this.isLoading == false)
		{
			this.isLoading = this.loadNextGroup();
		}

		let destroyTime = egret.getTimer();
		let destroyCount:number = 0;
		let array = this.resMap.values();
		for(let resData of array)
		{
			if(resData.refCount <= 0 && destroyTime >= resData.destroyTime && RES.getRes(resData.resName) != null)
			{
				LogUtils.Log(`【销毁资源】resName:${resData.resName}`);
				RES.destroyRes(resData.resName);
				this.resMap.remove(resData.resName);
				resData.destroy();
				resData = null
				destroyCount++;
			}
			if(destroyCount >= this.DESTROY_ONCE_COUNT) // 防止卡顿
				break;
		}
		return true;
	}

	private loadNextGroup():boolean
	{
		if(this.currCollectData == null) // 加载下一个资源组集的第一个资源组
		{
			if(this.collectArray.length <= 0)
				return false;
			this.currCollectData = this.collectArray.shift();
			let groupName = this.currCollectData.currGroup();
			RES.loadGroup(groupName);
			LogUtils.Log(`【加载资源组】id:${this.currCollectData.hasCode} groupName:${groupName}`);
			return true;
		}
		else	// 加载当前资源组集的下一个资源组
		{
			let groupName = this.currCollectData.nextGroup();
			RES.loadGroup(groupName);
			LogUtils.Log(`【加载资源组】id:${this.currCollectData.hasCode} groupName:${groupName}`);
			return true;
		}
	}

	private reloadGroup(groupName:string)
	{
		RES.loadGroup(groupName);
	}

	private reduceRefCount(collectData:CollectData)
	{
		let currTime = egret.getTimer();
		for(let groupName of collectData.groupNameArray)
		{
			for(let resItem of RES.getGroupByName(groupName))
			{
				let resName = resItem.name;
				let resData:ResData;
				if(this.resMap.has(resName) == false)
					continue;
				resData = this.resMap.get(resName);
				resData.reduceRefCount(currTime);
			}
		}
	}

	private sortByPriority(a:CollectData, b:CollectData)
	{
		return a.priority < b.priority ? -1 : 1;
	}
}