class Hash<K, V>
{
	private keyArray:K[];
	private valueArray:V[];
	public constructor()
	{
		this.init();
	}

	public init()
	{
		this.keyArray = [];
		this.valueArray = [];
	}

	public destroy()
	{
		for(let value of this.valueArray)
		{
			value = null;
		}
		for(let value of this.keyArray) // 防止key不为基础类型的情况，如对象作key
		{
			value = null;
		}
		this.valueArray.length = 0;
		this.keyArray.length = 0;
	}

	// 不支持更新
	public set(key:K, value:V)
	{
		this.keyArray.push(key);
		this.valueArray.push(value);
	}

	public remove(key:K)
	{
		let index = this.keyArray.indexOf(key);
		if(index < 0)
			return null;
		let keyItem = this.keyArray.splice(index, 1); // 所以不要用对象作key，否则就很难destroy掉
		if(keyItem["initAll"] != null)
			keyItem["initAll"]();
		return this.valueArray.splice(index, 1)[0];
	}

	public get(key:K)
	{
		let index = this.keyArray.indexOf(key);
		if(index < 0)
			return null;
		return this.valueArray[index];
	}

	public has(key:K)
	{
		return this.keyArray.indexOf(key) >= 0;
	}

	public get len()
	{
		return this.keyArray.length;
	}

	public values():V[]
	{
		return this.valueArray;
	}

	public keys():K[]
	{
		return this.keyArray;
	}
}