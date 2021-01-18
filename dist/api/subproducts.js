"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ApiSubproducts = /** @class */ (function () {
    function ApiSubproducts(api) {
        this.api = api;
    }
    ApiSubproducts.prototype.list = function (page, limit) {
        if (page === void 0) { page = 1; }
        if (limit === void 0) { limit = 15; }
        return this.api.get("/subproducts?page=" + page + "&limit=" + limit);
    };
    ApiSubproducts.prototype.view = function (id) {
        return this.api.get("/subproducts/" + id);
    };
    /**
    * Filter results by any property, through a query.
    * Ex: { foo: 'bar' }
    */
    ApiSubproducts.prototype.search = function (query, page, limit, populate, select) {
        if (page === void 0) { page = 1; }
        if (limit === void 0) { limit = 15; }
        if (populate === void 0) { populate = []; }
        if (select === void 0) { select = []; }
        return this.api.get("/subproducts/search?query=" + encodeURIComponent(JSON.stringify(query)) + "&page=" + page + "&limit=" + limit + "&populate=" + populate.join(',') + "&select=" + select.join(','));
    };
    ApiSubproducts.prototype.create = function (data) {
        return this.api.post("/subproducts", data);
    };
    ApiSubproducts.prototype.update = function (id, data) {
        return this.api.put("/subproducts/" + id, data);
    };
    ApiSubproducts.prototype.remove = function (id) {
        return this.api.delete("/subproducts/" + id);
    };
    return ApiSubproducts;
}());
exports.default = ApiSubproducts;
//# sourceMappingURL=subproducts.js.map