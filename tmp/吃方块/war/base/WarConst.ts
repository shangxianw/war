module war
{
	export enum Component
	{
		Demo = 0,
		Render = 1,
		Pos = 2,
		Ctrl = 3,
		Health = 4,
		AI = 5
	}

	export enum Render
	{
		Bg = 1,
		Hero = 2
	}

	export enum System
	{
		Demo = 0,
		Input = 1,
		Render = 2,
		Decay = 3,
		AI = 4,
		Collision = 5
	}

	export enum AIType
	{
		Nice = 1,
		Bad = 2
	}

	export class EntityColor
	{
		public static Me = 0x0000ff;
		public static NiceAI = 0x77ff77;
		public static BadAI = 0xff7777;
		public static Bg = 0xffffff;
		public static NiceBg = 0x00ff00;
		public static BadBg = 0xff0000;
	}

	export enum Action
	{
		
	}

	export enum Direction
	{
		
	}

	export enum Entity
	{
		Bg = 1,
		Hero = 2
	}
}