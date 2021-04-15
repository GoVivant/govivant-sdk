"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ApiWhitelabels = /** @class */ (function () {
    function ApiWhitelabels(api) {
        this.api = api;
    }
    ApiWhitelabels.prototype.list = function (page, limit) {
        if (page === void 0) { page = 1; }
        if (limit === void 0) { limit = 15; }
        return this.api.get("/whitelabels?page=" + page + "&limit=" + limit);
    };
    ApiWhitelabels.prototype.view = function (id) {
        return this.api.get("/whitelabels/" + id);
    };
    ApiWhitelabels.prototype.by_bundle_id = function (bundle_id) {
        return this.api.get("/whitelabels/by_bundle_id/" + bundle_id);
    };
    /**
    * Filter results by any property, through a query.
    * Ex: { foo: 'bar' }
    */
    ApiWhitelabels.prototype.search = function (query, page, limit, populate, select) {
        if (page === void 0) { page = 1; }
        if (limit === void 0) { limit = 15; }
        if (populate === void 0) { populate = []; }
        if (select === void 0) { select = []; }
        return this.api.get("/whitelabels/search?query=" + encodeURIComponent(JSON.stringify(query)) + "&page=" + page + "&limit=" + limit + "&populate=" + populate.join(',') + "&select=" + select.join(','));
    };
    ApiWhitelabels.prototype.create = function (data) {
        return this.api.post("/whitelabels", data);
    };
    ApiWhitelabels.prototype.update = function (id, data) {
        return this.api.put("/whitelabels/" + id, data);
    };
    ApiWhitelabels.prototype.remove = function (id) {
        return this.api.delete("/whitelabels/" + id);
    };
    return ApiWhitelabels;
}());
exports.default = ApiWhitelabels;
//# sourceMappingURL=whitelabels.js.map