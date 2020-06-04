class ViewIdConst
{
	public static WarPanel  = 3;
	public static GetView(panelId:number):any
	{
		switch(panelId)
		{
			case ViewIdConst.WarPanel: return war.WarPanel;
			default:
				return null;
		}
	}
}