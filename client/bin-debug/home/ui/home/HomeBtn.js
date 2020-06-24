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
    var HomeBtnData = (function (_super) {
        __extends(HomeBtnData, _super);
        function HomeBtnData() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        HomeBtnData.prototype.init = function () {
        };
        HomeBtnData.prototype.destroy = function () {
            // document.fonts
        };
        return HomeBtnData;
    }(DataBase));
    home.HomeBtnData = HomeBtnData;
    __reflect(HomeBtnData.prototype, "home.HomeBtnData");
    var HomeBtn = (function (_super) {
        __extends(HomeBtn, _super);
        function HomeBtn() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        HomeBtn.prototype.destroy = function () {
        };
        return HomeBtn;
    }(UIBase));
    home.HomeBtn = HomeBtn;
    __reflect(HomeBtn.prototype, "home.HomeBtn");
})(home || (home = {}));
//# sourceMappingURL=HomeBtn.js.map