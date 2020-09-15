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
var ConfigManager = (function (_super) {
    __extends(ConfigManager, _super);
    function ConfigManager() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ConfigManager.prototype.init = function () {
        this.cfgMap = new Hash();
    };
    ConfigManager.prototype.destroy = function () {
        _super.prototype.destroy.call(this);
        this.cfgMap.destroy();
    };
    ConfigManager.Ins = function () {
        if (ConfigManager.instance == null)
            ConfigManager.instance = new ConfigManager();
        return ConfigManager.instance;
    };
    return ConfigManager;
}(DataBase));
__reflect(ConfigManager.prototype, "ConfigManager");
//# sourceMappingURL=ConfigManager.js.map