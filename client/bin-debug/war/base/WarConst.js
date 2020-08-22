var war;
(function (war) {
    var Component;
    (function (Component) {
        Component[Component["Demo"] = 0] = "Demo";
        Component[Component["Render"] = 1] = "Render";
        Component[Component["Pos"] = 2] = "Pos";
        Component[Component["Path"] = 3] = "Path";
        Component[Component["Speed"] = 4] = "Speed";
        Component[Component["Collision"] = 5] = "Collision";
        Component[Component["Attack"] = 6] = "Attack";
        Component[Component["Action"] = 7] = "Action";
    })(Component = war.Component || (war.Component = {}));
    var Render;
    (function (Render) {
        Render[Render["Demo"] = 1] = "Demo";
        Render[Render["Hero"] = 2] = "Hero";
    })(Render = war.Render || (war.Render = {}));
    var System;
    (function (System) {
        System[System["Demo"] = 0] = "Demo";
        System[System["Move"] = 1] = "Move";
        System[System["Render"] = 2] = "Render";
        System[System["Speed"] = 3] = "Speed";
        System[System["Path"] = 4] = "Path";
        System[System["Collision"] = 5] = "Collision";
        System[System["Attack"] = 6] = "Attack";
    })(System = war.System || (war.System = {}));
    var Entity;
    (function (Entity) {
    })(Entity = war.Entity || (war.Entity = {}));
    var Collision;
    (function (Collision) {
        Collision[Collision["Circle"] = 1] = "Circle";
    })(Collision = war.Collision || (war.Collision = {}));
    var Action;
    (function (Action) {
        Action[Action["Stand"] = 1] = "Stand";
        Action[Action["Attack"] = 2] = "Attack";
        Action[Action["Run"] = 3] = "Run";
    })(Action = war.Action || (war.Action = {}));
})(war || (war = {}));
//# sourceMappingURL=WarConst.js.map