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
    var WarDataMgr = (function (_super) {
        __extends(WarDataMgr, _super);
        function WarDataMgr() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.StageWidth = 640;
            _this.StageHeight = 1280;
            _this.StepWidth = 100;
            _this.StepHeight = 30;
            _this.G = 1000;
            _this.MaxStepCount = 10; // 一个区域最多有N个阶梯
            _this.CheckSpaceCount = 5;
            _this.StepLevelHeight = 300;
            return _this;
        }
        WarDataMgr.prototype.init = function () {
            this.jumpSpeed = -1000;
            this.moveXSpeed = 700;
            this.currStepLevel = 0;
            this.lastStepLevel = null;
            this.world = new war.World();
            this.entityMap = new Hash();
        };
        WarDataMgr.prototype.destroy = function () {
            this.world.destroy();
            this.world = null;
            this.destroyEntityMap();
            this.entityMap = null;
        };
        WarDataMgr.prototype.startWar = function () {
            this.beginX = 0;
            this.endX = 0;
            egret.startTick(this.update, this);
        };
        WarDataMgr.prototype.endWar = function () {
            this.beginX = 0;
            this.endX = 0;
            egret.stopTick(this.update, this);
            this.destroyEntityMap();
        };
        WarDataMgr.prototype.update = function (currTime) {
            if (currTime === void 0) { currTime = null; }
            try {
                this.world.update(currTime);
                return true;
            }
            catch (e) {
                return false;
            }
        };
        // ---------------------------------------------------------------------- 实体
        WarDataMgr.prototype.addEntity = function (entity) {
            if (this.entityMap.has(entity.hasCode) == true)
                return false;
            this.entityMap.set(entity.hasCode, entity);
        };
        WarDataMgr.prototype.removeEntity = function (entity) {
            if (this.entityMap.has(entity.hasCode) == false)
                return null;
            this.entityMap.remove(entity.hasCode);
            entity.destroyAll();
        };
        WarDataMgr.prototype.destroyEntityMap = function () {
            for (var _i = 0, _a = this.entityMap.values(); _i < _a.length; _i++) {
                var item = _a[_i];
                item.destroyAll();
            }
            this.entityMap.destroy();
        };
        WarDataMgr.prototype.updateStepLevel = function (height) {
            if (height === void 0) { height = null; }
            var standLine = 0;
            if (height == null) {
                standLine = MathUtils.CalcRoundBySpace(this.StageHeight, this.StepLevelHeight);
            }
            else {
                standLine = MathUtils.CalcRoundBySpace(height, this.StepLevelHeight);
            }
            this.lastStepLevel = this.currStepLevel;
            this.currStepLevel = standLine;
            this.updateMaxStepCount();
        };
        WarDataMgr.prototype.updateMaxStepCount = function () {
            if (this.currStepLevel > -1000)
                this.MaxStepCount = 10;
            else if (this.currStepLevel > -2000)
                this.MaxStepCount = 9;
            else if (this.currStepLevel > -3000)
                this.MaxStepCount = 8;
            else if (this.currStepLevel > -4000)
                this.MaxStepCount = 7;
            else if (this.currStepLevel > -5000)
                this.MaxStepCount = 6;
            else if (this.currStepLevel > -6000)
                this.MaxStepCount = 5;
            else if (this.currStepLevel > -7000)
                this.MaxStepCount = 4;
            else if (this.currStepLevel > -8000)
                this.MaxStepCount = 3;
            else if (this.currStepLevel > -9000)
                this.MaxStepCount = 2;
        };
        WarDataMgr.Ins = function () {
            if (WarDataMgr.instance == null)
                WarDataMgr.instance = new WarDataMgr();
            return WarDataMgr.instance;
        };
        return WarDataMgr;
    }(DataBase));
    war.WarDataMgr = WarDataMgr;
    __reflect(WarDataMgr.prototype, "war.WarDataMgr");
})(war || (war = {}));
