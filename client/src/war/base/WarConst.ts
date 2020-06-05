module war
{
	export enum COMPONENT
	{
		SPEED = 1,
		ACTION = 2,
		PATH = 3
	}

	export enum SYSTEM
	{
		MOVE = 1,
		ACTION = 2,
	}

	export enum ACTION
	{
		STAND = 1,
		RUN = 2,
		ATTACK = 3
	}

	export enum DIRECTION
	{
		UP = 1,
		RIGHT_UP = 2,
		RIGHT = 3,
		RIGHT_DOWN = 4,
		DOWN = 5,
		LEFT_DOWN = 6,
		LEFT = 7,
		LEFT_UP = 8
	}
}