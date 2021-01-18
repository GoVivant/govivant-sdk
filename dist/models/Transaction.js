"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Status = /** @class */ (function () {
    function Status() {
    }
    return Status;
}());
var Source = /** @class */ (function () {
    function Source() {
    }
    return Source;
}());
var Transaction = /** @class */ (function () {
    function Transaction(name, customer_id, business_id, reward_rule_id, user_update_id, status, source, merchant_fetching, transaction_points, update_at) {
        this.name = name;
        this.customer_id = customer_id;
        this.business_id = business_id;
        this.reward_rule_id = reward_rule_id;
        this.user_update_id = user_update_id;
        this.status = status;
        this.source = source;
        this.merchant_fetching = merchant_fetching;
        this.transaction_points = transaction_points;
        this.update_at = update_at;
    }
    return Transaction;
}());
exports.default = Transaction;
//# sourceMappingURL=Transaction.js.map