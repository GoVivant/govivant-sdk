"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Paymethod = /** @class */ (function () {
    function Paymethod() {
    }
    return Paymethod;
}());
var Plan = /** @class */ (function () {
    function Plan(name, enabled, currency, billing_cycle, fixed, points_price, prizes_price, transactions_price, paymethod_id, country_id) {
        this.name = name;
        this.enabled = enabled;
        this.currency = currency;
        this.billing_cycle = billing_cycle;
        this.fixed = fixed;
        this.points_price = points_price;
        this.prizes_price = prizes_price;
        this.transactions_price = transactions_price;
        this.paymethod_id = paymethod_id;
        this.country_id = country_id;
    }
    return Plan;
}());
exports.default = Plan;
//# sourceMappingURL=Plan.js.map