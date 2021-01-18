"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ApiBusinesses = /** @class */ (function () {
    function ApiBusinesses(api) {
        this.api = api;
    }
    ApiBusinesses.prototype.list = function (page, limit) {
        if (page === void 0) { page = 1; }
        if (limit === void 0) { limit = 15; }
        return this.api.get("/businesses?page=" + page + "&limit=" + limit);
    };
    ApiBusinesses.prototype.view = function (id) {
        return this.api.get("/businesses/" + id);
    };
    /**
    * Filter results by any property, through a query.
    * Ex: { foo: 'bar' }
    */
    ApiBusinesses.prototype.search = function (query, page, limit, populate, select) {
        if (page === void 0) { page = 1; }
        if (limit === void 0) { limit = 15; }
        if (populate === void 0) { populate = []; }
        if (select === void 0) { select = []; }
        return this.api.get("/businesses/search?query=" + encodeURIComponent(JSON.stringify(query)) + "&page=" + page + "&limit=" + limit + "&populate=" + populate.join(',') + "&select=" + select.join(','));
    };
    ApiBusinesses.prototype.create = function (data) {
        return this.api.post("/businesses", data);
    };
    ApiBusinesses.prototype.update = function (id, data) {
        return this.api.put("/businesses/" + id, data);
    };
    ApiBusinesses.prototype.remove = function (id) {
        return this.api.delete("/businesses/" + id);
    };
    return ApiBusinesses;
}());
exports.default = ApiBusinesses;
//# sourceMappingURL=businesses.js.map