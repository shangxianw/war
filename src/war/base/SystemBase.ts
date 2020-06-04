module war
{
	export abstract class SystemBase extends DataBase
	{
		public abstract update();
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