"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ApiStores = /** @class */ (function () {
    function ApiStores(api) {
        this.api = api;
    }
    ApiStores.prototype.list = function (page, limit) {
        if (page === void 0) { page = 1; }
        if (limit === void 0) { limit = 15; }
        return this.api.get("/stores?page=" + page + "&limit=" + limit);
    };
    ApiStores.prototype.view = function (id) {
        return this.api.get("/stores/" + id);
    };
    /**
    * Filter results by any property, through a query.
    * Ex: { foo: 'bar' }
    */
    ApiStores.prototype.search = function (query, page, limit, populate, select) {
        if (page === void 0) { page = 1; }
        if (limit === void 0) { limit = 15; }
        if (populate === void 0) { populate = []; }
        if (select === void 0) { select = []; }
        return this.api.get("/stores/search?query=" + encodeURIComponent(JSON.stringify(query)) + "&page=" + page + "&limit=" + limit + "&populate=" + populate.join(',') + "&select=" + select.join(','));
    };
    ApiStores.prototype.create = function (data) {
        return this.api.post("/stores", data);
    };
    ApiStores.prototype.update = function (id, data) {
        return this.api.put("/stores/" + id, data);
    };
    ApiStores.prototype.remove = function (id) {
        return this.api.delete("/stores/" + id);
    };
    return ApiStores;
}());
exports.default = ApiStores;
//# sourceMappingURL=stores.js.map