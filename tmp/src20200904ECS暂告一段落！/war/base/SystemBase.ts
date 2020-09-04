module war
{
	export abstract class SystemBase extends DataBase
	{
		public sysType:number;
		public abstract update(entity:EntityBase, deltaTime:number);
	}
}