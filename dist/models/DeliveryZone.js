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
var DeliveryZone = /** @class */ (function () {
    function DeliveryZone(business_id, type, name, address, data, price, minimum, schedule, enabled) {
        this.business_id = business_id;
        this.type = type;
        this.name = name;
        this.address = address;
        this.data = data;
        this.price = price;
        this.minimum = minimum;
        this.schedule = schedule;
        this.enabled = enabled;
    }
    return DeliveryZone;
}());
exports.default = DeliveryZone;
//# sourceMappingURL=DeliveryZone.js.map