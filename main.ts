/**
 * Created by mirif on 02/08/2017.
 */
import {Ad} from './Ad';
import {User} from './User';
import {Company} from './Company';
import * as fs from 'fs';

let companies: Company[] = [];
let users: User[] = [];
let ads: Ad[] = [];


function assignUserToCompany(user: User, company: Company) {
    user.assignCompany(company);
    company.assignUser(user);
}

for (let i=0; i<15; i++){
    ads.push(new Ad(`Ad ${i}`));
}

for (let i=0; i<5; i++){
    users.push(new User(`User ${i}`));
}

for (let i=0; i<3; i++){
    companies.push(new Company(`Company ${i}`));
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

for (let i=0; i<15; i++){
    ads[i].increaseViewCount();
}

for (let i=0; i<8; i++){
    ads[i].increaseViewCount();
}

for (let i=0; i<5; i++){
    ads[i].increaseViewCount();
}

for (let i=0; i<2; i++){
    ads[i].increaseViewCount();
}

fs.writeFileSync('./data', JSON.stringify(companies[0].getAds()));
fs.writeFileSync('./data', JSON.stringify(companies[1].getAds()));
fs.writeFileSync('./data', JSON.stringify(companies[2].getAds()));