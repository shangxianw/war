class WarPool extends DataBase
{
	private poolMap:Hash<string, any[]>;
	protected init()
	{
		this.poolMap = new Hash<string, any[]>();
	}

	public destroy()
	{
		for(let value of this.poolMap.values())
		{
			if(value == null)
				return;
			for(let value2 of value) // 理论上这些对象应该是干净的，没有内存泄漏的
			{
				
			}
		}
		this.poolMap.destroy();
		this.poolMap = null;
	}

	public push(obj:any) // DataBase | UIBase
	{
		if(obj == null)
			return LogUtils.Warn(`PoolManager:传入了一个空对象`);

		let className = Utils.GetClassNameByObj(obj);
		if(this.poolMap.has(className) == false)
		{
			this.poolMap.set(className, new Array());
		}
		
		let arr:any[] = this.poolMap.get(className);
		if(arr.indexOf(obj) < 0)
			arr.push(obj);
	}

	public pop(cls:any):any
	{
		// 需要判断className是否为可以实例化的类名
		// doSomething

		if(this.poolMap.has(cls.name) == false)
		{
			return new cls();
		}
		let arr:any[] = this.poolMap.get(cls.name);
		let item = arr.pop();
		if(item == null)
			return (new (cls as any)); // (new (cls as any))(); 如果这样写，就会先new，然后返回一个对象，在执行()的操作。
		item.init(); // 因为是二次使用，所以不会调用init的，需要手动调用一次。
		return item;
	}

	private static Instance:WarPool;
	public static Ins()
	{
		if(WarPool.Instance == null)
			WarPool.Instance = new WarPool();
		return WarPool.Instance;
	}

	// ---------------------------------------------------------------------- test
	// 检查内部对象是否还有监听器
	private checkHasListener()
	{

	}
}