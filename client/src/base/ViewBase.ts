class ViewData extends DataBase
{
	protected static ID:number;
	public resGroup:string[];
	public resGroupId:number;
	public layer:eui.UILayer;

	protected init()
	{
		
	}

	protected destroy()
	{
		
	}
	protected initAll()
	{
		super.initAll();
	}

	public destroyAll()
	{
		super.destroyAll();
	}
}

abstract class ViewBase extends UIBase
{
	public viewInfo:ViewData;
	public constructor(skinName:string, data:any)
	{
		super(skinName, data);
	}

	public abstract initView();  	// 添加到舞台之后调用
	public abstract initData(data:any);

	protected initAll(data:any)
	{
		this.viewInfo = new data();
		this["info"] = this.viewInfo;
		super.initAll();
	}

	public destroyAll()
	{
		super.destroyAll();
	}

	// ---------------------------------------------------------------------- 检测skin的资源有没被引用
	private skinSourceArray:string[];
	private groupSourceArray:string[];
	public checkSkinSourceRef()
	{
		this.skinSourceArray = [];
		this.groupSourceArray = [];
		this.findChild(this);
		this.calcGroupSource();
		this.compareSource();
	}

	public findChild(obj:egret.DisplayObjectContainer)
	{
		let child:any;
		for(let i=0, len=obj.numChildren; i<len; i++)
		{
			child = obj.getChildAt(i);
			let sourceStr = child["source"];
			if(sourceStr != null && sourceStr != "")
			{
				this.skinSourceArray.push(sourceStr)
			}
			
			if(child.numChildren > 0)
				this.findChild(child);
		}
	}

	private calcGroupSource()
	{
		for(let groupName of this.viewInfo.resGroup)
		{
			let resItemArray = RES.getGroupByName(groupName);
			for(let resItem of resItemArray)
			{
				this.groupSourceArray.push(resItem.name);
			}
		}
	}

	private compareSource()
	{
		for(let src of this.skinSourceArray)
		{
			if(this.groupSourceArray.indexOf(src) < 0)
				LogUtils.Warn(`【面板skin的资源未加到资源组】skin:${this.skinName} resName:${src}`);
		}
	}
}