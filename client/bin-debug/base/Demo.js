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
var Demo = (function (_super) {
    __extends(Demo, _super);
    function Demo() {
        return _super.call(this) || this;
    }
    Demo.prototype.init = function () {
    };
    Demo.prototype.destroy = function () {
    };
    Demo.Ins = function () {
        if (Demo.Instance == null)
            Demo.Instance = new Demo();
        return Demo.Instance;
    };
    return Demo;
}(DataBase));
__reflect(Demo.prototype, "Demo");
//# sourceMappingURL=Demo.js.map