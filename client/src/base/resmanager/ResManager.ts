class ResManager extends DataBase
{
	private resMap:Hash<string, ResData>;
	private groupArray:ResGroupData[]; // 待加载资源组
	private useGroupArray:ResGroupData[] // 在使用中的资源组

	private isLoading:boolean;				// 加载完一整个资源组集合才算false
	private currLoadInfo:ResGroupData;

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
		this.groupArray = [];
		this.useGroupArray = [];
		this.isLoading = false;
		RES.removeEventListener(RES.ResourceEvent.GROUP_COMPLETE,this.OnResourceLoadComplete,this);
		RES.removeEventListener(RES.ResourceEvent.GROUP_PROGRESS,this.OnResourceLoadProgress,this);
		RES.removeEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR,this.OnResourceLoadError,this);
		TimerManager.Ins().addTimer(1000, this.update, this);
	}

	protected destroy()
	{
		this.groupArray = [];
		this.useGroupArray = [];
		this.isLoading = false;
		TimerManager.Ins().removeTimer(this.update, this);
		RES.removeEventListener(RES.ResourceEvent.GROUP_COMPLETE,this.OnResourceLoadComplete,this);
		RES.removeEventListener(RES.ResourceEvent.GROUP_PROGRESS,this.OnResourceLoadProgress,this);
		RES.removeEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR,this.OnResourceLoadError,this);
	}

	public loadGroup(groupNameArray:string[], cbFn:Function=null, thisObj:any=null, progFn:Function=null, errFn:Function=null, priority:number = null):number
	{
		if(LogUtils.CheckParamValid(groupNameArray) == false)
			return null;
		
		let resGroupData = neww(ResGroupData) as ResGroupData;
		resGroupData.packDate(groupNameArray, cbFn, thisObj, progFn, errFn, priority)
		this.groupArray.push(resGroupData);
		this.groupArray.sort(this.sortGroupArray);
		return resGroupData.uniqueCode;
	}

	public destroyGroup(uniqueCode:number)
	{

	}

	private OnResourceLoadComplete(e:RES.ResourceEvent)
	{
		if(this.currLoadInfo.isEnd() == false)
		{
			let flag = this.loadNextGroupName();
			this.isLoading = flag;
		}
		else
		{
			this.currLoadInfo.execCb(e);
		}
	}

	private OnResourceLoadProgress(e:RES.ResourceEvent)
	{
		this.currLoadInfo.itemsLoaded = e.itemsLoaded;
		this.currLoadInfo.itemsTotal = e.itemsTotal;

		let resData:ResData;
		if(this.resMap.has(e.resItem.name) == false)
		{
			resData = neww(ResData);
			resData.packData(e.resItem.name);
			this.resMap.set(e.resItem.name, resData);
		}
		resData = this.resMap.get(e.resItem.name);
		resData.addCount();
		this.currLoadInfo.execProg(e);
	}

	private OnResourceLoadError(e:RES.ResourceEvent)
	{
		
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

	private loadNextGroup():boolean
	{
		this.currLoadInfo = this.groupArray.shift();
		if(this.currLoadInfo == null)
			return false;
		let groupName = this.currLoadInfo.currGroup();
		if(groupName == null)
			return false;
		RES.loadGroup(groupName);
		return true;
	}

	private loadNextGroupName()
	{
		let groupName = this.currLoadInfo.nextGroup();
		if(groupName == null)
			return false;
		RES.loadGroup(groupName);
		return true;
	}

	private sortGroupArray(a:ResGroupData, b:ResGroupData)
	{
		return a.priority < b.priority ? -1 : 1;
	}
}