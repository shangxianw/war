class MessageMgr extends DataBase
{
	public msgMap:Hash<number, MessageMgrData[]>
	protected init()
	{
		this.msgMap = new Hash<number, MessageMgrData[]>();
	}

	protected destroy()
	{
		for(let msgDataArray of this.msgMap.values())
		{
			for(let msgData of msgDataArray)
			{
				msgData.destroyAll();
			}
			msgDataArray.length = 0;
		}
		this.msgMap.destroy();
		this.msgMap = null;
	}

	public observe(type:number, cbFn:Function, thisObj:Object):boolean
	{
		if(type == null || cbFn == null || thisObj == null)
			return false;
		
		if(this.msgMap.has(type) == false)
		{
			this.msgMap.set(type, []);
		}

		let msgDataArray = this.msgMap.get(type);
		for(let msgData of msgDataArray)
		{
			if(msgData.type == type && msgData.cbFn == cbFn && msgData.thisObj == thisObj)
				return false;
		}

		let msgData = new MessageMgrData();
		msgData.packData(type, cbFn, thisObj);
		msgDataArray.push(msgData);
		return true;
	}

	public unObserve(type:number, cbFn:Function, thisObj:Object)
	{
		if(type == null || cbFn == null || thisObj == null)
			return false;
		
		if(this.msgMap.has(type) == false)
			return true;

		let msgDataArray = this.msgMap.get(type);
		let index = 0;
		for(let msgData of msgDataArray)
		{
			if(msgData.type == type && msgData.cbFn == cbFn && msgData.thisObj == thisObj)
			{
				msgData.destroyAll();
				msgDataArray.splice(index, 1);
				msgData = null;
				return true;
			}
			index++;
		}
		return false;
	}

	public fire(type:number, param:any=null)
	{
		if(type == null)
			return false;
		
		if(this.msgMap.has(type) == false)
			return false;
		
		let msgDataArray = this.msgMap.get(type);
		for(let msgData of msgDataArray)
		{
			if(msgData.type == type)
				msgData.exec(param);
		}
		return true;
	}

	private static Instance:MessageMgr;
	public static Ins()
	{
		if(MessageMgr.Instance == null)
			MessageMgr.Instance = new MessageMgr();
		return MessageMgr.Instance;
	}
}