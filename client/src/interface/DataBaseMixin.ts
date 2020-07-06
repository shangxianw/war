class DataBaseMixin
{
	public iii:number;
	public attrHash:Hash<string ,CBData[]>; // 惰性加载
	public otherAttrHash:Hash<DataBase, Hash<string ,CBData[]>> // 惰性加载

	// ---------------------------------------------------------------------- 注册属性
	public addAttrListener(propName:string, cbFn:Function, thisObj:any):boolean
	{
		if(LogUtils.CheckParamValid(propName, cbFn, thisObj) == false)
			return false;

		if(this.attrHash.has(propName) == false)
		{
			this.attrHash.set(propName, []);
		}
		
		let arr:CBData[] = this.attrHash.get(propName);
		for(let cbData of arr)
		{
			if(cbData.cbFn == cbFn && cbData.thisObj == thisObj)
			{
				LogUtils.Warn(`${Utils.GetClassNameByObj(this)} : ${thisObj} 重复注册 ${propName}`);
				return false;
			}
		}

		let cbData = (new CBData).packData(cbFn, thisObj);
		arr.push(cbData);
		cbData.exec()
		return true;
	}

	// ---------------------------------------------------------------------- 移除属性
	public removeAttrListener(propName:string, cbFn:Function, thisObj:any):boolean
	{
		if(LogUtils.CheckParamValid(propName, cbFn, thisObj) == false)
			return false;

		if(this.attrHash.has(propName) == false)
		{
			// LogUtils.Warn(`${Utils.GetClassNameByObj(this)} : ${thisObj} 没有注册 ${propName}`);
			return true;
		}
		
		let arr:CBData[] = this.attrHash.get(propName),
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

	// ---------------------------------------------------------------------- 移除属性监听
	public removeAllAttrListener()
	{
		for(let value of this.attrHash.values())
		{
			for(let cbData of value)
			{
				cbData.destroy();
				cbData = null;
			}
			value.length = 0;
		}
		this.attrHash.destroy();
	}

	// ---------------------------------------------------------------------- 发射属性
	public setAttr(propName:string, value:any):void
	{
		if(LogUtils.CheckParamValid(propName) == false)
			return null;

		Object.defineProperty(this, propName, 
		{
			value : value,
			writable: true
		})
		this.flushAttr(propName);
	}

	// ---------------------------------------------------------------------- 注册属性2
	public flushAttr(propName:string)
	{
		if(LogUtils.CheckParamValid(propName) == false)
			return false;

		if(this.attrHash.has(propName) == false)
		{
			LogUtils.Warn(`${Utils.GetClassNameByObj(this)} : 没有注册 ${propName}`);
		}

		for(let value of this.attrHash.values())
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
	public addAttrCB(obj:DataBase, propName:string, cbFn:Function, thisObj:any):boolean
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

		let cbData = (new CBData).packData(cbFn, thisObj);
		arr.push(cbData);
		cbData.exec();
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

	// ---------------------------------------------------------------------- 移除所有某对象属性
	public removeAllAttCB()
	{
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
	}

	// ---------------------------------------------------------------------- 访问器
	// 使用了 mimix之后就不能这样用了
	// public get hash():Hash<string, CBData[]>
	// {
	// 	if(this._attrHash == null)
	// 		this._attrHash = new Hash<string, CBData[]>();
	// 	return this._attrHash;
	// }

	// public get otherAttrHash():Hash<DataBase, Hash<string ,CBData[]>>
	// {
	// 	if(this._otherAttrHash == null)
	// 		this._otherAttrHash = new Hash<DataBase, Hash<string ,CBData[]>>();
	// 	return this._otherAttrHash;
	// }
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
		if(this.cbFn != null || this.thisObj != null)
		{
			if(this.param != null)
				this.cbFn.call(this.thisObj, this.param, query);
			else
				this.cbFn.call(this.thisObj, query);
		}
	}
}