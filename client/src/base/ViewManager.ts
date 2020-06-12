/**
 * 面板管理器
 * 关闭会销毁面板，并且删除资源，不做缓存
 */
class ViewManager extends DataBase
{
	private uiMap:Hash<string, ViewBase>;
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

	public open(cls:Function, data:any = null):boolean
	{
		let className = Utils.GetClassNameByObj(cls);
		if(className == null)
		{
			LogUtils.Error("不存在类名");
			return false;
		}

		if(this.uiMap.has(className) == true)
		{
			LogUtils.Error("面板已经打开");
			return false;
		}

		try
		{
			let v:any = cls;
			let viewObj = new v();
			this.uiMap.set(className, viewObj);
		}
		catch(e)
		{
			LogUtils.Error("创建面板发生错误");
			return false;
		}
		return this.handleView(className, data);
	}

	public close(cls:Function):boolean
	{
		let className = Utils.GetClassNameByObj(cls);
		if(className == null)
		{
			LogUtils.Error("不存在类名");
			return false;
		}
		if(this.uiMap.has(className) == false)
		{
			LogUtils.Warn(`关闭不存在的面板 ${className}`)
			return false;
		}
		
		let view = this.uiMap.get(className) as ViewBase;
		view.destroyAll();
		if(view.parent != null)
		{
			view.parent.removeChild(view);
		}
		else
		{
			LogUtils.Warn(`面板没有父级`);
			return false;
		}
		
		ResManager.Ins().destroyGroup(view.viewInfo.resGroup);
		this.uiMap.remove(className);
		view = null;
		return true;
	}

	public getView(cls:Function):ViewBase
	{
		let className = Utils.GetClassNameByObj(cls);
		if(className == null)
		{
			LogUtils.Error("不存在类名");
			return null;
		}

		if(this.uiMap.has(className) == false)
		{
			LogUtils.Warn(`不存在面板 ${className}`)
			return null;
		}
		// 有可能返回的是缓存中的面板，即该面板没有打开
		return this.uiMap.get(className);
	}

	private handleView(className:string, data:any = null):boolean
	{
		if(this.uiMap.has(className) == false)
		{
			LogUtils.Error(`不存在面板 ${className}`);
			return false
		}
		
		let view = this.uiMap.get(className);
		let parent:eui.UILayer = view.viewInfo.layer;
		let resGroup = view.viewInfo.resGroup;

		// 先加载资源，再添加面板
		if(resGroup != null && resGroup != "")
		{
			ResManager.Ins().loadGroup(resGroup, (e:RES.ResourceEvent)=>{
				view.initData(data);
				parent.addChild(view);
				view.initView();
			}, this, null, (e:RES.ResourceEvent)=>{
				LogUtils.Error(`加载面板失败 ${className}`);
			}, 0)
		}
		else
		{
			view.initData(data);
			parent.addChild(view);
			view.initView();
		}
		return true;
	}

	private static Instance:ViewManager;
	public static Ins()
	{
		if(ViewManager.Instance == null)
			ViewManager.Instance = new ViewManager();
		return ViewManager.Instance;
	}
}