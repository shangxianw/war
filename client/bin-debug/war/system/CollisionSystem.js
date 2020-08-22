var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var war;
(function (war) {
    var CollisionSystem = (function (_super) {
        __extends(CollisionSystem, _super);
        function CollisionSystem() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        CollisionSystem.prototype.init = function () {
            this.sysType = war.System.Collision;
        };
        CollisionSystem.prototype.destroy = function () {
        };
        CollisionSystem.prototype.update = function (entity, dt) {
            if (entity == null)
                return;
            // 暂不实现刚体
            // let posCom = entity.getComponent(Component.Pos) as PosCom;
            // let collCom = entity.getComponent(Component.Collision) as CollisionCom;
            // if(posCom == null || collCom == null)
            // 	return;
            // let array:EntityBase[] = DataUtils.CopyArray(WarDataMgr.Ins().entityMap.values())
            // for(let entity2 of array)
            // {
            // 	if(entity2 == null)
            // 		continue
            // 	if(entity.hasCode == entity2.hasCode) // 自己
            // 		continue
            // 	let collCom2 = entity2.getComponent(Component.Collision) as CollisionCom
            // 	if(collCom2 == null) // 当二者都是刚体时才
            // 		continue
            // }
        };
        return CollisionSystem;
    }(war.SystemBase));
    war.CollisionSystem = CollisionSystem;
    __reflect(CollisionSystem.prototype, "war.CollisionSystem");
})(war || (war = {}));
//# sourceMappingURL=CollisionSystem.js.map