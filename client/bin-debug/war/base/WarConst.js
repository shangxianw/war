var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var war;
(function (war) {
    var Component;
    (function (Component) {
        Component[Component["Demo"] = 0] = "Demo";
        Component[Component["Render"] = 1] = "Render";
        Component[Component["Pos"] = 2] = "Pos";
        Component[Component["Ctrl"] = 3] = "Ctrl";
        Component[Component["Health"] = 4] = "Health";
        Component[Component["AI"] = 5] = "AI";
    })(Component = war.Component || (war.Component = {}));
    var Render;
    (function (Render) {
        Render[Render["Bg"] = 1] = "Bg";
        Render[Render["Hero"] = 2] = "Hero";
    })(Render = war.Render || (war.Render = {}));
    var System;
    (function (System) {
        System[System["Demo"] = 0] = "Demo";
        System[System["Input"] = 1] = "Input";
        System[System["Render"] = 2] = "Render";
        System[System["Decay"] = 3] = "Decay";
        System[System["AI"] = 4] = "AI";
        System[System["Collision"] = 5] = "Collision";
    })(System = war.System || (war.System = {}));
    var AIType;
    (function (AIType) {
        AIType[AIType["Nice"] = 1] = "Nice";
        AIType[AIType["Bad"] = 2] = "Bad";
    })(AIType = war.AIType || (war.AIType = {}));
    var EntityColor = (function () {
        function EntityColor() {
        }
        EntityColor.Me = 0x0000ff;
        EntityColor.NiceAI = 0x77ff77;
        EntityColor.BadAI = 0xff7777;
        EntityColor.Bg = 0xffffff;
        EntityColor.NiceBg = 0x00ff00;
        EntityColor.BadBg = 0xff0000;
        return EntityColor;
    }());
    war.EntityColor = EntityColor;
    __reflect(EntityColor.prototype, "war.EntityColor");
    var Action;
    (function (Action) {
    })(Action = war.Action || (war.Action = {}));
    var Direction;
    (function (Direction) {
    })(Direction = war.Direction || (war.Direction = {}));
    var Entity;
    (function (Entity) {
        Entity[Entity["Bg"] = 1] = "Bg";
        Entity[Entity["Hero"] = 2] = "Hero";
    })(Entity = war.Entity || (war.Entity = {}));
})(war || (war = {}));
//# sourceMappingURL=WarConst.js.map