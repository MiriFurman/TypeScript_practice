"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
exports.Ad = Ad;
//# sourceMappingURL=Ad.js.map