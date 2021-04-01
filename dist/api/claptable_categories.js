"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ApiClaptableCategories = /** @class */ (function () {
    function ApiClaptableCategories(api) {
        this.api = api;
    }
    ApiClaptableCategories.prototype.list = function (business, page, limit) {
        if (page === void 0) { page = 1; }
        if (limit === void 0) { limit = 15; }
        return this.api.get("/claptable/categories/" + business + "?page=" + page + "&limit=" + limit);
    };
    ApiClaptableCategories.prototype.view = function (id) {
        return this.api.get("/claptable/categories/view/" + id);
    };
    /**
    * Filter results by any property, through a query.
    * Ex: { foo: 'bar' }
    */
    ApiClaptableCategories.prototype.search = function (query, page, limit, populate, select) {
        if (page === void 0) { page = 1; }
        if (limit === void 0) { limit = 15; }
        if (populate === void 0) { populate = []; }
        if (select === void 0) { select = []; }
        return this.api.get("/claptable/categories/search?query=" + encodeURIComponent(JSON.stringify(query)) + "&page=" + page + "&limit=" + limit + "&populate=" + populate.join(',') + "&select=" + select.join(','));
    };
    ApiClaptableCategories.prototype.create = function (data) {
        return this.api.post("/claptable/categories", data);
    };
    ApiClaptableCategories.prototype.update = function (id, data) {
        return this.api.put("/claptable/categories/" + id, data);
    };
    ApiClaptableCategories.prototype.remove = function (id) {
        return this.api.delete("/claptable/categories/" + id);
    };
    return ApiClaptableCategories;
}());
exports.default = ApiClaptableCategories;
//# sourceMappingURL=claptable_categories.js.map