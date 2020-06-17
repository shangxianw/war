var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var war;
(function (war) {
    var COMPONENT;
    (function (COMPONENT) {
        COMPONENT[COMPONENT["SPEED"] = 1] = "SPEED";
        COMPONENT[COMPONENT["ACTION"] = 2] = "ACTION";
        COMPONENT[COMPONENT["PATH"] = 3] = "PATH";
        COMPONENT[COMPONENT["GRIGD"] = 4] = "GRIGD";
        COMPONENT[COMPONENT["ATTACK"] = 5] = "ATTACK";
        COMPONENT[COMPONENT["CAMP"] = 6] = "CAMP";
        COMPONENT[COMPONENT["INPUT"] = 7] = "INPUT";
        COMPONENT[COMPONENT["HP"] = 8] = "HP";
    })(COMPONENT = war.COMPONENT || (war.COMPONENT = {}));
    var SYSTEM;
    (function (SYSTEM) {
        SYSTEM[SYSTEM["MOVE"] = 1] = "MOVE";
        SYSTEM[SYSTEM["ACTION"] = 2] = "ACTION";
        SYSTEM[SYSTEM["COLLISION"] = 3] = "COLLISION";
        SYSTEM[SYSTEM["PATH"] = 4] = "PATH";
    })(SYSTEM = war.SYSTEM || (war.SYSTEM = {}));
    var CAMP;
    (function (CAMP) {
        CAMP[CAMP["WE"] = 1] = "WE";
        CAMP[CAMP["ENEMY"] = 2] = "ENEMY";
    })(CAMP = war.CAMP || (war.CAMP = {}));
    var ACTION;
    (function (ACTION) {
        ACTION[ACTION["STAND"] = 1] = "STAND";
        ACTION[ACTION["RUN"] = 2] = "RUN";
        ACTION[ACTION["ATTACK"] = 3] = "ATTACK";
    })(ACTION = war.ACTION || (war.ACTION = {}));
    var DIRECTION;
    (function (DIRECTION) {
        DIRECTION[DIRECTION["NONE"] = 0] = "NONE";
        DIRECTION[DIRECTION["UP"] = 1] = "UP";
        DIRECTION[DIRECTION["RIGHT_UP"] = 2] = "RIGHT_UP";
        DIRECTION[DIRECTION["RIGHT"] = 3] = "RIGHT";
        DIRECTION[DIRECTION["RIGHT_DOWN"] = 4] = "RIGHT_DOWN";
        DIRECTION[DIRECTION["DOWN"] = 5] = "DOWN";
        DIRECTION[DIRECTION["LEFT_DOWN"] = 6] = "LEFT_DOWN";
        DIRECTION[DIRECTION["LEFT"] = 7] = "LEFT";
        DIRECTION[DIRECTION["LEFT_UP"] = 8] = "LEFT_UP";
    })(DIRECTION = war.DIRECTION || (war.DIRECTION = {}));
    var ENTITY;
    (function (ENTITY) {
        ENTITY[ENTITY["QUEEN"] = 1] = "QUEEN";
        ENTITY[ENTITY["HERO"] = 2] = "HERO";
    })(ENTITY = war.ENTITY || (war.ENTITY = {}));
    var ANGLE = (function () {
        function ANGLE() {
        }
        ANGLE.RIGHT = [337.5, 22.5];
        ANGLE.RIGHT_DOWN = [22.5, 67.5];
        ANGLE.DOWN = [67.5, 112.5];
        ANGLE.LEFT_DOWN = [112.5, 157.5];
        ANGLE.LEFT = [157.5, 202.5];
        ANGLE.LEFT_UP = [202.5, 247.5];
        ANGLE.UP = [247.5, 292.5];
        ANGLE.RIGHT_UP = [292.5, 337.5];
        return ANGLE;
    }());
    war.ANGLE = ANGLE;
    __reflect(ANGLE.prototype, "war.ANGLE");
    var INPUT;
    (function (INPUT) {
        INPUT[INPUT["NONE"] = 0] = "NONE";
        INPUT[INPUT["CREATE_HERO"] = 1] = "CREATE_HERO";
        INPUT[INPUT["CREATE_QUEEN"] = 2] = "CREATE_QUEEN";
        INPUT[INPUT["CREATE_KING"] = 3] = "CREATE_KING";
    })(INPUT = war.INPUT || (war.INPUT = {}));
})(war || (war = {}));
//# sourceMappingURL=WarConst.js.map