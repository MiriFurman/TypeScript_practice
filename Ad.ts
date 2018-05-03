/**
 * Created by mirif on 02/08/2017.
 */
export class Ad {
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