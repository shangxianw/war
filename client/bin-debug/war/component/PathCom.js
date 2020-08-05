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
            this.comType = war.Component.Path;
            this.path = [];
        };
        PathCom.prototype.destroy = function () {
        };
        PathCom.prototype.setPath = function (newPath) {
            while (this.path.length > 0) {
                var item = this.path.shift();
                item.destroy();
            }
            this.path.length = 0;
            this.path = newPath;
        };
        PathCom.prototype.getCurrNode = function () {
            return this.path[0];
        };
        return PathCom;
    }(war.ComBase));
    war.PathCom = PathCom;
    __reflect(PathCom.prototype, "war.PathCom");
})(war || (war = {}));
//# sourceMappingURL=PathCom.js.map