module war
{
	export enum COMPONENT
	{
		SPEED = 1,
		ACTION = 2,
		PATH = 3,
		GRIGD = 4,
		ATTACK = 5,
		CAMP = 6,
		INPUT = 7,
		HP = 8
	}

	export enum SYSTEM
	{
		MOVE = 1,
		ACTION = 2,
		COLLISION = 3,
		PATH = 4
	}

	export enum CAMP
	{
		WE = 1,
		ENEMY = 2
	}

	export enum ACTION
	{
		STAND = 1,
		RUN = 2,
		ATTACK = 3
	}

	export enum DIRECTION
	{
		NONE = 0,
		UP = 1,
		RIGHT_UP = 2,
		RIGHT = 3,
		RIGHT_DOWN = 4,
		DOWN = 5,
		LEFT_DOWN = 6,
		LEFT = 7,
		LEFT_UP = 8
	}

	export enum ENTITY
	{
		QUEEN = 1,
		HERO = 2
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