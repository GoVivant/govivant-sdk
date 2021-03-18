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
var Extra = /** @class */ (function () {
    function Extra(name, description, ingredients_id, options_id, business_id, rank, schedule, enabled) {
        this.name = name;
        this.description = description;
        this.ingredients_id = ingredients_id;
        this.options_id = options_id;
        this.business_id = business_id;
        this.rank = rank;
        this.schedule = schedule;
        this.enabled = enabled;
    }
    return Extra;
}());
exports.default = Extra;
//# sourceMappingURL=Extra.js.map