class ViewManager extends DataBase
{
	private viewMap:Hash<string, ViewBase>;
	protected init()
	{
		this.viewMap = new Hash<string, ViewBase>();
	}

	protected destroy()
	{
		for(let view of this.viewMap.values())
		{
			view.destroyAll();
		}
		this.viewMap = null;
	}

	public open(cls:Function, data:any=null):boolean
	{
		let className = cls.prototype.__class__;
		if(className == null)
			return false;
		
		if(this.viewMap.has(className) == true)
		{
			console.warn("面板已打开")
			return true;
		}

		try
		{
			let viewClass:any = cls;
			let view = new viewClass();
			this.viewMap.set(className, view);
			this.handView(className, data);
		}
		catch(e)
		{
			return false;
		}

		return true;
	}

	public close(cls:Function | Object):boolean
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
		
		if(className == null)
			return false;
		
		if(this.viewMap.has(className) == false)
			return true;
		
		let view = this.viewMap.remove(className);
		let layer = view.info.layer;
		if(layer == null)
			return;
		layer.removeChild(view);
		view.destroyAll();
		view = null;
		return true;
	}

	public closeAll()
	{
		let itemArray:string[] = DataUtils.CopyArray(this.viewMap.keys())
		for(let panel of itemArray)
		{
			this.close(panel)
		}
	}

	private handView(className:string, data:any=null):boolean
	{
		if(this.viewMap.has(className) == false)
			return false;
		
		let view = this.viewMap.get(className);
		let layer = view.info.layer;

		if(layer == null)
			return;
		view.initData(data);
		layer.addChild(view);
		view.open();
	}

	private static Instance:ViewManager;
	public static Ins()
	{
		if(ViewManager.Instance == null)
			ViewManager.Instance = new ViewManager();
		return ViewManager.Instance;
	}
}