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
            this.fileName = `${s}.ts`;
            this.saveFile();
        })
    }

    private saveFile()
    {
        let path = this.saveDir + this.fileName;
        console.log("正在打包");
        Fs.writeFileSync(path, str);
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
	export class DemoPanelData extends ViewData
	{
		protected init()
		{
			this.resGroup = "preload";
			this.layer = LayerManager.Ins().Panel;
		}

		protected destroy()
		{
			
		}

		public name:string;
		public packData1(name:string)
		{
			this.name = "wsx"
		}

		public packData2(name:string)
		{
			this.name = "www";
		}
	}

	// 只有状态，不操作数据。如果要修改数据，也要在Data中写一个方法，然后执行该方法
	export class DemoPanel extends ViewBase
	{
		public nameLb:eui.Label;
		public ageLb:eui.Label;
		private testImg:eui.Image;

		public info:DemoPanelData;
		public constructor()
		{
			super("DemoPanelSkin");	
		}

		protected init()
		{
			this.viewInfo = new DemoPanelData();
			this.info = this.viewInfo as any;
		}

		public initData(type:number)
		{
			if(type == 1)
				this.info.packData1("wsx");
			else if(type == 2)
				this.info.packData2("www");

			this.nameLb.text = this.info.name;
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