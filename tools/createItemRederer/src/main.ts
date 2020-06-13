var Fs:IFile = require('fs');

class CreatePanel
{
    public fileName:string;
    public saveDir:string;
    public constructor()
    {
        this.init();
    }

    public init()
    {
        this.fileName = "demo.ts";
        this.saveDir = "././";
        process.on('exit', this.OnErr);
        process.stdin.setEncoding('utf8');
        process.stdin.on('data', this.OnData);
    }

    public destroy()
    {

    }

    public start()
    {
        process.stdout.write("请输入item名称：");
    }

	private OnData(input:string)
	{
		let s = input.trim();
		if(s == null || s == "")
		{
			this.start();
		}
		else
		{
			this.fileName = `${s}`;
			this.saveFile();
		}
	}

	private OnErr(code)
	{
		console.log(code);
	}

    private saveFile()
    {
        let path = this.saveDir + this.fileName + ".ts";
        console.log("正在打包");

		var ch = "XXXXXXX";
		var reg = "/"+ch+"/g";

		let rxp = new RegExp("XXXXXXXPanel",'g')
		let tarStr = str.replace(eval(reg), this.fileName);
        Fs.writeFileSync(path, tarStr);
		process.exit(1);
    }

	private closeProcess()
	{
	}
}
let cp = new CreatePanel();
cp.start();

let str = `
module home
{
	export class XXXXXXXData extends ViewData
	{
		protected init()
		{
			this.resGroup = "";
			this.layer = LayerManager.Ins().Panel;
		}

		protected destroy()
		{
			
		}

		public packData()
		{

		}
	}

	export class XXXXXXX extends ViewBase
	{
		public info:XXXXXXXData;
		public constructor()
		{
			super("XXXXXXXSkin");	
		}

		protected init()
		{
			
		}

		protected destroy()
		{
			if(this.info != null)
				this.info.destroyAll();
		}

		public initData(data:any)
		{
			this.info.packData();
		}

		public initView()
		{
			
		}
	}
}
`

interface IFile
{
    readdirSync(path:string):string[];
    writeFileSync(path:string, content:any);
}