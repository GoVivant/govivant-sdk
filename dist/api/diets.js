"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ApiDiets = /** @class */ (function () {
    function ApiDiets(api) {
        this.api = api;
    }
    ApiDiets.prototype.list = function (page, limit) {
        if (page === void 0) { page = 1; }
        if (limit === void 0) { limit = 15; }
        return this.api.get("/claptable/diets?page=" + page + "&limit=" + limit);
    };
    ApiDiets.prototype.view = function (id) {
        return this.api.get("/claptable/diets/" + id);
    };
    /**
    * Filter results by any property, through a query.
    * Ex: { foo: 'bar' }
    */
    ApiDiets.prototype.search = function (query, page, limit, populate, select) {
        if (page === void 0) { page = 1; }
        if (limit === void 0) { limit = 15; }
        if (populate === void 0) { populate = []; }
        if (select === void 0) { select = []; }
        return this.api.get("/claptable/diets/search?query=" + encodeURIComponent(JSON.stringify(query)) + "&page=" + page + "&limit=" + limit + "&populate=" + populate.join(',') + "&select=" + select.join(','));
    };
    ApiDiets.prototype.create = function (data) {
        return this.api.post("/claptable/diets", data);
    };
    ApiDiets.prototype.update = function (id, data) {
        return this.api.put("/claptable/diets/" + id, data);
    };
    ApiDiets.prototype.remove = function (id) {
        return this.api.delete("/claptable/diets/" + id);
    };
    return ApiDiets;
}());
exports.default = ApiDiets;
//# sourceMappingURL=diets.js.map