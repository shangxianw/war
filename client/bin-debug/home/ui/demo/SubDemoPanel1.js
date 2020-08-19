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
var home;
(function (home) {
    var SubDemoPanel1Data = (function (_super) {
        __extends(SubDemoPanel1Data, _super);
        function SubDemoPanel1Data() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        SubDemoPanel1Data.prototype.init = function () {
        };
        SubDemoPanel1Data.prototype.destroy = function () {
        };
        return SubDemoPanel1Data;
    }(DataBase));
    home.SubDemoPanel1Data = SubDemoPanel1Data;
    __reflect(SubDemoPanel1Data.prototype, "home.SubDemoPanel1Data");
    var SubDemoPanel1 = (function (_super) {
        __extends(SubDemoPanel1, _super);
        function SubDemoPanel1() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        SubDemoPanel1.prototype.init = function () {
            this.skinName = "SubDemoPanel1Skin";
        };
        SubDemoPanel1.prototype.destroy = function () {
        };
        return SubDemoPanel1;
    }(UIBase));
    home.SubDemoPanel1 = SubDemoPanel1;
    __reflect(SubDemoPanel1.prototype, "home.SubDemoPanel1");
})(home || (home = {}));
//# sourceMappingURL=SubDemoPanel1.js.map