/**
 * 数据基类
 * 存在一个唯一id，以记录该对象
 * 支持数据分发，但因为该功能不是每个对象都会用到，所以用到惰性的方式
 */
abstract class DataBase
{
	public hasCode:number;
	private _attrHash:Hash<string ,CBData[]>; // 惰性加载
	private _otherAttrHash:Hash<DataBase, Hash<string ,CBData[]>>
	public constructor()
	{
		this.initAll();
	}

	protected abstract init();
	protected abstract destroy();

	protected initAll()
	{
		this.hasCode = IDManager.Ins().getNewId();
		this.init();
	}

	public destroyAll()
	{
		for(let value of this.hash.values())
		{
			for(let cbData of value)
			{
				cbData.destroy();
				cbData = null;
			}
			value.length = 0;
		}
		this.hash.destroy();
		this._attrHash = null;

		for(let otherAttrHash of this.otherAttrHash.values())
		{
			for(let cbDataArray of otherAttrHash.values())
			{
				for(let cbData of cbDataArray)
				{
					cbData.destroy();
					cbData = null;
				}
				cbDataArray.length = 0;
			}
			otherAttrHash.destroy();
			otherAttrHash = null;
		}
		this.otherAttrHash.destroy();
		this._otherAttrHash = null;

		this.destroy();
	}

	// ---------------------------------------------------------------------- 注册属性
	public addAttrListener(propName:string, cbFn:Function, thisObj:any, runImmediately:boolean=true, param:any = null):boolean
	{
		if(LogUtils.CheckParamValid(propName, cbFn, thisObj) == false)
			return false;

		if(this.hash.has(propName) == false)
		{
			this.hash.set(propName, []);
		}
		
		let arr:CBData[] = this.hash.get(propName);
		for(let cbData of arr)
		{
			if(cbData.cbFn == cbFn && cbData.thisObj == thisObj)
			{
				LogUtils.Warn(`${Utils.GetClassNameByObj(this)} : ${thisObj} 重复注册 ${propName}`);
				return false;
			}
		}

		let cbData = (new CBData).packData(cbFn, thisObj, param);
		arr.push(cbData);
		if(runImmediately == true)
			cbData.exec()
		return true;
	}

	// ---------------------------------------------------------------------- 移除属性
	public removeAttrListener(propName:string, cbFn:Function, thisObj:any):boolean
	{
		if(LogUtils.CheckParamValid(propName, cbFn, thisObj) == false)
			return false;

		if(this.hash.has(propName) == false)
		{
			// LogUtils.Warn(`${Utils.GetClassNameByObj(this)} : ${thisObj} 没有注册 ${propName}`);
			return true;
		}
		
		let arr:CBData[] = this.hash.get(propName),
			cbData:CBData;
		for(let i=0, len=arr.length; i<len; i++)
		{
			cbData = arr[i];
			if(cbData == null)
			{
				LogUtils.Warn(`${Utils.GetClassNameByObj(this)} : 发现空对象`);
				continue;
			}

			if(cbData.cbFn == cbFn && cbData.thisObj == thisObj)
			{
				arr.splice(i, 1);
				cbData.destroy();
				cbData = null;
				return true;
			}
		}
		
		LogUtils.Warn(`${Utils.GetClassNameByObj(this)} : ${this} 没有注册 ${propName}`);
		return false; //没有注册
	}

	// ---------------------------------------------------------------------- 发射属性
	public setAttr(propName:string, value:any)
	{
		if(LogUtils.CheckParamValid(propName) == false)
			return false;

		Object.defineProperty(this, propName, 
		{
			value : value,
			writable: true
		})
		this.updateAttr(propName);
	}

	// ---------------------------------------------------------------------- 注册属性2
	public updateAttr(propName:string)
	{
		if(LogUtils.CheckParamValid(propName) == false)
			return false;

		if(this.hash.has(propName) == false)
		{
			LogUtils.Warn(`${Utils.GetClassNameByObj(this)} : 没有注册 ${propName}`);
		}

		for(let value of this.hash.values())
		{
			if(value == null)
			{
				return LogUtils.Warn(`${Utils.GetClassNameByObj(this)} : 发现空对象`);
			}

			for(let cbData of value)
			{
				cbData.exec();
			}
		}
	}

	// ---------------------------------------------------------------------- 给某对象注册属性
	public addAttrCB(obj:DataBase, propName:string, cbFn:Function, thisObj:any, runImmediately:boolean=true, param:any = null):boolean
	{
		if(LogUtils.CheckParamValid(obj, propName, cbFn, thisObj) == false)
			return false;
		
		if(this.otherAttrHash.has(obj) == false)
		{
			this.otherAttrHash.set(obj, new Hash<string ,CBData[]>());
		}

		let otherHash = this.otherAttrHash.get(obj);
		if(otherHash.has(propName) == false)
		{
			otherHash.set(propName, []);
		}

		let arr:CBData[] = otherHash.get(propName);
		for(let cbData of arr)
		{
			if(cbData.cbFn == cbFn && cbData.thisObj == thisObj)
			{
				LogUtils.Warn(`${Utils.GetClassNameByObj(this)} : ${thisObj} 重复注册 ${propName}`);
				return false;
			}
		}

		let cbData = (new CBData).packData(cbFn, thisObj, param);
		arr.push(cbData);
		if(runImmediately == true)
			cbData.exec()
		return true;
	}

	// ---------------------------------------------------------------------- 给某对象移除属性
	public removeAttrCB(obj:DataBase, propName:string, cbFn:Function, thisObj:any):boolean
	{
		if(LogUtils.CheckParamValid(obj, propName, cbFn, thisObj) == false)
			return false;
		
		if(this.otherAttrHash.has(obj) == false)
		{
			return true;
		}

		let otherHash = this.otherAttrHash.get(obj);
		if(otherHash.has(propName) == false)
		{
			return true;
		}

		let arr:CBData[] = otherHash.get(propName);
		for(let cbData of arr)
		{
			if(cbData.cbFn == cbFn && cbData.thisObj == thisObj)
			{
				return true;
			}
		}
		LogUtils.Warn(`${Utils.GetClassNameByObj(this)} : ${this} 没有注册 ${propName}`);
		return false;
	}

	// ---------------------------------------------------------------------- 访问器
	private get hash():Hash<string, CBData[]>
	{
		if(this._attrHash == null)
			this._attrHash = new Hash<string, CBData[]>();
		return this._attrHash;
	}

	private get otherAttrHash():Hash<DataBase, Hash<string ,CBData[]>>
	{
		if(this._otherAttrHash == null)
			this._otherAttrHash = new Hash<DataBase, Hash<string ,CBData[]>>();
		return this._otherAttrHash;
	}
}

class CBData
{
	public thisObj:any;
	public cbFn:Function;
	public param:any;
	public constructor()
	{

	}

	public init()
	{

	}

	public destroy()
	{

	}

	public packData(cbFn:Function, thisObj:any, param:any = null)
	{
		this.cbFn = cbFn;
		this.thisObj = thisObj;
		this.param = param;
		return this;
	}

	public exec(query?:any)
	{
		if(this.cbFn == null || this.thisObj == null)
		{
			if(this.param != null)
				this.cbFn.call(this.thisObj, this.param, query);
			else
				this.cbFn.call(this.thisObj, query);
		}
	}
}