class Hash<K,V>
{
	private map:any;

	public constructor()
	{
		this.init();
	}

	public init()
	{
		this.map = {};
	}

	public destory():this
	{
		this.clear();
		this.map = null;
		return this;
	}

	public set(key: K, value: V): boolean
	{
		if(key == null)
			return false;
		if(this.map[key] != null)
			return false;
		
		this.map[key] = value;
		return true;
	}

	public remove(key: K): V
	{
		if(key == null)
			return null;
		
		let v = this.map[key];
		delete this.map[key];
		return v;
	}

	public clear()
	{
		let item;
		for(let key in this.map)
		{
			item = this.map[key];
			delete this.map[key];
			item = null;
		}
	}

	public get(key: K):V
	{
		return this.map[key];
	}

	public has(key: K):boolean
	{
		return this.map[key] != null;
	}

	public get keys(): K[]
	{
		let arr:Array<any> = [];
		for(let value in this.map)
		{
			arr.push(value);
		}
		return arr;
	}

	public get values(): V[]
	{
		let arr:Array<any> = [];
		for(let value in this.map)
		{
			arr.push(this.map[value]);
		}
		return arr;
	}

	public get size()
	{
		return this.keys.length;
	}
}