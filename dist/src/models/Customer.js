"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var argon2_1 = require("argon2");
var mongoose_1 = require("mongoose");
var customerSchema = new mongoose_1.Schema({
    name: { type: String, required: true, minlength: 4, trim: true },
    email: { type: String, unique: true, required: true, index: true },
    contactNo: { type: String, unique: true, required: true, index: true },
    password: { type: String, required: true, minlength: 5 },
    orders: [{ type: mongoose_1.Types.ObjectId }],
    verified: {
        status: Boolean,
        via: { type: String, enum: ["email", "contactno"] },
    },
    address: [
        {
            name: { type: String, required: true },
            contactNo: { type: String, required: true },
            addressLine1: { type: String, required: true },
            addressLine2: String,
            landmark: { type: String, required: true },
            city: { type: String, required: true },
            pincode: String,
        },
    ],
    isBlackListed: { type: Boolean },
    productViewed: [
        {
            productId: mongoose_1.Types.ObjectId,
            date: Date,
        },
    ],
    cartActivity: {
        added: mongoose_1.Types.ObjectId,
        discarded: mongoose_1.Types.ObjectId,
    },
    inCart: [mongoose_1.Types.ObjectId],
});
customerSchema.pre("save", function (next) {
    return __awaiter(this, void 0, void 0, function () {
        var customer, hashedPwd, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    customer = this;
                    if (!customer.isModified("password"))
                        return [2 /*return*/, next()];
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, argon2_1.hash(customer.password)];
                case 2:
                    hashedPwd = _a.sent();
                    customer.password = hashedPwd;
                    return [3 /*break*/, 4];
                case 3:
                    error_1 = _a.sent();
                    return [2 /*return*/, next(error_1)];
                case 4: return [2 /*return*/];
            }
        });
    });
});
customerSchema.methods.comparePassword = function (cPassword) {
    return __awaiter(this, void 0, void 0, function () {
        var result, _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, argon2_1.verify(this.password, cPassword)];
                case 1:
                    result = _b.sent();
                    if (result) {
                        return [2 /*return*/, true];
                    }
                    else
                        return [2 /*return*/, false];
                    return [3 /*break*/, 3];
                case 2:
                    _a = _b.sent();
                    throw Error("Error in comparing password");
                case 3: return [2 /*return*/];
            }
        });
    });
};
exports.Customer = mongoose_1.model("Customer", customerSchema);
