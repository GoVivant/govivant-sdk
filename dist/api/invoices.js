"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ApiInvoices = /** @class */ (function () {
    function ApiInvoices(api) {
        this.api = api;
    }
    ApiInvoices.prototype.list = function (page, limit) {
        if (page === void 0) { page = 1; }
        if (limit === void 0) { limit = 15; }
        return this.api.get("/invoices?page=" + page + "&limit=" + limit);
    };
    ApiInvoices.prototype.view = function (id) {
        return this.api.get("/invoices/" + id);
    };
    /**
    * Filter results by any property, through a query.
    * Ex: { foo: 'bar' }
    */
    ApiInvoices.prototype.search = function (query, page, limit, populate, select) {
        if (page === void 0) { page = 1; }
        if (limit === void 0) { limit = 15; }
        if (populate === void 0) { populate = []; }
        if (select === void 0) { select = []; }
        return this.api.get("/invoices/search?query=" + encodeURIComponent(JSON.stringify(query)) + "&page=" + page + "&limit=" + limit + "&populate=" + populate.join(',') + "&select=" + select.join(','));
    };
    ApiInvoices.prototype.create = function (data) {
        return this.api.post("/invoices", data);
    };
    ApiInvoices.prototype.update = function (id, data) {
        return this.api.put("/invoices/" + id, data);
    };
    ApiInvoices.prototype.remove = function (id) {
        return this.api.delete("/invoices/" + id);
    };
    return ApiInvoices;
}());
exports.default = ApiInvoices;
//# sourceMappingURL=invoices.js.map