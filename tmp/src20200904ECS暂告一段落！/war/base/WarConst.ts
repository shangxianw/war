module war
{
	export enum Component
	{
		Demo = 0,
		Render = 1,
		Pos = 2,
		Path = 3,
		Speed = 4,
		Collision = 5,
		Attack = 6,
		Action = 7
	}

	export enum Render
	{
		Demo = 1,
		Hero = 2
	}

	export enum System
	{
		Demo = 0,
		Move = 1,
		Render = 2,
		Speed = 3,
		Path = 4,
		Collision = 5,
		Attack = 6
	}

	export enum Entity
	{
		
	}

	export enum Collision
	{
		Circle = 1
	}

	export enum Action
	{
		Stand = 1,
		Attack = 2,
		Run = 3
	}
}