"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Sentry = __importStar(require("@sentry/node"));
var app_1 = __importDefault(require("./api/app"));
var PORT = String(3000);
if (process.env.PORT) {
    PORT = process.env.PORT;
}
app_1.default.use(Sentry.Handlers.errorHandler());
app_1.default.listen(PORT, function () {
    console.log("Server is running at " + PORT);
});
