class ResManager extends DataBase
{
	private resMap:Hash<string, ResData>;
	private collectArray:GroupCollectData[]; // 待加载资源组
	private useCollectArray:GroupCollectData[] // 在使用中的资源组

	private isLoading:boolean;				// 0未加载 1资源组集加载完毕 2资源组加载完
	private currCollectData:GroupCollectData;

	public READY_DERTROY_SECOND:number;
	public ERROR_LOAD_COUNT:number;

	private static instance:ResManager;
	public static Ins()
	{
		if(ResManager.instance == null)
			ResManager.instance = new ResManager();
		return ResManager.instance;
	}
	
	protected init()
	{
		this.READY_DERTROY_SECOND = 5000;
		this.ERROR_LOAD_COUNT = 5;

		this.resMap = new Hash<string, ResData>();
		this.collectArray = [];
		this.useCollectArray = [];
		this.isLoading = false;
		RES.removeEventListener(RES.ResourceEvent.GROUP_COMPLETE,this.OnResourceLoadComplete,this);
		RES.removeEventListener(RES.ResourceEvent.GROUP_PROGRESS,this.OnResourceLoadProgress,this);
		RES.removeEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR,this.OnResourceLoadError,this);
		TimerManager.Ins().addTimer(1000, this.update, this);
	}

	protected destroy()
	{
		this.collectArray = [];
		this.useCollectArray = [];
		this.isLoading = false;
		TimerManager.Ins().removeTimer(this.update, this);
		RES.removeEventListener(RES.ResourceEvent.GROUP_COMPLETE,this.OnResourceLoadComplete,this);
		RES.removeEventListener(RES.ResourceEvent.GROUP_PROGRESS,this.OnResourceLoadProgress,this);
		RES.removeEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR,this.OnResourceLoadError,this);
	}

	public loadGroup(collectArray:string[], cbFn:Function=null, thisObj:any=null, progFn:Function=null, errFn:Function=null, priority:number = null):boolean
	{
		if(collectArray == null || collectArray.length <= 0)
			return false;
		
		let GroupCollectData = neww(GroupCollectData) as GroupCollectData;
		GroupCollectData.packDate(groupNameArray, cbFn, thisObj, progFn, errFn, priority)
		this.groupCollectArray.push(GroupCollectData);
		this.groupCollectArray.sort(this.sortGroupArray);
		return GroupCollectData.uniqueCode;
	}

	public destroyGroup(uniqueCode:number)
	{

	}

	private OnResourceLoadComplete(e:RES.ResourceEvent)
	{
		if(this.currCollectData.isEnd() == true)
		{
			this.currCollectData.execCb(e);
			this.isLoading = false;
		}
	}

	private OnResourceLoadProgress(e:RES.ResourceEvent)
	{
		this.currCollectData.itemsLoaded = e.itemsLoaded;
		this.currCollectData.itemsTotal = e.itemsTotal;

		let resData:ResData;
		if(this.resMap.has(e.resItem.name) == false)
		{
			resData = neww(ResData);
			resData.packData(e.resItem.name);
			this.resMap.set(e.resItem.name, resData);
		}
		resData = this.resMap.get(e.resItem.name);
		resData.addCount();
		this.currCollectData.execProg(e);
	}

	private OnResourceLoadError(e:RES.ResourceEvent)
	{
		this.currCollectData.addErrCount();
		if(this.currCollectData.errLoadCount < this.ERROR_LOAD_COUNT)
		{
			this.reloadGroup();
		}
		else
		{
			this.loadNextGroup();
		}
	}

	private update()
	{
		if(this.isLoading == false)
		{
			let flag = this.loadNextGroup();
			this.isLoading = flag;
		}
		else
		{
			
		}
	}

	/**
	 * 加载下一个资源组
	 * 当一个资源组集里的资源组都加载完之后，就加载下一个资源组集里的资源组
	 */
	private loadNextGroup():boolean
	{
		if(this.currCollectData == null)
		{
			this.currCollectData = this.collectArray.shift();
			if(this.currCollectData == null)
				return false;
			let groupName = this.currCollectData.nextGroup();
			RES.loadGroup(groupName);
			return true;
		}
		else
		{
			let groupName = this.currCollectData.nextGroup();
			if(groupName == null) // 当前组集已经加载完毕
			{
				this.currCollectData = this.collectArray.shift();
				if(this.currCollectData == null)
					return false;
				groupName = this.currCollectData.nextGroup();
				RES.loadGroup(groupName);
				return true;
			}
			RES.loadGroup(groupName);
			return true;
		}
	}

	private reloadGroup()
	{
		let groupName = this.currCollectData.currGroup();
		RES.loadGroup(groupName);
	}

	private sortGroupArray(a:GroupCollectData, b:GroupCollectData)
	{
		return a.priority < b.priority ? -1 : 1;
	}
}