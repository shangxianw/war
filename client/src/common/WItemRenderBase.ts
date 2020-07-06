abstract class WItemRenderBase extends eui.ItemRenderer implements DataBaseMixin, UIBaseMixin
{
	public iii:number;
	public attrHash:Hash<string ,CBData[]>;
	public otherAttrHash:Hash<DataBase, Hash<string ,CBData[]>>
	public touchList:TouchData[];
	public constructor(skinName:string = null)
	{
		super();
		if(skinName != null)
			this.skinName = skinName;
		this.initAll();
	}

	protected init(){};
	protected abstract destroy();

	public initAll()
	{
		this.iii = IDManager.Ins().getNewId();
		this.attrHash = new Hash<string, CBData[]>();
		this.otherAttrHash = new Hash<DataBase, Hash<string ,CBData[]>>();
		this.touchList = [];
		let cls = egret.getDefinitionByName(Utils.GetClassNameByObj(this) + "Data");
		if(cls != null)
			this["info"] = new cls();
		this.init();
	}

	public destroyAll()
	{
		this.removeAllAttrListener();
		this.attrHash = null;

		this.removeAllAttCB();
		this.otherAttrHash = null;

		this.removeAllEvent();
		this.touchList = null;

		this.destroy();
	}
	
	// ---------------------------------------------------------------------- 注册属性
	public addAttrListener:(propName:string, cbFn:Function, thisObj:any)=>boolean
	// ---------------------------------------------------------------------- 移除属性
	public removeAttrListener:(propName:string, cbFn:Function, thisObj:any)=>boolean
	// ---------------------------------------------------------------------- 移除属性监听
	public removeAllAttrListener:()=>void
	// ---------------------------------------------------------------------- 发射属性
	public setAttr:(propName:string, value:any)=>void
	// ---------------------------------------------------------------------- 注册属性2
	public flushAttr:(propName:string)=>void
	// ---------------------------------------------------------------------- 给某对象注册属性
	public addAttrCB:(obj:DataBase, propName:string, cbFn:Function, thisObj:any)=>boolean
	// ---------------------------------------------------------------------- 给某对象移除属性
	public removeAttrCB:(obj:DataBase, propName:string, cbFn:Function, thisObj:any)=>boolean
	// ---------------------------------------------------------------------- 移除所有某对象属性
	public removeAllAttCB:()=>void
	// ---------------------------------------------------------------------- 访问器
	// public get hash():Hash<string, CBData[]>{return null;}
	// public get otherAttrHash():Hash<DataBase, Hash<string ,CBData[]>>{return null;}

	// ---------------------------------------------------------------------- 注册事件相关
	public addEvent:(target:egret.DisplayObject, type:string, cbFn:Function, thisObj:any)=>boolean
	public removeEvent:(target:egret.DisplayObject, type:string, cbFn:Function, thisObj:any)=>boolean
	public removeAllEvent:()=>void
}