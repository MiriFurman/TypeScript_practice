/**
 * Created by mirif on 02/08/2017.
 */
var Ad = (function () {
    function Ad(text) {
        this._id = Math.random();
        this._text = text;
        this._viewCount = 0;
    }
    Object.defineProperty(Ad.prototype, "id", {
        get: function () {
            return this._id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Ad.prototype, "text", {
        get: function () {
            return this._text;
        },
        set: function (text) {
            this._text = text;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Ad.prototype, "viewCount", {
        get: function () {
            return this._viewCount;
        },
        enumerable: true,
        configurable: true
    });
    Ad.prototype.increaseViewCount = function () {
        this._viewCount++;
    };
    return Ad;
}());
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
var companies = [];
var users = [];
var ads = [];
function assignUserToCompany(user, company) {
    user.assignCompany(company);
    company.assignUser(user);
}
for (var i = 0; i < 15; i++) {
    ads.push(new Ad("Ad " + i));
}
for (var i = 0; i < 5; i++) {
    users.push(new User("User " + i));
}
for (var i = 0; i < 3; i++) {
    companies.push(new Company("Company " + i));
}
assignUserToCompany(users[0], companies[0]);
assignUserToCompany(users[0], companies[2]);
assignUserToCompany(users[1], companies[0]);
assignUserToCompany(users[2], companies[0]);
assignUserToCompany(users[2], companies[1]);
assignUserToCompany(users[3], companies[0]);
assignUserToCompany(users[3], companies[1]);
assignUserToCompany(users[3], companies[2]);
assignUserToCompany(users[4], companies[2]);
users[0].addAd(ads[0]);
users[0].addAd(ads[1]);
users[1].addAd(ads[2]);
users[1].addAd(ads[3]);
users[2].addAd(ads[4]);
users[2].addAd(ads[5]);
users[3].addAd(ads[6]);
users[3].addAd(ads[7]);
users[4].addAd(ads[8]);
users[4].addAd(ads[9]);
users[4].addAd(ads[10]);
users[4].addAd(ads[11]);
users[4].addAd(ads[12]);
users[4].addAd(ads[13]);
users[4].addAd(ads[14]);
for (var i = 0; i < 15; i++) {
    ads[i].increaseViewCount();
}
for (var i = 0; i < 8; i++) {
    ads[i].increaseViewCount();
}
for (var i = 0; i < 5; i++) {
    ads[i].increaseViewCount();
}
for (var i = 0; i < 2; i++) {
    ads[i].increaseViewCount();
}
console.log(companies[0].getAds());
console.log(companies[1].getAds());
console.log(companies[2].getAds());
