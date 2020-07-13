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
    var StepEntity = (function (_super) {
        __extends(StepEntity, _super);
        function StepEntity() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        StepEntity.prototype.init = function () {
        };
        StepEntity.prototype.destroy = function () {
        };
        return StepEntity;
    }(war.EntityBase));
    war.StepEntity = StepEntity;
    __reflect(StepEntity.prototype, "war.StepEntity");
})(war || (war = {}));
