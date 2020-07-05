var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var war;
(function (war) {
    var Component;
    (function (Component) {
        Component[Component["Demo"] = 0] = "Demo";
        Component[Component["Speed"] = 1] = "Speed";
        Component[Component["Action"] = 2] = "Action";
        Component[Component["Direction"] = 3] = "Direction";
        Component[Component["Path"] = 4] = "Path";
        Component[Component["Camp"] = 5] = "Camp";
        Component[Component["Attack"] = 6] = "Attack";
        Component[Component["Health"] = 7] = "Health";
        Component[Component["GRIGD"] = 4] = "GRIGD";
        Component[Component["INPUT"] = 7] = "INPUT";
        Component[Component["HP"] = 8] = "HP";
    })(Component = war.Component || (war.Component = {}));
    var System;
    (function (System) {
        System[System["Move"] = 1] = "Move";
        System[System["Action"] = 2] = "Action";
        System[System["Speed"] = 3] = "Speed";
        System[System["Path"] = 4] = "Path";
        System[System["Attack"] = 5] = "Attack";
        System[System["Render"] = 6] = "Render";
        System[System["NextAction"] = 7] = "NextAction";
    })(System = war.System || (war.System = {}));
    var Camp;
    (function (Camp) {
        Camp[Camp["None"] = 0] = "None";
        Camp[Camp["We"] = 1] = "We";
        Camp[Camp["Enemy"] = 2] = "Enemy";
    })(Camp = war.Camp || (war.Camp = {}));
    var Action;
    (function (Action) {
        Action[Action["None"] = 0] = "None";
        Action[Action["Stand"] = 1] = "Stand";
        Action[Action["Run"] = 2] = "Run";
        Action[Action["Attack"] = 3] = "Attack";
    })(Action = war.Action || (war.Action = {}));
    var Direction;
    (function (Direction) {
        Direction[Direction["None"] = 0] = "None";
        Direction[Direction["Right"] = 3] = "Right";
        Direction[Direction["Up"] = 1] = "Up";
        Direction[Direction["RightUp"] = 2] = "RightUp";
        Direction[Direction["RightDown"] = 4] = "RightDown";
        Direction[Direction["Down"] = 5] = "Down";
        Direction[Direction["LeftDown"] = 6] = "LeftDown";
        Direction[Direction["Left"] = 7] = "Left";
        Direction[Direction["LeftUp"] = 8] = "LeftUp";
    })(Direction = war.Direction || (war.Direction = {}));
    var Entity;
    (function (Entity) {
        Entity[Entity["None"] = 0] = "None";
        Entity[Entity["Hero"] = 3] = "Hero";
        Entity[Entity["King"] = 1] = "King";
        Entity[Entity["Queen"] = 2] = "Queen";
    })(Entity = war.Entity || (war.Entity = {}));
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