/**
 * 数据基类
 * 存在一个唯一id，以记录该对象
 * 支持数据分发，但因为该功能不是每个对象都会用到，所以用到惰性的方式
 */
abstract class DataBase implements DataBaseMixin
{
	public iii:number;
	public attrHash:Hash<string ,CBData[]>;
	public otherAttrHash:Hash<DataBase, Hash<string ,CBData[]>> // 惰性加载
	public constructor()
	{
		this.initAll();
	}

	protected init(){};
	protected abstract destroy();

	protected initAll()
	{
		this.iii = IDManager.Ins().getNewId();
		this.attrHash = new Hash<string, CBData[]>();
		this.otherAttrHash = new Hash<DataBase, Hash<string ,CBData[]>>();
		this.init();
	}

	public destroyAll()
	{
		this.removeAllAttrListener();
		this.attrHash = null;

		this.removeAllAttCB();
		this.otherAttrHash = null;

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
}