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
    var InputSystem = (function (_super) {
        __extends(InputSystem, _super);
        function InputSystem() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        InputSystem.prototype.init = function () {
            this.sysType = war.System.Input;
        };
        InputSystem.prototype.destroy = function () {
        };
        InputSystem.prototype.update = function (entity, deltaTime) {
            if (entity == null)
                return;
            var ctrlCom = entity.getComponent(war.Component.Ctrl);
            if (ctrlCom == null)
                return;
            var posCom = entity.getComponent(war.Component.Pos);
            if (posCom == null)
                return;
            var mouseX = war.WarDataMgr.Ins().mouseX;
            var mouseY = war.WarDataMgr.Ins().mouseY;
            if (mouseX == null || mouseY == null)
                return;
            var renderCom = entity.getComponent(war.Component.Render);
            if (mouseX - posCom.width / 2 < 0)
                posCom.setX(posCom.width / 2);
            else if (mouseX + posCom.width / 2 > renderCom.render.parent.width)
                posCom.setX(renderCom.render.parent.width - posCom.width / 2);
            else
                posCom.setX(mouseX);
            if (mouseY - posCom.height / 2 < 0)
                posCom.setY(posCom.height / 2);
            else if (mouseY + posCom.height / 2 > renderCom.render.parent.height)
                posCom.setY(renderCom.render.parent.height - posCom.height / 2);
            else
                posCom.setY(mouseY);
            return;
        };
        return InputSystem;
    }(war.SystemBase));
    war.InputSystem = InputSystem;
    __reflect(InputSystem.prototype, "war.InputSystem");
})(war || (war = {}));
//# sourceMappingURL=InputSystem.js.map