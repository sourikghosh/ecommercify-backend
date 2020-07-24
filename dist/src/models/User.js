"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var userSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    customers: { type: mongoose_1.Types.ObjectId, required: true },
    role: { type: String, enum: ["ADMIN", "MANAGER"] },
});
var User = mongoose_1.model("User", userSchema);
