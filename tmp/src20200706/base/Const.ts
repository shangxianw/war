enum DevelopMode
{
	DEBUG = 1,
	PUBLISH = 2
}

class STR_CONST
{
	public static DESTROY = "destroy";
	public static INIT = "init";
	public static FUNCTION = "function";
	public static ARRAY = "array";
}

enum SYSTEM
{
	COLLISION = 1,
	FALL = 2,
	MOVE = 3,
	CAMERA = 4,
}

// enum COMPONENT
// {
// 	POS = 1,
// 	SPEED = 2,
// 	FALL = 3,
// 	RIGID = 4 // 刚体
// }

enum KEY_CODE
{
	W = 87,
	S = 83,
	A = 65,
	D = 68,
	SPACE = 32,
	Z = 90,
	X = 88
}

enum ENTITY_ID
{
	MAP = 1,
	PLAYER = 2,
	CAMERA = 3,
	CANDLE = 4
}

enum RIGID_TYPE
{
	RECT = 1,
	CIRCLE = 2
}

class CONFIG
{
	public static HERO = "hero_json";
	public static UPGRADE = "upgrade_json";
}