var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var RedType = {
    "main_jundui": {
        "kazu": {
            "hero_upgrade": {},
            "hero_new": {},
            "haha": {}
        },
        "lingzhu": {}
    },
    "main_kazu": {},
    "saishi": {
        "zbs": {
            "duanwei": {},
            "count": {}
        },
        "pws": {}
    }
};
var RedPointData = (function () {
    function RedPointData() {
    }
    RedPointData.prototype.packData = function (redName, parent, children) {
        this.redName = redName;
        this.parent = parent;
        this.children = children;
    };
    RedPointData.prototype.destroy = function () {
    };
    return RedPointData;
}());
__reflect(RedPointData.prototype, "RedPointData");
var RedPointMgr = (function () {
    function RedPointMgr() {
        this.init();
    }
    RedPointMgr.prototype.init = function () {
        this.redMap = new Hash();
        this.initRedData(RedType, "");
    };
    RedPointMgr.prototype.initRedData = function (obj, pName) {
        for (var key in obj) {
            var children = [];
            for (var childKey in obj[key]) {
                children.push(childKey);
            }
            var redData = new RedPointData();
            redData.packData(key, pName, children);
            this.redMap.set(key, redData);
            this.initRedData(obj[key], key);
        }
    };
    RedPointMgr.prototype.destroy = function () {
    };
    RedPointMgr.Ins = function () {
        if (RedPointMgr.Instance == null)
            RedPointMgr.Instance = new RedPointMgr();
        return RedPointMgr.Instance;
    };
    return RedPointMgr;
}());
__reflect(RedPointMgr.prototype, "RedPointMgr");
//# sourceMappingURL=RedPointMgr.js.map