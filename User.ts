/**
 * Created by mirif on 02/08/2017.
 */
import {Ad} from './Ad';
import {Company} from './Company';

export class User {
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