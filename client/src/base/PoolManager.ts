/**
 * 对象池管理
 * push之前先要自行 destroy 一波，以确保没有内存泄漏
 * 
 */
class PoolManager extends DataBase
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
			return (new (cls as any))();
		item.init(); // 因为是二次使用，所以不会调用init的，需要手动调用一次。
		return item;
	}

	private static Instance:PoolManager;
	public static Ins()
	{
		if(PoolManager.Instance == null)
			PoolManager.Instance = new PoolManager();
		return PoolManager.Instance;
	}

	// ---------------------------------------------------------------------- test
	// 检查内部对象是否还有监听器
	private checkHasListener()
	{

	}
}