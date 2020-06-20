/**
 * UI基类
 * 存在一个唯一id，以记录该对象
 * 支持数据分发，但因为该功能不是每个对象都会用到，所以用到惰性的方式
 */
abstract class UIBase extends eui.Component
{
	public uniqueCode:number;
	private _attrHash:Hash<string ,CBData[]>; // 惰性加载
	private _otherAttrHash:Hash<DataBase, Hash<string ,CBData[]>> // 惰性加载
	private touchList:TouchData[];
	public constructor(skinName:string = null, data:any=null)
	{
		super();
		if(skinName != null)
			this.skinName = skinName;
		this.initAll(data);
	}

	protected init(){};		// view 刚被创建出来时调用
	protected abstract destroy();	// 关闭界面时调用

	protected initAll(data:any=null)
	{
		this.uniqueCode = IDManager.Ins().getNewId();
		this.touchList = [];
		this.init();
	}

	public destroyAll()
	{
		this.removeAllEvent();
		this.removeAllAttrListener();
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

	// ---------------------------------------------------------------------- 移除属性监听
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