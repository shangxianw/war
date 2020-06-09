module war
{
	export class CampCom extends ComBase
	{
		camp:number;
		protected init()
		{
			this.componentId = COMPONENT.CAMP;
		}

		protected destroy()
		{

		}
	}
}