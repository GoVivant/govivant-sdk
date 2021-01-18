"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ApiCustomers = /** @class */ (function () {
    function ApiCustomers(api) {
        this.api = api;
    }
    ApiCustomers.prototype.list = function (page, limit) {
        if (page === void 0) { page = 1; }
        if (limit === void 0) { limit = 15; }
        return this.api.get("/customers?page=" + page + "&limit=" + limit);
    };
    ApiCustomers.prototype.view = function (id) {
        return this.api.get("/customers/" + id);
    };
    /**
    * Filter results by any property, through a query.
    * Ex: { foo: 'bar' }
    */
    ApiCustomers.prototype.search = function (query, page, limit, populate, select) {
        if (page === void 0) { page = 1; }
        if (limit === void 0) { limit = 15; }
        if (populate === void 0) { populate = []; }
        if (select === void 0) { select = []; }
        return this.api.get("/customers/search?query=" + encodeURIComponent(JSON.stringify(query)) + "&page=" + page + "&limit=" + limit + "&populate=" + populate.join(',') + "&select=" + select.join(','));
    };
    ApiCustomers.prototype.create = function (data) {
        return this.api.post("/customers", data);
    };
    ApiCustomers.prototype.update = function (id, data) {
        return this.api.put("/customers/" + id, data);
    };
    ApiCustomers.prototype.remove = function (id) {
        return this.api.delete("/customers/" + id);
    };
    return ApiCustomers;
}());
exports.default = ApiCustomers;
//# sourceMappingURL=customers.js.map