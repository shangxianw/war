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
    var HeadIconData = (function (_super) {
        __extends(HeadIconData, _super);
        function HeadIconData() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        HeadIconData.prototype.init = function () {
            this.icon = 0;
            this.frame = 0;
        };
        HeadIconData.prototype.destroy = function () {
            this.icon = 0;
            this.frame = 0;
        };
        HeadIconData.prototype.packData = function (icon, frame) {
            this.icon = icon;
            this.frame = frame;
            var homeData = home.HomeDataMgr.Ins();
            this.addAttrCB(homeData, "icon", this.OnRefreshIcon, this);
            this.addAttrCB(homeData, "frame", this.OnRefreshIcon, this);
            return this;
        };
        HeadIconData.prototype.OnRefreshIcon = function () {
            var homeData = home.HomeDataMgr.Ins();
            this.setAttr("icon", 2);
        };
        HeadIconData.prototype.OnRefreshFrame = function () {
            var homeData = home.HomeDataMgr.Ins();
            this.setAttr("frame", 1);
        };
        return HeadIconData;
    }(DataBase));
    home.HeadIconData = HeadIconData;
    __reflect(HeadIconData.prototype, "home.HeadIconData");
    var HeadIcon = (function (_super) {
        __extends(HeadIcon, _super);
        function HeadIcon() {
            return _super.call(this, "HeadIconSkin") || this;
        }
        HeadIcon.prototype.init = function () {
        };
        HeadIcon.prototype.destroy = function () {
            if (this.info != null) {
                this.info.destroyAll();
            }
        };
        HeadIcon.prototype.update = function () {
            this.info.addAttrListener("icon", this.OnRefreshIcon, this);
            this.info.addAttrListener("frame", this.OnRefreshFrame, this);
        };
        HeadIcon.prototype.OnRefreshIcon = function () {
            this.headIcon.source = Utils.GetHeadIcon(this.info.icon);
        };
        HeadIcon.prototype.OnRefreshFrame = function () {
            this.headFrame.source = Utils.GetHeadFrame(this.info.frame);
        };
        return HeadIcon;
    }(UIBase));
    home.HeadIcon = HeadIcon;
    __reflect(HeadIcon.prototype, "home.HeadIcon");
})(home || (home = {}));
//# sourceMappingURL=HeadIcon.js.map