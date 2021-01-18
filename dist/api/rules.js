"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ApiRules = /** @class */ (function () {
    function ApiRules(api) {
        this.api = api;
    }
    ApiRules.prototype.list = function (page, limit) {
        if (page === void 0) { page = 1; }
        if (limit === void 0) { limit = 15; }
        return this.api.get("/rules?page=" + page + "&limit=" + limit);
    };
    ApiRules.prototype.view = function (id) {
        return this.api.get("/rules/" + id);
    };
    /**
    * Filter results by any property, through a query.
    * Ex: { foo: 'bar' }
    */
    ApiRules.prototype.search = function (query, page, limit, populate, select) {
        if (page === void 0) { page = 1; }
        if (limit === void 0) { limit = 15; }
        if (populate === void 0) { populate = []; }
        if (select === void 0) { select = []; }
        return this.api.get("/rules/search?query=" + encodeURIComponent(JSON.stringify(query)) + "&page=" + page + "&limit=" + limit + "&populate=" + populate.join(',') + "&select=" + select.join(','));
    };
    ApiRules.prototype.create = function (data) {
        return this.api.post("/rules", data);
    };
    ApiRules.prototype.update = function (id, data) {
        return this.api.put("/rules/" + id, data);
    };
    ApiRules.prototype.remove = function (id) {
        return this.api.delete("/rules/" + id);
    };
    return ApiRules;
}());
exports.default = ApiRules;
//# sourceMappingURL=rules.js.map