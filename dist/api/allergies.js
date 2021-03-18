"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ApiAllergies = /** @class */ (function () {
    function ApiAllergies(api) {
        this.api = api;
    }
    ApiAllergies.prototype.list = function (page, limit) {
        if (page === void 0) { page = 1; }
        if (limit === void 0) { limit = 15; }
        return this.api.get("/claptable/allergies?page=" + page + "&limit=" + limit);
    };
    ApiAllergies.prototype.view = function (id) {
        return this.api.get("/claptable/allergies/" + id);
    };
    /**
    * Filter results by any property, through a query.
    * Ex: { foo: 'bar' }
    */
    ApiAllergies.prototype.search = function (query, page, limit, populate, select) {
        if (page === void 0) { page = 1; }
        if (limit === void 0) { limit = 15; }
        if (populate === void 0) { populate = []; }
        if (select === void 0) { select = []; }
        return this.api.get("/claptable/allergies/search?query=" + encodeURIComponent(JSON.stringify(query)) + "&page=" + page + "&limit=" + limit + "&populate=" + populate.join(',') + "&select=" + select.join(','));
    };
    ApiAllergies.prototype.create = function (data) {
        return this.api.post("/claptable/allergies", data);
    };
    ApiAllergies.prototype.update = function (id, data) {
        return this.api.put("/claptable/allergies/" + id, data);
    };
    ApiAllergies.prototype.remove = function (id) {
        return this.api.delete("/claptable/allergies/" + id);
    };
    return ApiAllergies;
}());
exports.default = ApiAllergies;
//# sourceMappingURL=allergies.js.map