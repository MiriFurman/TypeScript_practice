"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User = (function () {
    function User(name) {
        this._id = Math.random();
        this._name = name;
        this._ads = {};
        this._companies = {};
    }
    Object.defineProperty(User.prototype, "id", {
        get: function () {
            return this._id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(User.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (name) {
            this._name = name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(User.prototype, "ads", {
        get: function () {
            return this._ads;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(User.prototype, "companies", {
        get: function () {
            return this._companies;
        },
        enumerable: true,
        configurable: true
    });
    User.prototype.addAd = function (ad) {
        this._ads[ad.id] = ad;
        return ad.id;
    };
    User.prototype.assignCompany = function (company) {
        this._companies[company.id] = company;
        return company.id;
    };
    return User;
}());
exports.User = User;
//# sourceMappingURL=User.js.map