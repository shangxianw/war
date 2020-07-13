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
    /**
     * 名称：镜头系统
     * 原理：将render的本地坐标转换成舞台坐标，检测当该舞台坐标低于屏幕一半时，镜头发生滚动
     * 注意点：1、拿posCom的坐标来比较，而不是render的，因为渲染系统是最后执行的，所以第一帧的坐标肯定是0，会出现镜头瞬间到达目标位置的情况
     */
    var CameraSystem = (function (_super) {
        __extends(CameraSystem, _super);
        function CameraSystem() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        CameraSystem.prototype.init = function () {
            this.sysType = war.System.Camera;
        };
        CameraSystem.prototype.destroy = function () {
        };
        CameraSystem.prototype.update = function (entity, deltaTime) {
            if (entity == null)
                return;
            var posCom = entity.getComponent(war.Component.Pos);
            var ctrlCom = entity.getComponent(war.Component.Ctrl);
            var renderCom = entity.getComponent(war.Component.Render);
            if (posCom == null || ctrlCom == null || renderCom == null)
                return;
            var render = renderCom.render;
            var point = render.parent.localToGlobal(posCom.x, posCom.y);
            var halfStageHeight = render.stage.height / 2;
            if (point.y > 1400) {
                MessageManager.Ins().fire(3);
                return;
            }
            if (point.y >= 640)
                return;
            var addScro = point.y - 640;
            MessageManager.Ins().fire(2, addScro);
            war.WarDataMgr.Ins().updateStepLevel(posCom.y + war.WarDataMgr.Ins().StageHeight / 2); // 用的是poscom，不是point！！！因为标准线是在滚动条上的，不是在舞台上
        };
        return CameraSystem;
    }(war.SystemBase));
    war.CameraSystem = CameraSystem;
    __reflect(CameraSystem.prototype, "war.CameraSystem");
})(war || (war = {}));
