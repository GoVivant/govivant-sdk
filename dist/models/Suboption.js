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
var IntegrationItem = /** @class */ (function () {
    function IntegrationItem() {
    }
    return IntegrationItem;
}());
var Integrations = /** @class */ (function () {
    function Integrations() {
    }
    return Integrations;
}());
var Suboption = /** @class */ (function () {
    function Suboption(name, description, extra_option_id, half_price, image, price, rank, calories, integrations, schedule, enabled) {
        this.name = name;
        this.description = description;
        this.extra_option_id = extra_option_id;
        this.half_price = half_price;
        this.image = image;
        this.price = price;
        this.rank = rank;
        this.calories = calories;
        this.integrations = integrations;
        this.schedule = schedule;
        this.enabled = enabled;
    }
    return Suboption;
}());
exports.default = Suboption;
//# sourceMappingURL=Suboption.js.map