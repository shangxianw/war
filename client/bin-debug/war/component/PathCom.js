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
    var PathCom = (function (_super) {
        __extends(PathCom, _super);
        function PathCom() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        PathCom.prototype.init = function () {
            this.componentId = war.COMPONENT.PATH;
            this.path = [];
        };
        PathCom.prototype.destroy = function () {
            this.destroyPath();
            this.path.length = 0;
        };
        PathCom.prototype.setPath = function (path) {
            this.destroyPath();
            this.path = path;
        };
        PathCom.prototype.getDirection = function () {
            return this.path;
        };
        PathCom.prototype.destroyPath = function () {
            for (var _i = 0, _a = this.path; _i < _a.length; _i++) {
                var node = _a[_i];
                if (node == null)
                    continue;
                node.destroy();
                PoolManager.Ins().push(node);
            }
        };
        return PathCom;
    }(war.ComBase));
    war.PathCom = PathCom;
    __reflect(PathCom.prototype, "war.PathCom");
})(war || (war = {}));
//# sourceMappingURL=PathCom.js.map