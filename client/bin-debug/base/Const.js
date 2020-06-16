var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var DevelopMode;
(function (DevelopMode) {
    DevelopMode[DevelopMode["DEBUG"] = 1] = "DEBUG";
    DevelopMode[DevelopMode["PUBLISH"] = 2] = "PUBLISH";
})(DevelopMode || (DevelopMode = {}));
var STR_CONST = (function () {
    function STR_CONST() {
    }
    STR_CONST.DESTROY = "destroy";
    STR_CONST.INIT = "init";
    STR_CONST.FUNCTION = "function";
    STR_CONST.ARRAY = "array";
    return STR_CONST;
}());
__reflect(STR_CONST.prototype, "STR_CONST");
var SYSTEM;
(function (SYSTEM) {
    SYSTEM[SYSTEM["COLLISION"] = 1] = "COLLISION";
    SYSTEM[SYSTEM["FALL"] = 2] = "FALL";
    SYSTEM[SYSTEM["MOVE"] = 3] = "MOVE";
    SYSTEM[SYSTEM["CAMERA"] = 4] = "CAMERA";
})(SYSTEM || (SYSTEM = {}));
// enum COMPONENT
// {
// 	POS = 1,
// 	SPEED = 2,
// 	FALL = 3,
// 	RIGID = 4 // 刚体
// }
var KEY_CODE;
(function (KEY_CODE) {
    KEY_CODE[KEY_CODE["W"] = 87] = "W";
    KEY_CODE[KEY_CODE["S"] = 83] = "S";
    KEY_CODE[KEY_CODE["A"] = 65] = "A";
    KEY_CODE[KEY_CODE["D"] = 68] = "D";
    KEY_CODE[KEY_CODE["SPACE"] = 32] = "SPACE";
    KEY_CODE[KEY_CODE["Z"] = 90] = "Z";
    KEY_CODE[KEY_CODE["X"] = 88] = "X";
})(KEY_CODE || (KEY_CODE = {}));
var ENTITY_ID;
(function (ENTITY_ID) {
    ENTITY_ID[ENTITY_ID["MAP"] = 1] = "MAP";
    ENTITY_ID[ENTITY_ID["PLAYER"] = 2] = "PLAYER";
    ENTITY_ID[ENTITY_ID["CAMERA"] = 3] = "CAMERA";
    ENTITY_ID[ENTITY_ID["CANDLE"] = 4] = "CANDLE";
})(ENTITY_ID || (ENTITY_ID = {}));
var RIGID_TYPE;
(function (RIGID_TYPE) {
    RIGID_TYPE[RIGID_TYPE["RECT"] = 1] = "RECT";
    RIGID_TYPE[RIGID_TYPE["CIRCLE"] = 2] = "CIRCLE";
})(RIGID_TYPE || (RIGID_TYPE = {}));
var CONFIG = (function () {
    function CONFIG() {
    }
    CONFIG.HERO = "hero_json";
    return CONFIG;
}());
__reflect(CONFIG.prototype, "CONFIG");
//# sourceMappingURL=Const.js.map