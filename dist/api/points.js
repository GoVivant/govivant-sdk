"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ApiPoints = /** @class */ (function () {
    function ApiPoints(api) {
        this.api = api;
    }
    ApiPoints.prototype.list = function (page, limit) {
        if (page === void 0) { page = 1; }
        if (limit === void 0) { limit = 15; }
        return this.api.get("/points?page=" + page + "&limit=" + limit);
    };
    ApiPoints.prototype.view = function (id) {
        return this.api.get("/points/" + id);
    };
    /**
    * Filter results by any property, through a query.
    * Ex: { foo: 'bar' }
    */
    ApiPoints.prototype.search = function (query, page, limit, populate, select) {
        if (page === void 0) { page = 1; }
        if (limit === void 0) { limit = 15; }
        if (populate === void 0) { populate = []; }
        if (select === void 0) { select = []; }
        return this.api.get("/points/search?query=" + encodeURIComponent(JSON.stringify(query)) + "&page=" + page + "&limit=" + limit + "&populate=" + populate.join(',') + "&select=" + select.join(','));
    };
    ApiPoints.prototype.create = function (data) {
        return this.api.post("/points", data);
    };
    ApiPoints.prototype.update = function (id, data) {
        return this.api.put("/points/" + id, data);
    };
    ApiPoints.prototype.remove = function (id) {
        return this.api.delete("/points/" + id);
    };
    return ApiPoints;
}());
exports.default = ApiPoints;
//# sourceMappingURL=points.js.map