module astar
{
	export class Node
	{
		public x:number;    //列
        public y:number;    //行
        public walkable:boolean = true;

        public f:number;    //代价 f = g+h
        public g:number;    //起点到当前点代价
        public h:number;    //当前点到终点估计代价
        public parent:Node;

		public constructor()
		{

		}

		public init(x:number, y:number, walkable:boolean)
		{
			this.resetGHF();
			this.x = x;
			this.y = y;
			this.walkable = walkable;
		}

		public destroy()
		{

		}

		public resetGHF()
		{
			this.g = 0;
			this.h = 0;
			this.f = this.g + this.h;
		}
	}
}