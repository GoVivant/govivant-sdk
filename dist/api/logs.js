"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ApiLogs = /** @class */ (function () {
    function ApiLogs(api) {
        this.api = api;
    }
    ApiLogs.prototype.list = function (page, limit) {
        if (page === void 0) { page = 1; }
        if (limit === void 0) { limit = 15; }
        return this.api.get("/logs?page=" + page + "&limit=" + limit);
    };
    ApiLogs.prototype.view = function (id) {
        return this.api.get("/logs/" + id);
    };
    /**
    * Filter results by any property, through a query.
    * Ex: { foo: 'bar' }
    */
    ApiLogs.prototype.search = function (query, page, limit, populate, select) {
        if (page === void 0) { page = 1; }
        if (limit === void 0) { limit = 15; }
        if (populate === void 0) { populate = []; }
        if (select === void 0) { select = []; }
        return this.api.get("/logs/search?query=" + encodeURIComponent(JSON.stringify(query)) + "&page=" + page + "&limit=" + limit + "&populate=" + populate.join(',') + "&select=" + select.join(','));
    };
    ApiLogs.prototype.create = function (data) {
        return this.api.post("/logs", data);
    };
    ApiLogs.prototype.update = function (id, data) {
        return this.api.put("/logs/" + id, data);
    };
    ApiLogs.prototype.remove = function (id) {
        return this.api.delete("/logs/" + id);
    };
    return ApiLogs;
}());
exports.default = ApiLogs;
//# sourceMappingURL=logs.js.map