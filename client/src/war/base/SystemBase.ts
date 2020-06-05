module war
{
	export abstract class SystemBase extends DataBase
	{
		public abstract update(entity:EntityBase, deltaTime:number);
		protected initAll()
		{
			super.initAll();
		}

		public destroyAll()
		{
			super.destroyAll();
		}
	}
}