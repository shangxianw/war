module war
{
	export abstract class SystemBase extends DataBase
	{
		protected abstract update();
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