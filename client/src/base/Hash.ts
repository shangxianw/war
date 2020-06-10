class Hash<K, V>
{
	private map:Map<K, V>; // 需要再 tescofig.json 中添加 es2015.iterable
	public constructor()
	{
		this.init();
	}

	public init()
	{
		this.map = new Map<K, V>();
	}

	public destroy()
	{
		this.map.clear();
		this.map = null;
	}

	public set(key:K, value:V)
	{
		this.map.set(key, value);
	}

	public remove(key:K)
	{
		let item = this.map.get(key);
		this.map.delete(key);
		return item;
	}

	public get(key:K)
	{
		return this.map.get(key);
	}

	public has(key:K)
	{
		return this.map.has(key);
	}

	public forEach(cbFn:Function, thisObj:any)
	{
		if(cbFn == null || thisObj == null)
			return LogUtils.Error(`Hash：参数有误`);
		this.map.forEach((value:V, key:K, map:Map<K, V>)=>{
			cbFn.call(this, value, key, map)
		})
	}

	public get len()
	{
		return this.map.size;
	}

	public get values():V[]
	{
		let array:V[] = [];
		this.map.forEach((value:V, key:K, map:Map<K, V>)=>{
			array.push(value);
		})
		return array;
	}

	public get keys():K[]
	{
		let array:K[] = [];
		this.map.forEach((value:V, key:K, map:Map<K, V>)=>{
			array.push(key);
		})
		return array;
	}
}