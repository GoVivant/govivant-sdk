"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Offer = /** @class */ (function () {
    function Offer(name, type, minimum, rate_type, rate, start, end, limit, coupon, enabled) {
        this.name = name;
        this.type = type;
        this.minimum = minimum;
        this.rate_type = rate_type;
        this.rate = rate;
        this.start = start;
        this.end = end;
        this.limit = limit;
        this.coupon = coupon;
        this.enabled = enabled;
    }
    return Offer;
}());
exports.default = Offer;
//# sourceMappingURL=Offer.js.map