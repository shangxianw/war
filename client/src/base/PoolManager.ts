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
		this.poolMap.forEach((value:any[], key:string)=>{
			if(value == null)
				return;
			for(let value2 of value) // 理论上这些对象应该是干净的，没有内存泄漏的
			{
				
			}
		}, this)
		this.poolMap.destroy();
		this.poolMap = null;
	}

	public push(obj:DataBase | UIBase)
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

	public pop(className:string):Object
	{
		// 需要判断className是否为可以实例化的类名
		// doSomething

		if(this.poolMap.has(className) == false)
		{
			return (new (className as any))();
		}
		let arr:any[] = this.poolMap.get(className);
		let item = arr.pop();
		if(item == null)
			return (new (className as any))();
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