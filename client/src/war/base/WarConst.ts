module war
{
	export enum Component
	{
		Demo = 0,
		Speed = 1,
		Action = 2,
		Direction = 3,
		Path = 4,
		Camp = 5,
		Attack = 6,
		Health = 7,

		GRIGD = 4,
		INPUT = 7,
		HP = 8,
	}

	export enum System
	{
		Move = 1,
		Action = 2,
		Speed = 3,
		Path = 4,
		Attack = 5,
		Render = 6,
		NextAction = 7
	}

	export enum Camp
	{
		None = 0,
		We = 1,
		Enemy = 2
	}

	export enum Action
	{
		None = 0,
		Stand = 1,
		Run = 2,
		Attack = 3,
	}

	export enum Direction
	{
		None = 0,
		Right = 3,
		Up = 1,
		RightUp = 2,
		RightDown = 4,
		Down = 5,
		LeftDown = 6,
		Left = 7,
		LeftUp = 8
	}

	export enum Entity
	{
		None = 0,
		Hero = 3,
		King = 1,
		Queen = 2,
	}

	export class ANGLE
	{
		static RIGHT:number[] = [337.5, 22.5];
		static RIGHT_DOWN:number[] = [22.5, 67.5];
		static DOWN:number[] = [67.5, 112.5];
		static LEFT_DOWN:number[] = [112.5, 157.5];
		static LEFT:number[] = [157.5, 202.5];
		static LEFT_UP:number[] = [202.5, 247.5];
		static UP:number[] = [247.5, 292.5];
		static RIGHT_UP:number[] = [292.5, 337.5];
	}

	export enum INPUT
	{
		NONE = 0,
		CREATE_HERO = 1,
		CREATE_QUEEN = 2,
		CREATE_KING = 3
	}
}