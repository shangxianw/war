module war
{
	export abstract class SystemBase extends DataBase
	{
		public systemId:number;
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