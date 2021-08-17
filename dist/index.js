"use strict";
var tslib_1 = require("tslib");
var axios_1 = tslib_1.__importDefault(require("axios"));
var jokes_json_1 = tslib_1.__importDefault(require("./jokes.json"));
var DicioJS = /** @class */ (function () {
    function DicioJS() {
    }
    DicioJS.prototype.significado = function (word) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, axios_1.default.get("https://significado.herokuapp.com/meanings/" + encodeURI(word)).then(function (response) {
                            return response.data[0];
                        })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    DicioJS.prototype.wikipedia = function (word) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, axios_1.default.get("https://pt.wikipedia.org/api/rest_v1/page/summary/" + encodeURI(word), {
                        'httpsAgent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 11_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.106 Safari/537.36'
                    }).then(function (response) {
                        return response.data;
                    })];
            });
        });
    };
    DicioJS.prototype.piada = function () {
        var rand = Math.floor(Math.random() * jokes_json_1.default.features.length);
        var piada = jokes_json_1.default.features[rand];
        return piada;
    };
    return DicioJS;
}());
module.exports = new DicioJS();
