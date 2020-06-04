class PoolManager // 战斗的对象和主城的对象应该分开
{
	private hash:Hash<string, any[]>;
	public constructor()
	{

	}

	public init()
	{
		this.hash = new Hash<string, any[]>();
	}

	public destroy()
	{
		let value:any[];
		for(let key in this.hash)
		{
			value = this.hash.get(key);
			if(value == null)
				continue;
			for(let value2 of value)
			{
				if(value2[STR_CONST.DESTROY] != null && typeof(value2[STR_CONST.DESTROY]) == STR_CONST.FUNCTION)
				{
					value2[STR_CONST.DESTROY](); // 不知道要不要帮他destroy掉，因为理论上推到对象池之前应该自行destroy一遍。
					value2 = null;
				}
			}
		}
		this.hash.destroy();
		this.hash = null;
	}

	public push(obj:any)
	{
		let className = obj.name;
		if(this.hash.has(className) == false)
			this.hash.set(className, new Array());
		let arr:any[] = this.hash.get(className);
		arr.push(obj);
	}

	public pop(className:any)
	{
		if(this.hash.has(className) == false)
			return new className();
		let arr:any[] = this.hash.get(className);
		return arr.pop();
	}

	public pushArray(arr:Array<any>)
	{
		if(this.hash.has(STR_CONST.ARRAY) == false)
			this.hash.set(STR_CONST.ARRAY, new Array());
		let arr2:any[] = this.hash.get(STR_CONST.ARRAY);
		arr2.push(arr);
	}

	public popArray()
	{
		if(this.hash.has(STR_CONST.ARRAY) == false)
			return [];
		let arr:any[] = this.hash.get(STR_CONST.ARRAY);
		return arr.pop();
	}

	private static Instance:PoolManager;
	public static Ins()
	{
		if(PoolManager.Instance == null)
			PoolManager.Instance = new PoolManager();
		return PoolManager.Instance;
	}
}