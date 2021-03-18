"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ApiExtras = /** @class */ (function () {
    function ApiExtras(api) {
        this.api = api;
    }
    ApiExtras.prototype.list = function (business, page, limit) {
        if (page === void 0) { page = 1; }
        if (limit === void 0) { limit = 15; }
        return this.api.get("/claptable/extras/" + business + "?page=" + page + "&limit=" + limit);
    };
    ApiExtras.prototype.view = function (id) {
        return this.api.get("/claptable/extras/" + id);
    };
    /**
    * Filter results by any property, through a query.
    * Ex: { foo: 'bar' }
    */
    ApiExtras.prototype.search = function (query, page, limit, populate, select) {
        if (page === void 0) { page = 1; }
        if (limit === void 0) { limit = 15; }
        if (populate === void 0) { populate = []; }
        if (select === void 0) { select = []; }
        return this.api.get("/claptable/extras/search?query=" + encodeURIComponent(JSON.stringify(query)) + "&page=" + page + "&limit=" + limit + "&populate=" + populate.join(',') + "&select=" + select.join(','));
    };
    ApiExtras.prototype.add_option = function (id, data) {
        return this.api.post("/claptable/extras/add_option/" + id, data);
    };
    ApiExtras.prototype.create = function (data) {
        return this.api.post("/claptable/extras", data);
    };
    ApiExtras.prototype.update = function (id, data) {
        return this.api.put("/claptable/extras/" + id, data);
    };
    ApiExtras.prototype.remove = function (id) {
        return this.api.delete("/claptable/extras/" + id);
    };
    return ApiExtras;
}());
exports.default = ApiExtras;
//# sourceMappingURL=extras.js.map