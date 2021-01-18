"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ApiTags = /** @class */ (function () {
    function ApiTags(api) {
        this.api = api;
    }
    ApiTags.prototype.list = function (page, limit) {
        if (page === void 0) { page = 1; }
        if (limit === void 0) { limit = 15; }
        return this.api.get("/tags?page=" + page + "&limit=" + limit);
    };
    ApiTags.prototype.view = function (id) {
        return this.api.get("/tags/" + id);
    };
    /**
    * Filter results by any property, through a query.
    * Ex: { foo: 'bar' }
    */
    ApiTags.prototype.search = function (query, page, limit, populate, select) {
        if (page === void 0) { page = 1; }
        if (limit === void 0) { limit = 15; }
        if (populate === void 0) { populate = []; }
        if (select === void 0) { select = []; }
        return this.api.get("/tags/search?query=" + encodeURIComponent(JSON.stringify(query)) + "&page=" + page + "&limit=" + limit + "&populate=" + populate.join(',') + "&select=" + select.join(','));
    };
    ApiTags.prototype.create = function (data) {
        return this.api.post("/tags", data);
    };
    ApiTags.prototype.update = function (id, data) {
        return this.api.put("/tags/" + id, data);
    };
    ApiTags.prototype.remove = function (id) {
        return this.api.delete("/tags/" + id);
    };
    return ApiTags;
}());
exports.default = ApiTags;
//# sourceMappingURL=tags.js.map