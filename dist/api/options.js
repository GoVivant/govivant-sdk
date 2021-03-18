"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ApiOptions = /** @class */ (function () {
    function ApiOptions(api) {
        this.api = api;
    }
    ApiOptions.prototype.list = function (business, page, limit) {
        if (page === void 0) { page = 1; }
        if (limit === void 0) { limit = 15; }
        return this.api.get("/claptable/options/" + business + "?page=" + page + "&limit=" + limit);
    };
    ApiOptions.prototype.view = function (id) {
        return this.api.get("/claptable/options/" + id);
    };
    /**
    * Filter results by any property, through a query.
    * Ex: { foo: 'bar' }
    */
    ApiOptions.prototype.search = function (query, page, limit, populate, select) {
        if (page === void 0) { page = 1; }
        if (limit === void 0) { limit = 15; }
        if (populate === void 0) { populate = []; }
        if (select === void 0) { select = []; }
        return this.api.get("/claptable/options/search?query=" + encodeURIComponent(JSON.stringify(query)) + "&page=" + page + "&limit=" + limit + "&populate=" + populate.join(',') + "&select=" + select.join(','));
    };
    ApiOptions.prototype.add_suboption = function (id, data) {
        return this.api.post("/claptable/options/add_suboption/" + id, data);
    };
    ApiOptions.prototype.create = function (data) {
        return this.api.post("/claptable/options", data);
    };
    ApiOptions.prototype.update = function (id, data) {
        return this.api.put("/claptable/options/" + id, data);
    };
    ApiOptions.prototype.remove = function (id) {
        return this.api.delete("/claptable/options/" + id);
    };
    return ApiOptions;
}());
exports.default = ApiOptions;
//# sourceMappingURL=options.js.map