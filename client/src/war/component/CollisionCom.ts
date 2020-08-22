module war
{
	export class CollisionCom extends ComBase
	{
		public type:number;
		public range:number;
		protected init()
		{
			this.comType = Component.Collision
			this.type = Collision.Circle
		}

		protected destroy()
		{

		}
	}
}