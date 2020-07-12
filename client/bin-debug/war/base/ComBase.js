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
    var ComBase = (function (_super) {
        __extends(ComBase, _super);
        function ComBase() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        ComBase.prototype.initAll = function () {
            _super.prototype.initAll.call(this);
        };
        ComBase.prototype.destroyAll = function () {
            _super.prototype.destroyAll.call(this);
        };
        return ComBase;
    }(DataBase));
    war.ComBase = ComBase;
    __reflect(ComBase.prototype, "war.ComBase");
})(war || (war = {}));
//# sourceMappingURL=ComBase.js.map