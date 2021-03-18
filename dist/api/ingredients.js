"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ApiIngredients = /** @class */ (function () {
    function ApiIngredients(api) {
        this.api = api;
    }
    ApiIngredients.prototype.list = function (page, limit) {
        if (page === void 0) { page = 1; }
        if (limit === void 0) { limit = 15; }
        return this.api.get("/claptable/ingredients?page=" + page + "&limit=" + limit);
    };
    ApiIngredients.prototype.view = function (id) {
        return this.api.get("/claptable/ingredients/" + id);
    };
    /**
    * Filter results by any property, through a query.
    * Ex: { foo: 'bar' }
    */
    ApiIngredients.prototype.search = function (query, page, limit, populate, select) {
        if (page === void 0) { page = 1; }
        if (limit === void 0) { limit = 15; }
        if (populate === void 0) { populate = []; }
        if (select === void 0) { select = []; }
        return this.api.get("/claptable/ingredients/search?query=" + encodeURIComponent(JSON.stringify(query)) + "&page=" + page + "&limit=" + limit + "&populate=" + populate.join(',') + "&select=" + select.join(','));
    };
    ApiIngredients.prototype.create = function (data) {
        return this.api.post("/claptable/ingredients", data);
    };
    ApiIngredients.prototype.update = function (id, data) {
        return this.api.put("/claptable/ingredients/" + id, data);
    };
    ApiIngredients.prototype.remove = function (id) {
        return this.api.delete("/claptable/ingredients/" + id);
    };
    return ApiIngredients;
}());
exports.default = ApiIngredients;
//# sourceMappingURL=ingredients.js.map