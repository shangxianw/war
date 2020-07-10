module war
{
	export abstract class SystemBase extends DataBase
	{
		public abstract update(deltaTime:number);
	}
}