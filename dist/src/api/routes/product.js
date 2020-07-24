"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var router = express_1.Router();
exports.default = router;
router.get("/", function (req, res) {
    res.send("<h1>Yeeeeeeeee</h1>");
});
