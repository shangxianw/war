var war;
(function (war) {
    var Component;
    (function (Component) {
        Component[Component["Demo"] = 0] = "Demo";
        Component[Component["Ctrl"] = 1] = "Ctrl";
        Component[Component["Render"] = 2] = "Render";
        Component[Component["Pos"] = 3] = "Pos";
        Component[Component["Speed"] = 4] = "Speed";
        Component[Component["Gravity"] = 5] = "Gravity";
        Component[Component["Rigid"] = 6] = "Rigid";
        Component[Component["Step"] = 7] = "Step";
    })(Component = war.Component || (war.Component = {}));
    var Render;
    (function (Render) {
        Render[Render["Demo"] = 1] = "Demo";
        Render[Render["Step"] = 2] = "Step";
        Render[Render["Player"] = 3] = "Player";
    })(Render = war.Render || (war.Render = {}));
    var System;
    (function (System) {
        System[System["Demo"] = 0] = "Demo";
        System[System["Render"] = 1] = "Render";
        System[System["Move"] = 2] = "Move";
        System[System["Gravity"] = 3] = "Gravity";
        System[System["Collision"] = 4] = "Collision";
        System[System["Input"] = 5] = "Input";
        System[System["Camera"] = 6] = "Camera";
        System[System["AI"] = 7] = "AI";
    })(System = war.System || (war.System = {}));
    var Entity;
    (function (Entity) {
    })(Entity = war.Entity || (war.Entity = {}));
})(war || (war = {}));
