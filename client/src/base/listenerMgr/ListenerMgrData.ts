class ListenerMgrData extends DataBase
{
	public obj:egret.DisplayObject;
	public type:string;
	public cbFn:Function;
	public thisObj:any;
	public constructor()
	{
		super();
	}

	public init()
	{
		this.obj = null;
		this.type = null;
		this.cbFn = null;
		this.thisObj = null;
	}

	protected destroy()
	{
		this.obj.removeEventListener(this.type, this.cbFn, this.thisObj);
		this.obj = null
		this.type = null;
		this.cbFn = null;
		this.thisObj = null;
	}

	public packData(obj:egret.DisplayObject, type:string, cbFn:Function, thisObj:any)
	{
		this.obj = obj;
		this.type = type;
		this.cbFn = cbFn;
		this.thisObj = thisObj;
		this.obj.addEventListener(this.type, this.cbFn, this.thisObj);
		return this;
	}
}