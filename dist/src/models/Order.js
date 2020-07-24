"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var orderSchema = new mongoose_1.Schema({
    customer: { type: mongoose_1.Types.ObjectId, required: true },
    products: { type: mongoose_1.Types.ObjectId, required: true },
    amount: { type: Number, required: true },
    shippingAddress: {
        name: { type: String, required: true },
        contactNo: { type: String, required: true },
        addressLine1: { type: String, required: true },
        addressLine2: String,
        landmark: { type: String, required: true },
        city: { type: String, required: true },
        pincode: String,
    },
    status: {
        type: String,
        enum: [
            "PENDING",
            "CONFIRMED",
            "SHIPPED",
            "ON_THE_WAY",
            "NEAR_YOU",
            "DELIVERED",
        ],
    },
});
