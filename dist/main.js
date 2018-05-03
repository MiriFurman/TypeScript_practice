"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by mirif on 02/08/2017.
 */
var Ad_1 = require("./Ad");
var User_1 = require("./User");
var Company_1 = require("./Company");
var fs = require("fs");
var companies = [];
var users = [];
var ads = [];
function assignUserToCompany(user, company) {
    user.assignCompany(company);
    company.assignUser(user);
}
for (var i = 0; i < 15; i++) {
    ads.push(new Ad_1.Ad("Ad " + i));
}
for (var i = 0; i < 5; i++) {
    users.push(new User_1.User("User " + i));
}
for (var i = 0; i < 3; i++) {
    companies.push(new Company_1.Company("Company " + i));
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
fs.writeFileSync('./data', JSON.stringify(companies[0].getAds()));
fs.writeFileSync('./data', JSON.stringify(companies[1].getAds()));
fs.writeFileSync('./data', JSON.stringify(companies[2].getAds()));
//# sourceMappingURL=main.js.map