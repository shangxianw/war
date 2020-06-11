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
    var DemoPanelData = (function (_super) {
        __extends(DemoPanelData, _super);
        function DemoPanelData() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DemoPanelData.prototype.init = function () {
        };
        DemoPanelData.prototype.destroy = function () {
        };
        return DemoPanelData;
    }(DataBase));
    home.DemoPanelData = DemoPanelData;
    __reflect(DemoPanelData.prototype, "home.DemoPanelData");
    var DemoPanel = (function (_super) {
        __extends(DemoPanel, _super);
        function DemoPanel() {
            return _super.call(this, "DemoPanelSkin") || this;
        }
        DemoPanel.prototype.init = function () {
            this.PanelId = ViewIdConst.DemoPanel;
            this.Layer = LayerManager.Ins().Panel;
        };
        DemoPanel.prototype.destroy = function () {
            // TimerManager.Ins().removeTimer(this.testTimer, this);
            // TimerManager.Ins().removeTimer(this.testTimer0, this);
            // TimerManager.Ins().removeTimer(this.testTimer1, this);
        };
        DemoPanel.prototype.initData = function () {
            // TimerManager.Ins().removeTimer(this.testTimer, this);
            // TimerManager.Ins().removeTimer(this.testTimer0, this);
            // TimerManager.Ins().removeTimer(this.testTimer1, this);
            // TimerManager.Ins().addTimer(1000, this.testTimer, this, true, "wsx", 18, 1);
            // TimerManager.Ins().addTimer(2000, this.testTimer0, this, true, "wsx", 18, 1);
            // TimerManager.Ins().addTimer(1500, this.testTimer1, this, false, "wsx", 18, 1);
            // let btn = new eui.Image;
            // btn.x = 200;
            // btn.y = 200;
            // btn.source = "bg_card_di_0_png";
            // this.addChild(btn);
        };
        DemoPanel.prototype.testTimer = function (e, name, age, sex) {
            if (e.count <= 10000) {
                this.timerLb.text = "" + e.count;
                return true;
            }
            return false;
        };
        DemoPanel.prototype.testTimer0 = function (e, name, age, sex) {
            if (e.count <= 30000) {
                this.timerLb0.text = "" + e.count;
                return true;
            }
            return false;
        };
        DemoPanel.prototype.testTimer1 = function (e, name, age, sex) {
            if (e.count <= 20000) {
                this.timerLb1.text = "" + e.count;
                return true;
            }
            return false;
        };
        return DemoPanel;
    }(ViewBase));
    home.DemoPanel = DemoPanel;
    __reflect(DemoPanel.prototype, "home.DemoPanel");
})(home || (home = {}));
//# sourceMappingURL=DemoPanel.js.map