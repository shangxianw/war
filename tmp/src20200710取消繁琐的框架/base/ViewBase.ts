interface IViewData
{
	resGroup:string[];
	resGroupId:number;
	layer:eui.UILayer;
}

abstract class ViewBase extends UIBase
{
	public constructor(skinName:string)
	{
		super(skinName);
	}

	public initData(data:any=null){};
	public abstract initView();  	// 添加到舞台之后调用
	protected abstract destroy();

	protected initAll()
	{
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
		for(let groupName of (this["info"] as IViewData).resGroup)
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