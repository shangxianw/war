class NameItem extends UIBase
{
	// ui
	private sexGroup:eui.Group;
	private aresGroup:eui.Group;
	private nameGroup:eui.Group;
	private jobGroup:eui.Group;
	private sexImg:eui.Image;
	private aresEffGroup:eui.Group;
	private nameLb2:eui.Label;
	private nameEffGroup:eui.Group;
	private nameLb:eui.Label;
	private jobName:eui.Label;

	// data
	public sex:number;
	public name:string;
	public hasbuy:boolean;
	public job:number;
	public reserve:boolean;
	public init()
	{
		this.skinName = "NameItemSkin"
	}

	public initData(sex:number, name:string, hasbuy:boolean, job:number, reserve:boolean)
	{
		this.sex = sex;
		this.name = name;
		this.hasbuy = hasbuy;
		this.job = job;
		this.reserve = reserve;
	}

	public initView()
	{
		
	}

	public destroy()
	{

	}
}