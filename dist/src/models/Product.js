"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var productSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    features: [
        {
            attribute: { type: String, required: true },
            value: { type: String, required: true },
        },
    ],
    images: [String],
    specifications: [
        {
            attribute: { type: String, required: true },
            value: { type: String, required: true },
        },
    ],
    quantity: { type: Number, required: true },
    category: [String],
    saleCount: Number,
    view: Number,
    cartAddCount: Number,
    cartDiscardCount: Number,
    review: [
        {
            rating: { type: Number, required: true },
            comment: String,
            images: [String],
        },
    ],
    tag: {
        type: String,
        enum: ["NEW", "HOT", "TRENDING"],
    },
});
exports.Product = mongoose_1.model("Product", productSchema);
