"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Lapse = /** @class */ (function () {
    function Lapse() {
    }
    return Lapse;
}());
var Schedule = /** @class */ (function () {
    function Schedule() {
    }
    return Schedule;
}());
var Prize_Rule = /** @class */ (function () {
    function Prize_Rule() {
    }
    return Prize_Rule;
}());
var Rule = /** @class */ (function () {
    function Rule(name, app_id, enabled, schedule, businesses_id, products_id, currency, type, periods, description, min_spend, govivant_points_fee, reward_rule_invoices, prize_rules) {
        this.name = name;
        this.app_id = app_id;
        this.enabled = enabled;
        this.schedule = schedule;
        this.businesses_id = businesses_id;
        this.products_id = products_id;
        this.currency = currency;
        this.type = type;
        this.periods = periods;
        this.description = description;
        this.min_spend = min_spend;
        this.govivant_points_fee = govivant_points_fee;
        this.reward_rule_invoices = reward_rule_invoices;
        this.prize_rules = prize_rules;
    }
    return Rule;
}());
exports.default = Rule;
//# sourceMappingURL=Rule.js.map