"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var util = /** @class */ (function () {
    function util() {
    }
    util.prototype.isArr = function (obj) {
        if (Array.isArray(obj))
            return true;
        else
            return false;
    };
    util.prototype.isEmail = function (str) {
        var mailFormat = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        return str.match(mailFormat);
    };
    util.prototype.isObjectId = function (str) {
        return mongoose_1.Types.ObjectId.isValid(str);
    };
    return util;
}());
var u = new util();
exports.default = u;
