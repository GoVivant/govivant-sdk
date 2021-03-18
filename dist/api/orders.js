"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ApiOrders = /** @class */ (function () {
    function ApiOrders(api) {
        this.api = api;
    }
    ApiOrders.prototype.list = function (business, page, limit) {
        if (page === void 0) { page = 1; }
        if (limit === void 0) { limit = 15; }
        return this.api.get("/claptable/orders/" + business + "?page=" + page + "&limit=" + limit);
    };
    ApiOrders.prototype.view = function (id) {
        return this.api.get("/claptable/orders/" + id);
    };
    /**
    * Filter results by any property, through a query.
    * Ex: { foo: 'bar' }
    */
    ApiOrders.prototype.search = function (query, page, limit, populate, select) {
        if (page === void 0) { page = 1; }
        if (limit === void 0) { limit = 15; }
        if (populate === void 0) { populate = []; }
        if (select === void 0) { select = []; }
        return this.api.get("/claptable/orders/search?query=" + encodeURIComponent(JSON.stringify(query)) + "&page=" + page + "&limit=" + limit + "&populate=" + populate.join(',') + "&select=" + select.join(','));
    };
    ApiOrders.prototype.create = function (data) {
        return this.api.post("/claptable/orders", data);
    };
    ApiOrders.prototype.update = function (id, data) {
        return this.api.put("/claptable/orders/" + id, data);
    };
    ApiOrders.prototype.remove = function (id) {
        return this.api.delete("/claptable/orders/" + id);
    };
    return ApiOrders;
}());
exports.default = ApiOrders;
//# sourceMappingURL=orders.js.map