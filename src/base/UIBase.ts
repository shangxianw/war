/**
 * UI基础组件
 * 存在一个唯一id，以记录该对象
 * 支持数据分发，但因为该功能不是每个对象都会用到，所以用到惰性的方式
 */
abstract class UIBase extends eui.Component
{
	private _data:any;
	public id:number;
	private _hash:Hash<string ,CBData[]>; // 惰性加载
	public constructor(skinName:string = null)
	{
		super();
		this.skinName = skinName;
		this.initAll();
	}

	protected abstract init();
	protected abstract destroy();

	protected initAll()
	{
		this.id = IDManager.Ins().getNewId();
		this.init();
	}

	// 当要消除一个对象时，真正要消除的是这个函数。
	public destroyAll()
	{
		if(this._hash != null)
		{
			for(let arr of this.hash.values)
			{
				for(let cbData of arr)
				{
					cbData.destroy();
					PoolManager.Ins().push(cbData);
				}
				arr.length = 0;
				PoolManager.Ins().pushArray(arr);
			}
			this.hash.destroy();
			this._hash = null;
		}
		this.destroy();
	}

	public initData()
	{
		
	}

	public set data(value:any)
	{
		this._data = value;
		this.dataChanged();
	}

	public get data()
	{
		return this._data;
	}

	public dataChanged()
	{

	}

	public addAttrListener(propName:string, cbFn:Function, thisObj:any, param:any = null):boolean
	{
		if(this.hash.get(propName) == false)
			this.hash.set(propName, PoolManager.Ins().popArray());
		
		let arr:CBData[] = this.hash.get(propName);
		let cbData:CBData;
		for(cbData of arr)
		{
			if(cbData.cbFn == cbFn && cbData.thisObj == thisObj)
				return false; // 重复注册
		}
		cbData = (PoolManager.Ins().pop(CBData) as CBData).PackData(cbFn, thisObj, param);
		arr.push(cbData);
		return true;
	}

	public removeAttrListener(propName, cbFn:Function, thisObj:any):boolean
	{
		if(this.hash.get(propName) == false)
			return false; // 没有注册
		
		let arr:CBData[] = this.hash.get(propName),
			i:number = 0,
			cbData:CBData;
		for(cbData of arr)
		{
			if(cbData.cbFn == cbFn && cbData.thisObj == thisObj)
			{
				arr.splice(i, 1);
				cbData.destroy();
				PoolManager.Ins().push(cbData);
				return true;
			}
			i++;
		}
		return false; //没有注册
	}

	private get hash():Hash<string, CBData[]>
	{
		if(this._hash == null)
			this._hash = new Hash<string, CBData[]>();
		return this._hash;
	}
}