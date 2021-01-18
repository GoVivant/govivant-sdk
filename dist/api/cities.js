"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ApiCities = /** @class */ (function () {
    function ApiCities(api) {
        this.api = api;
    }
    ApiCities.prototype.list = function (page, limit) {
        if (page === void 0) { page = 1; }
        if (limit === void 0) { limit = 15; }
        return this.api.get("/cities?page=" + page + "&limit=" + limit);
    };
    ApiCities.prototype.view = function (id) {
        return this.api.get("/cities/" + id);
    };
    /**
    * Filter results by any property, through a query.
    * Ex: { foo: 'bar' }
    */
    ApiCities.prototype.search = function (query, page, limit, populate, select) {
        if (page === void 0) { page = 1; }
        if (limit === void 0) { limit = 15; }
        if (populate === void 0) { populate = []; }
        if (select === void 0) { select = []; }
        return this.api.get("/cities/search?query=" + encodeURIComponent(JSON.stringify(query)) + "&page=" + page + "&limit=" + limit + "&populate=" + populate.join(',') + "&select=" + select.join(','));
    };
    ApiCities.prototype.create = function (data) {
        return this.api.post("/cities", data);
    };
    ApiCities.prototype.update = function (id, data) {
        return this.api.put("/cities/" + id, data);
    };
    ApiCities.prototype.remove = function (id) {
        return this.api.delete("/cities/" + id);
    };
    return ApiCities;
}());
exports.default = ApiCities;
//# sourceMappingURL=cities.js.map