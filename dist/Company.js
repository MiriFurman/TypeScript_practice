"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Company = (function () {
    function Company(name) {
        this._id = Math.random();
        this._name = name;
        this._users = {};
    }
    Object.defineProperty(Company.prototype, "id", {
        get: function () {
            return this._id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Company.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (name) {
            this._name = name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Company.prototype, "users", {
        get: function () {
            return this._users;
        },
        enumerable: true,
        configurable: true
    });
    Company.prototype.assignUser = function (user) {
        this._users[user.id] = user;
        return user.id;
    };
    Company.prototype.getAds = function () {
        var _this = this;
        var res = [];
        Object.keys(this._users).forEach(function (userId) {
            var adsMap = _this._users[userId].ads;
            var ads = Object.keys(adsMap).map(function (key) { return adsMap[key]; });
            res = res.concat(ads);
        });
        return res;
    };
    return Company;
}());
exports.Company = Company;
//# sourceMappingURL=Company.js.map