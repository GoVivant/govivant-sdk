"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ApiClaptableProducts = /** @class */ (function () {
    function ApiClaptableProducts(api) {
        this.api = api;
    }
    ApiClaptableProducts.prototype.list = function (business, page, limit) {
        if (page === void 0) { page = 1; }
        if (limit === void 0) { limit = 15; }
        return this.api.get("/claptable/products/" + business + "?page=" + page + "&limit=" + limit);
    };
    ApiClaptableProducts.prototype.view = function (id) {
        return this.api.get("/claptable/products/view/" + id);
    };
    /**
    * Filter results by any property, through a query.
    * Ex: { foo: 'bar' }
    */
    ApiClaptableProducts.prototype.search = function (query, page, limit, populate, select) {
        if (page === void 0) { page = 1; }
        if (limit === void 0) { limit = 15; }
        if (populate === void 0) { populate = []; }
        if (select === void 0) { select = []; }
        return this.api.get("/claptable/products/search?query=" + encodeURIComponent(JSON.stringify(query)) + "&page=" + page + "&limit=" + limit + "&populate=" + populate.join(',') + "&select=" + select.join(','));
    };
    ApiClaptableProducts.prototype.create = function (data) {
        return this.api.post("/claptable/products", data);
    };
    ApiClaptableProducts.prototype.update = function (id, data) {
        return this.api.put("/claptable/products/" + id, data);
    };
    ApiClaptableProducts.prototype.remove = function (id) {
        return this.api.delete("/claptable/products/" + id);
    };
    return ApiClaptableProducts;
}());
exports.default = ApiClaptableProducts;
//# sourceMappingURL=claptable_products.js.map