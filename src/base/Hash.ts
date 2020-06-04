class Hash<K, V>
{
	private _map:any;
	public constructor()
	{
		this.init();
	}

	public init()
	{
		this.map = {};
	}

	public destroy()
	{
		for(let k in this.map)
		{
			if(this.map[k] == null)
				continue;
			this.map[k] = null; // 在考虑要不要帮其执行destroy操作
		}
		this.map = null;
	}

	public set(key:K, value:V)
	{
		this.map[key] = value;
	}

	public remove(key:K)
	{
		this.map[key] = null;
		delete this.map[key];
	}

	public get(key:K)
	{
		return this.map[key]
	}

	public has(key:K)
	{
		return this.map[key] != null;
	}

	// 这种做法其实很无语，因为先是遍历一遍组成数组后返回到外面，外面又循环一遍。
	public get values():V[]
	{
		let arr:V[] = [];
		for(let key in this.map)
		{
			arr.push(this.map[key]);
		}
		return arr;
	}

	public get map()
	{
		return this._map;
	}

	public set map(value:any)
	{
		this._map = value;
	}
}