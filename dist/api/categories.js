"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ApiCategories = /** @class */ (function () {
    function ApiCategories(api) {
        this.api = api;
    }
    ApiCategories.prototype.list = function (page, limit) {
        if (page === void 0) { page = 1; }
        if (limit === void 0) { limit = 15; }
        return this.api.get("/categories?page=" + page + "&limit=" + limit);
    };
    ApiCategories.prototype.view = function (id) {
        return this.api.get("/categories/" + id);
    };
    /**
    * Filter results by any property, through a query.
    * Ex: { foo: 'bar' }
    */
    ApiCategories.prototype.search = function (query, page, limit, populate, select) {
        if (page === void 0) { page = 1; }
        if (limit === void 0) { limit = 15; }
        if (populate === void 0) { populate = []; }
        if (select === void 0) { select = []; }
        return this.api.get("/categories/search?query=" + encodeURIComponent(JSON.stringify(query)) + "&page=" + page + "&limit=" + limit + "&populate=" + populate.join(',') + "&select=" + select.join(','));
    };
    ApiCategories.prototype.create = function (data) {
        return this.api.post("/categories", data);
    };
    ApiCategories.prototype.update = function (id, data) {
        return this.api.put("/categories/" + id, data);
    };
    ApiCategories.prototype.remove = function (id) {
        return this.api.delete("/categories/" + id);
    };
    return ApiCategories;
}());
exports.default = ApiCategories;
//# sourceMappingURL=categories.js.map