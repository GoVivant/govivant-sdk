"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ApiCountries = /** @class */ (function () {
    function ApiCountries(api) {
        this.api = api;
    }
    ApiCountries.prototype.list = function (page, limit) {
        if (page === void 0) { page = 1; }
        if (limit === void 0) { limit = 15; }
        return this.api.get("/countries?page=" + page + "&limit=" + limit);
    };
    ApiCountries.prototype.view = function (id) {
        return this.api.get("/countries/" + id);
    };
    /**
    * Filter results by any property, through a query.
    * Ex: { foo: 'bar' }
    */
    ApiCountries.prototype.search = function (query, page, limit, populate, select) {
        if (page === void 0) { page = 1; }
        if (limit === void 0) { limit = 15; }
        if (populate === void 0) { populate = []; }
        if (select === void 0) { select = []; }
        return this.api.get("/countries/search?query=" + encodeURIComponent(JSON.stringify(query)) + "&page=" + page + "&limit=" + limit + "&populate=" + populate.join(',') + "&select=" + select.join(','));
    };
    ApiCountries.prototype.create = function (data) {
        return this.api.post("/countries", data);
    };
    ApiCountries.prototype.update = function (id, data) {
        return this.api.put("/countries/" + id, data);
    };
    ApiCountries.prototype.remove = function (id) {
        return this.api.delete("/countries/" + id);
    };
    return ApiCountries;
}());
exports.default = ApiCountries;
//# sourceMappingURL=countries.js.map