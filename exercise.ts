/**
 * Created by mirif on 02/08/2017.
 */

class Ad {
    private _id: number;
    private _text: string;
    private _viewCount: number;

    constructor(text: string) {
        this._id = Math.random();
        this._text = text;
        this._viewCount = 0;
    }

    get id(){
        return this._id;
    }

    get text() {
        return this._text;
    }

    get viewCount() {
        return this._viewCount
    }

    set text(text:string) {
        this._text = text;
    }

    public increaseViewCount(){
        this._viewCount++;
    }
}

class User {
    private _id: number;
    private _name: string;
    private _ads: {[key: number]: Ad};
    private _companies: {[key: number]: Company};

    constructor(name: string) {
        this._id = Math.random();
        this._name = name;
        this._ads = {};
        this._companies = {};
    }

    get id() {
        return this._id;
    }

    get name() {
        return this._name;
    }

    get ads() {
        return this._ads;
    }

    get companies(){
        return this._companies;
    }

    set name(name:string) {
        this._name = name;
    }

    public addAd(ad: Ad):number {
        this._ads[ad.id] = ad;
        return ad.id;
    }

    public assignCompany(company:Company):number {
        this._companies[company.id] = company;
        return company.id;
    }
}

class Company {
    private _id: number;
    private _name: string;
    private _users: {[key: number]: User};

    constructor(name: string){
        this._id = Math.random();
        this._name = name;
        this._users = {};
    }

    get id() {
        return this._id;
    }

    get name() {
        return this._name;
    }

    get users(){
        return this._users;
    }

    set name(name:string) {
        this._name = name;
    }

    public assignUser(user:User):number {
        this._users[user.id] = user;
        return user.id;
    }

    public getAds(): Ad[]{
        let res: Ad[] = [];
        Object.keys(this._users).forEach(userId => {
            const adsMap = this._users[userId].ads;
            const ads = Object.keys(adsMap).map(key => adsMap[key]);
            res = res.concat(ads);
        });
        return res;
    }
}

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

console.log(companies[0].getAds());
console.log(companies[1].getAds());
console.log(companies[2].getAds());

