/**
 * 面板管理器
 * 打开就创建，关闭即销毁，隐藏也不会从舞台移除，不做缓存
 * 打开一个面板之前会加载所需资源
 */
class ViewManager extends DataBase
{
	private viewMap:Hash<string, ViewBase>;
	public init()
	{
		this.viewMap = new Hash<string, ViewBase>();
	}

	public destroy()
	{
		for(let view of this.viewMap.values())
		{
			view.destroy();
		}
		this.viewMap = null;
	}

	public open(cls:Function, ...param:any[]):boolean
	{
		if(cls == null)
			return false
		let className = this.getClassName(cls)
		if(className == null)
			return false;
		
		if(this.viewMap.has(className) == true)
			return true;

		try
		{
			this.handView.apply(this, [].concat(cls, param));
		}
		catch(e)
		{
			return false;
		}

		return true;
	}

	public close(cls:Function | Object | string):boolean
	{
		let className:string = this.getClassName(cls)
		
		if(className == null)
			return false;
		
		if(this.viewMap.has(className) == false)
			return true;
		
		let view = this.viewMap.remove(className);
		let layer = view.layer
		if(layer == null)
			return;
		layer.removeChild(view);
		if(view.info.resGroupKey != null)
			ResManager.Ins().destroyGroup(view.info.resGroupKey)
		view = null;
		return true;
	}

	public show(cls:Function | Object | string)
	{
		let className = this.getClassName(cls)
		if(className == null)
			return false;
		if(this.viewMap.has(className) == false)
			return false
		let view = this.viewMap.get(className)
		view.visible = true;
	}

	public hide(cls:Function | Object | string)
	{
		let className = this.getClassName(cls)
		if(className == null)
			return false;
		if(this.viewMap.has(className) == false)
			return false
		let view = this.viewMap.get(className)
		view.visible = false;
	}

	public closeAll()
	{
		let itemArray:string[] = DataUtils.CopyArray(this.viewMap.keys())
		for(let panel of itemArray)
		{
			this.close(panel)
		}
	}

	private handView(cls:Function, ...param:any[]):boolean
	{
		let viewClass:any = cls;
		let view:ViewBase = new viewClass(param);
		view.resKey = ResManager.Ins().loadGroup(view.resGroup, ()=>{
			let className = this.getClassName(cls)
			this.viewMap.set(className, view);
			view.layer.addChild(view);
		}, this)
		return true;
	}

	private getClassName(cls:Function | Object | string)
	{
		let className:string;
		if(typeof cls == "function")
		{
			className = cls.prototype.__class__;
		}
		else if(typeof cls == "object")
		{
			className = cls.constructor.prototype.__class__;
		}
		else
		{
			className = cls
		}
		return className;
	}

	private static Instance:ViewManager;
	public static Ins()
	{
		if(ViewManager.Instance == null)
			ViewManager.Instance = new ViewManager();
		return ViewManager.Instance;
	}
}