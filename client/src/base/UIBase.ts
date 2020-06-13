/**
 * UI基类
 * 存在一个唯一id，以记录该对象
 * 支持数据分发，但因为该功能不是每个对象都会用到，所以用到惰性的方式
 */
abstract class UIBase extends eui.Component
{
	public id:number;
	private _hash:Hash<string ,CBData[]>; // 惰性加载
	private touchList:TouchData[];
	public constructor(skinName:string = null, data:any=null)
	{
		super();
		this.skinName = skinName;
		this.initAll(data);
	}

	protected abstract init();		// view 刚被创建出来时调用
	protected abstract destroy();	// 关闭界面时调用

	protected initAll(data:any=null)
	{
		this.id = IDManager.Ins().getNewId();
		this.touchList = [];
		this.init();
	}

	public destroyAll()
	{
		this.removeAllEvent();
		this.removeAllAttrListener();
		this.destroy();
	}

	// ---------------------------------------------------------------------- 注册属性变更相关
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

	public removeAllAttrListener()
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
	}

	// ---------------------------------------------------------------------- 注册事件相关
	public addEvent(target:egret.DisplayObject, type:string, cbFn:Function, thisObj:any):boolean
	{
		if(target == null || cbFn == null || thisObj == null || type == null || type == "")
		{
			LogUtils.Error(`参数有误`);
			return false;
		}

		for(let item of this.touchList)
		{
			if(item == null)
				continue;
			if(item.target == target && item.cbFn == cbFn && item.thisObj == thisObj && item.type == type)
			{
				LogUtils.Error(`重复注册`);
				return false;
			}
		}
		let info = PoolManager.Ins().pop(TouchData) as TouchData;
		info.packData(target, type, cbFn, thisObj);
		this.touchList.push(info);
		return true;
	}

	private removeEvent(target:egret.DisplayObject, type:string, cbFn:Function, thisObj:any)
	{
		if(target == null || cbFn == null || thisObj == null || type == null || type == "")
		{
			LogUtils.Error(`参数有误`);
			return false;
		}

		for(let item of this.touchList)
		{
			if(item == null)
				continue;
			if(item.target == target && item.type == type && item.cbFn == cbFn && item.thisObj == thisObj && item.type == type)
			{
				let index = this.touchList.indexOf(item);
				if(index >= 0)
				{
					this.touchList.splice(index, 1);
					item.destroyAll();
					PoolManager.Ins().push(item);
					return true;
				}
				return false;
			}
		}
		return false;
	}

	private removeAllEvent()
	{
		let array = DataUtils.CopyArray(this.touchList);
		for(let item of array)
		{
			if(item == null)
				continue;
			item.destroyAll();
			PoolManager.Ins().push(item);
		}
		this.touchList.length = 0;
	}

	private get hash():Hash<string, CBData[]>
	{
		if(this._hash == null)
			this._hash = new Hash<string, CBData[]>();
		return this._hash;
	}
}

class TouchData extends DataBase
{
	public target:egret.DisplayObject;
	public cbFn:Function;
	public thisObj:any;
	public type:string;
	protected init()
	{
	}

	protected destroy()
	{
		ListenerMgr.Ins().removeEventListen(this.target, this.type, this.cbFn, this.thisObj);
	}

	public packData(target:egret.DisplayObject, type:string, cbFn:Function, thisObj:any)
	{
		this.target = target;
		this.type = type;
		this.cbFn = cbFn;
		this.thisObj = thisObj;
		ListenerMgr.Ins().addEventListen(this.target, this.type, this.cbFn, this.thisObj);
		return this;
	}

	public exec(e:egret.TouchEvent)
	{
		if(this.cbFn != null && this.thisObj != null)
			this.cbFn.call(this.thisObj, e);
	}
}