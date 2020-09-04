interface IViewData
{
	data:any;
	resGroupKey:number;
	resGroup:string[];
	layer:eui.UILayer;
	destroyAll();
	initAll();
}