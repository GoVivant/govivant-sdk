"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ApiFoodCategories = /** @class */ (function () {
    function ApiFoodCategories(api) {
        this.api = api;
    }
    ApiFoodCategories.prototype.list = function (page, limit) {
        if (page === void 0) { page = 1; }
        if (limit === void 0) { limit = 15; }
        return this.api.get("/claptable/food_categories?page=" + page + "&limit=" + limit);
    };
    ApiFoodCategories.prototype.view = function (id) {
        return this.api.get("/claptable/food_categories/" + id);
    };
    /**
    * Filter results by any property, through a query.
    * Ex: { foo: 'bar' }
    */
    ApiFoodCategories.prototype.search = function (query, page, limit, populate, select) {
        if (page === void 0) { page = 1; }
        if (limit === void 0) { limit = 15; }
        if (populate === void 0) { populate = []; }
        if (select === void 0) { select = []; }
        return this.api.get("/claptable/food_categories/search?query=" + encodeURIComponent(JSON.stringify(query)) + "&page=" + page + "&limit=" + limit + "&populate=" + populate.join(',') + "&select=" + select.join(','));
    };
    ApiFoodCategories.prototype.create = function (data) {
        return this.api.post("/claptable/food_categories", data);
    };
    ApiFoodCategories.prototype.update = function (id, data) {
        return this.api.put("/claptable/food_categories/" + id, data);
    };
    ApiFoodCategories.prototype.remove = function (id) {
        return this.api.delete("/claptable/food_categories/" + id);
    };
    return ApiFoodCategories;
}());
exports.default = ApiFoodCategories;
//# sourceMappingURL=food_categories.js.map