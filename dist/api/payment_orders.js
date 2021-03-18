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
    /**
    * Filter results by any property, through a query.
    * Ex: { foo: 'bar' }
    */
    ApiPaymentOrders.prototype.search = function (query, page, limit, populate, select) {
        if (page === void 0) { page = 1; }
        if (limit === void 0) { limit = 15; }
        if (populate === void 0) { populate = []; }
        if (select === void 0) { select = []; }
        return this.api.get("/claptable/payment_orders/search?query=" + encodeURIComponent(JSON.stringify(query)) + "&page=" + page + "&limit=" + limit + "&populate=" + populate.join(',') + "&select=" + select.join(','));
    };
    ApiPaymentOrders.prototype.create = function (data) {
        return this.api.post("/claptable/payment_orders", data);
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