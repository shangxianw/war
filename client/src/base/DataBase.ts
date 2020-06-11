/**
 * 数据基类
 * 存在一个唯一id，以记录该对象
 * 支持数据分发，但因为该功能不是每个对象都会用到，所以用到惰性的方式
 */
abstract class DataBase
{
	public id:number
	private _hash:Hash<string ,CBData[]>; // 惰性加载
	public constructor()
	{
		this.initAll();
	}

	protected abstract init();
	protected abstract destroy();

	protected initAll()
	{
		this.id = IDManager.Ins().getNewId();
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
		this._hash = null;
		this.destroy();
	}

	public addAttrListener(propName:string, cbFn:Function, thisObj:any, param:any = null):boolean
	{
		if(propName == null || cbFn == null || thisObj == null)
		{
			LogUtils.Warn(`${Utils.GetClassNameByObj(this)} : 参数有误`);
			return false;
		}

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
		return true;
	}

	public removeAttrListener(propName:string, cbFn:Function, thisObj:any):boolean
	{
		if(propName == null || cbFn == null || thisObj == null)
		{
			LogUtils.Warn(`${Utils.GetClassNameByObj(this)} : 参数有误`);
			return false;
		}

		if(this.hash.has(propName) == false)
		{
			LogUtils.Warn(`${Utils.GetClassNameByObj(this)} : ${thisObj} 没有注册 ${propName}`);
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

	public hasAttrListener(propName:string, cbFn:Function, thisObj:Object):boolean
	{
		if(propName == null || cbFn == null || thisObj == null)
		{
			LogUtils.Warn(`${Utils.GetClassNameByObj(this)} : 参数有误`);
			return false;
		}

		if(this.hash.has(propName) == false)
		{
			LogUtils.Warn(`${Utils.GetClassNameByObj(this)} : ${thisObj} 没有注册 ${propName}`);
			return false;
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
				return true;
			}
		}

		LogUtils.Warn(`${Utils.GetClassNameByObj(this)} : ${thisObj} 没有注册 ${propName}`);
		return false; //没有注册
	}

	public setAttr(propName:string, value:any)
	{
		if(propName == null)
		{
			LogUtils.Warn(`${Utils.GetClassNameByObj(this)} : 参数有误`);
			return false;
		}

		Object.defineProperty(this, propName, 
		{
			value : value,
			writable: true
		})
		this.updateAttr(propName);
	}

	public updateAttr(propName:string)
	{
		if(propName == null)
		{
			LogUtils.Warn(`${Utils.GetClassNameByObj(this)} : 参数有误`);
			return false;
		}

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

	private get hash():Hash<string, CBData[]>
	{
		if(this._hash == null)
			this._hash = new Hash<string, CBData[]>();
		return this._hash;
	}
}