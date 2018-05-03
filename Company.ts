/**
 * Created by mirif on 02/08/2017.
 */
import {Ad} from './Ad';
import {User} from './User';

export class Company {
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