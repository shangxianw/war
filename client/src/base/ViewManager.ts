class ViewManager extends DataBase
{
	public uiMap:Hash<string, ViewBase>
	public constructor()
	{
		super();
	}

	protected init()
	{
		this.uiMap = new Hash<string, ViewBase>();
	}

	protected destroy()
	{
		for(let ui of this.uiMap.values())
		{
			(ui as UIBase).destroyAll();
		}
		this.uiMap.destroy();
		this.uiMap = null;
	}

	public open(cls:ViewBase, data:any = null)
	{
		let className = Utils.GetClassNameByObj(cls);
		if(className == null)
		{
			LogUtils.Error("不存在类名");
			return;
		}
		if(this.uiMap.has(className) == false)
		{
			try
			{
				let v:any = cls;
				let viewObj = new v();
				this.uiMap.set(className, viewObj);
			}
			catch(e)
			{
				LogUtils.Error("创建面板发生错误");
				return;
			}
		}
		this.handleView(className);
	}

	public close(panelId:number)
	{
		if(this.uiMap.has(panelId) == false)
		{
			return LogUtils.Warn(`no this panel: ${panelId}`)
		}
		let view = this.uiMap.get(panelId) as ViewBase;
		view.destroyAll();
		// if(view.Layer != null)
		// 	view.Layer.removeChild(view);
	}

	private handleView(className:string)
	{
		if(this.uiMap.has(className) == false)
		{
			LogUtils.Error(`不存在面板 ${className}`);
			return;
		}
		
		let view = this.uiMap.get(className);
		let parent = null;
		let resGroupArray = null;

		// 先加载资源，再添加面板
		// for(view)
		// {
		// ResManager.Ins().loadGroup()
		// }
	}

	private static Instance:ViewManager;
	public static Ins()
	{
		if(ViewManager.Instance == null)
			ViewManager.Instance = new ViewManager();
		return ViewManager.Instance;
	}
}