var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var war;
(function (war) {
    var WarUtils = (function () {
        function WarUtils() {
        }
        WarUtils.Init = function () {
        };
        WarUtils.Destroy = function () {
        };
        WarUtils.CreateStepEntity = function (x, y, w, h, parent) {
            var entity = new war.StepEntity();
            var posCom = new war.PosCom();
            posCom.setXY(x, y);
            posCom.setWH(w, h);
            entity.setComponent(posCom);
            var rigidCom = new war.RigidCom();
            entity.setComponent(rigidCom);
            var stepCom = new war.StepCom();
            entity.setComponent(stepCom);
            var renderCom = new war.RenderCom();
            var stepRender = new war.StepRender();
            parent.addChild(stepRender);
            renderCom.setRender(stepRender);
            entity.setComponent(renderCom);
            war.WarDataMgr.Ins().addEntity(entity);
            return entity;
        };
        WarUtils.CreatePlayerEntity = function (x, y, parent) {
            var entity = new war.PlayerEntity();
            var posCom = new war.PosCom();
            posCom.setXY(x, y);
            posCom.setWH(204, 120);
            entity.setComponent(posCom);
            var ctrlCom = new war.CtrlCom();
            entity.setComponent(ctrlCom);
            var rigidCom = new war.RigidCom();
            entity.setComponent(rigidCom);
            var speedCom = new war.SpeedCom();
            speedCom.setSpeed(0, 0);
            entity.setComponent(speedCom);
            var gravityCom = new war.GravityCom();
            entity.setComponent(gravityCom);
            var renderCom = new war.RenderCom();
            var playerRender = new war.PlayerRender();
            parent.addChild(playerRender);
            renderCom.setRender(playerRender);
            entity.setComponent(renderCom);
            war.WarDataMgr.Ins().addEntity(entity);
            return entity;
        };
        return WarUtils;
    }());
    war.WarUtils = WarUtils;
    __reflect(WarUtils.prototype, "war.WarUtils");
})(war || (war = {}));
//# sourceMappingURL=WarUtils.js.map