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
})(war || (war = {}));
//# sourceMappingURL=WarConst.js.map