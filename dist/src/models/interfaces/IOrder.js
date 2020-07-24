"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var orderStatus;
(function (orderStatus) {
    orderStatus[orderStatus["PENDING"] = 0] = "PENDING";
    orderStatus[orderStatus["CONFIRMED"] = 1] = "CONFIRMED";
    orderStatus[orderStatus["SHIPPED"] = 2] = "SHIPPED";
    orderStatus[orderStatus["ON_THE_WAY"] = 3] = "ON_THE_WAY";
    orderStatus[orderStatus["NEAR_YOU"] = 4] = "NEAR_YOU";
    orderStatus[orderStatus["DELIVERED"] = 5] = "DELIVERED";
})(orderStatus || (orderStatus = {}));
