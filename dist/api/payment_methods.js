"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ApiPaymentMethods = /** @class */ (function () {
    function ApiPaymentMethods(api) {
        this.api = api;
    }
    ApiPaymentMethods.prototype.list = function (page, limit) {
        if (page === void 0) { page = 1; }
        if (limit === void 0) { limit = 15; }
        return this.api.get("/claptable/payment_methods?page=" + page + "&limit=" + limit);
    };
    ApiPaymentMethods.prototype.view = function (id) {
        return this.api.get("/claptable/payment_methods/" + id);
    };
    /**
    * Filter results by any property, through a query.
    * Ex: { foo: 'bar' }
    */
    ApiPaymentMethods.prototype.search = function (query, page, limit, populate, select) {
        if (page === void 0) { page = 1; }
        if (limit === void 0) { limit = 15; }
        if (populate === void 0) { populate = []; }
        if (select === void 0) { select = []; }
        return this.api.get("/claptable/payment_methods/search?query=" + encodeURIComponent(JSON.stringify(query)) + "&page=" + page + "&limit=" + limit + "&populate=" + populate.join(',') + "&select=" + select.join(','));
    };
    ApiPaymentMethods.prototype.create = function (data) {
        return this.api.post("/claptable/payment_methods", data);
    };
    ApiPaymentMethods.prototype.update = function (id, data) {
        return this.api.put("/claptable/payment_methods/" + id, data);
    };
    ApiPaymentMethods.prototype.remove = function (id) {
        return this.api.delete("/claptable/payment_methods/" + id);
    };
    return ApiPaymentMethods;
}());
exports.default = ApiPaymentMethods;
//# sourceMappingURL=payment_methods.js.map