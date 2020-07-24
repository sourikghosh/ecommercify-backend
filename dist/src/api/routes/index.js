"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var product_1 = __importDefault(require("./product"));
var customer_1 = __importDefault(require("./customer"));
var router = express_1.Router();
exports.default = router;
router.use("/product", product_1.default);
router.use("/customer", customer_1.default);
