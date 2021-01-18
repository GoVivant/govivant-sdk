"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ApiProducts = /** @class */ (function () {
    function ApiProducts(api) {
        this.api = api;
    }
    ApiProducts.prototype.list = function (page, limit) {
        if (page === void 0) { page = 1; }
        if (limit === void 0) { limit = 15; }
        return this.api.get("/products?page=" + page + "&limit=" + limit);
    };
    ApiProducts.prototype.view = function (id) {
        return this.api.get("/products/" + id);
    };
    /**
    * Filter results by any property, through a query.
    * Ex: { foo: 'bar' }
    */
    ApiProducts.prototype.search = function (query, page, limit, populate, select) {
        if (page === void 0) { page = 1; }
        if (limit === void 0) { limit = 15; }
        if (populate === void 0) { populate = []; }
        if (select === void 0) { select = []; }
        return this.api.get("/products/search?query=" + encodeURIComponent(JSON.stringify(query)) + "&page=" + page + "&limit=" + limit + "&populate=" + populate.join(',') + "&select=" + select.join(','));
    };
    ApiProducts.prototype.create = function (data) {
        return this.api.post("/products", data);
    };
    ApiProducts.prototype.update = function (id, data) {
        return this.api.put("/products/" + id, data);
    };
    ApiProducts.prototype.remove = function (id) {
        return this.api.delete("/products/" + id);
    };
    return ApiProducts;
}());
exports.default = ApiProducts;
//# sourceMappingURL=products.js.map