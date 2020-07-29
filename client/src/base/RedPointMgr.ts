let RedType = {
	"main_jundui":{
		"kazu":{
			"hero_upgrade":{},
			"hero_new":{},
			"haha":{}
		},
		"lingzhu":{

		}
	},
	"main_kazu":{},
	"saishi":{
		"zbs":{
			"duanwei":{},
			"count":{}
		},
		"pws":{}
	}
}
class RedPointData
{
	public redName:string;
	public children:string[];
	public parent:string;
	public packData(redName:string, parent:string, children:string[])
	{
		this.redName = redName
		this.parent = parent;
		this.children = children
	}

	public destroy()
	{
		
	}
}

class RedPointMgr
{
	private redMap:Hash<string, RedPointData>
	public constructor()
	{
		this.init();
	}

	public init()
	{
		this.redMap = new Hash<string, RedPointData>()
		this.initRedData(RedType, "")
	}

	public initRedData(obj:Object, pName:string)
	{
		for(let key in obj)
		{
			let children:string[] = []
			for(let childKey in obj[key])
			{
				children.push(childKey)
			}
			let redData = new RedPointData()
			redData.packData(key, pName, children)
			this.redMap.set(key, redData)
			this.initRedData(obj[key], key)
		}
	}

	public destroy()
	{
		
	}

	private static Instance:RedPointMgr;
	public static Ins()
	{
		if(RedPointMgr.Instance == null)
			RedPointMgr.Instance = new RedPointMgr();
		return RedPointMgr.Instance;
	}
}