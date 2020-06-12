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
        this.saveDir = "D:\\wsx\\war\\tools\\createPanel\\out\\";
    }

    public destroy()
    {

    }

    public start()
    {
        process.on('exit', function(code) { console.log(code) });
        process.stdin.setEncoding('utf8');
        process.stdout.write("请输入面板名称：");
        process.stdin.on('data', (input:string)=>{
			let s = input.trim();
            this.fileName = `${s}`;
            this.saveFile();
        })
    }

    private saveFile()
    {
        let path = this.saveDir + this.fileName + ".ts";
        console.log("正在打包");

		var ch = "XXXXXXXPanel";
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
	export class XXXXXXXPanelData extends ViewData
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

	export class XXXXXXXPanel extends ViewBase
	{
		public info:XXXXXXXPanelData;
		public constructor()
		{
			super("XXXXXXXPanelSkin");	
		}

		protected init()
		{
			this.viewInfo = new XXXXXXXPanelData();
			this.info = this.viewInfo as any;
		}

		protected destroy()
		{

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