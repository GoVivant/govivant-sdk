"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Point = /** @class */ (function () {
    function Point(transaction_date, value, transaction_points, previous_points, business_id, transaction_id, rule_id, customer_id, redeem_id, comments, currency, type) {
        this.transaction_date = transaction_date;
        this.value = value;
        this.transaction_points = transaction_points;
        this.previous_points = previous_points;
        this.business_id = business_id;
        this.transaction_id = transaction_id;
        this.rule_id = rule_id;
        this.customer_id = customer_id;
        this.redeem_id = redeem_id;
        this.comments = comments;
        this.currency = currency;
        this.type = type;
    }
    return Point;
}());
exports.default = Point;
//# sourceMappingURL=Point.js.map