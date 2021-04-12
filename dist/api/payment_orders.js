"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ApiPaymentOrders = /** @class */ (function () {
    function ApiPaymentOrders(api) {
        this.api = api;
    }
    ApiPaymentOrders.prototype.list = function (page, limit) {
        if (page === void 0) { page = 1; }
        if (limit === void 0) { limit = 15; }
        return this.api.get("/claptable/payment_orders?page=" + page + "&limit=" + limit);
    };
    ApiPaymentOrders.prototype.view = function (id) {
        return this.api.get("/claptable/payment_orders/" + id);
    };
    ApiPaymentOrders.prototype.create = function (data) {
        return this.api.post("/claptable/payment_orders", data);
    };
    ApiPaymentOrders.prototype.create_zoop = function (data) {
        return this.api.post("/claptable/payment_orders/zoop", data);
    };
    ApiPaymentOrders.prototype.create_stripe = function (data) {
        return this.api.post("/claptable/payment_orders/stripe", data);
    };
    ApiPaymentOrders.prototype.update = function (id, data) {
        return this.api.put("/claptable/payment_orders/" + id, data);
    };
    ApiPaymentOrders.prototype.remove = function (id) {
        return this.api.delete("/claptable/payment_orders/" + id);
    };
    return ApiPaymentOrders;
}());
exports.default = ApiPaymentOrders;
//# sourceMappingURL=payment_orders.js.map