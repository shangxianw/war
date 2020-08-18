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
		if(cls == null)
			return false
		let className = this.getClassName(cls)
		if(className == null)
			return false;
		
		if(this.viewMap.has(className) == true)
		{
			console.warn("面板已打开")
			return true;
		}

		try
		{
			this.handView(cls, data);
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
		let layer = view.info.layer;
		if(layer == null)
			return;
		view.closeBefore();
		layer.removeChild(view);
		view.close();
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

	private handView(cls:Function, data:any=null):boolean
	{
		let viewClass:any = cls;
		let view = new viewClass();
		let layer = view.info.layer;

		if(layer == null)
			return;
		let className = this.getClassName(cls)
		this.viewMap.set(className, view);
		view.openBefore()
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