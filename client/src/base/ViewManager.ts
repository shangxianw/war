class ViewManager extends DataBase
{
	public uiMap:Hash<number, UIBase>
	public constructor()
	{
		super();
	}

	protected init()
	{
		this.uiMap = new Hash<number, UIBase>();
	}

	protected destroy()
	{
		for(let ui of this.uiMap.map)
		{
			(ui as UIBase).destroyAll();
		}
		this.uiMap.destroy();
		this.uiMap = null;
	}

	public open(panelId:number, data:any = null)
	{
		if(this.uiMap.has(panelId) == false)
		{
			let viewClass:any = ViewIdConst.GetView(panelId);
			if(viewClass == null)
				return LogUtils.Warn(`no this panel : ${panelId}`);
			let newView = new viewClass();
			this.uiMap.set(panelId, newView);
		}
		let view:ViewBase = this.uiMap.get(panelId);
		view.initData(data); // 此处需要做的是添加一个loading过程
		if(view.Layer != null)
			view.Layer.addChild(view);
	}

	public close(panelId:number)
	{
		if(this.uiMap.has(panelId) == false)
		{
			return LogUtils.Warn(`no this panel: ${panelId}`)
		}
		let view:ViewBase = this.uiMap.get(panelId);
		view.destroyAll();
		if(view.Layer != null)
			view.Layer.removeChild(view);
	}

	private static Instance:ViewManager;
	public static Ins()
	{
		if(ViewManager.Instance == null)
			ViewManager.Instance = new ViewManager();
		return ViewManager.Instance;
	}
}