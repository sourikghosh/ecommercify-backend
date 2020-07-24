"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var config_1 = __importDefault(require("../../util/config"));
mongoose_1.connection.on("reconnected", function () {
    console.log("Mongoose Connection Reestablished");
});
mongoose_1.connection.on("close", function () {
    console.log("Mongoose Connection Closed");
});
mongoose_1.connect(config_1.default.MONGO_CONNECTION_URI + "/" + config_1.default.DATABASE, {
    useUnifiedTopology: true,
    useCreateIndex: true,
    useNewUrlParser: true,
})
    .then(function () {
    console.log("connected");
})
    .catch(function (e) { return console.log("error in connecting mongoose", e); });
