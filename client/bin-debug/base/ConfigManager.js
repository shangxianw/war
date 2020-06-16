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
        this.cfgMap.destroy();
    };
    ConfigManager.prototype.set = function (name, cfg) {
        if (name == null || name == "" || cfg == null) {
            LogUtils.Error("参数错误");
            return false;
        }
        if (this.cfgMap.has(name) == true) {
            LogUtils.Error("已存在配置");
            return false;
        }
        this.cfgMap.set(name, cfg);
        return true;
    };
    ConfigManager.prototype.remove = function (name) {
        if (name == null || name == "") {
            LogUtils.Error("参数错误");
            return false;
        }
        if (this.cfgMap.has(name) == false) {
            LogUtils.Error("不存在配置");
            return false;
        }
        var cfg = this.cfgMap.remove(name); // 因为本身只是一个json对象，所以也不需要destroy了
        return true;
    };
    ConfigManager.prototype.get = function (name) {
        if (name == null || name == "") {
            LogUtils.Error("参数错误");
            return false;
        }
        if (this.cfgMap.has(name) == false) {
            LogUtils.Error("不存在配置");
            return false;
        }
        return this.cfgMap.get(name);
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