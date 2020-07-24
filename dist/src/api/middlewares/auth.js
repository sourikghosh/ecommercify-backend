"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var extractToken = function (req) {
    if (req.header.Authorization.startsWith("Bearer ")) {
        var bearer = req.header.Authorization;
        var token = bearer.split(" ")[1];
        return token;
    }
    else
        throw Error("Token not found");
};
var isCustomer = function (req, res, next) { };
