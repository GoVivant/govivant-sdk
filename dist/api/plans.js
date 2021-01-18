"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ApiPlans = /** @class */ (function () {
    function ApiPlans(api) {
        this.api = api;
    }
    ApiPlans.prototype.list = function (page, limit) {
        if (page === void 0) { page = 1; }
        if (limit === void 0) { limit = 15; }
        return this.api.get("/plans?page=" + page + "&limit=" + limit);
    };
    ApiPlans.prototype.view = function (id) {
        return this.api.get("/plans/" + id);
    };
    /**
    * Filter results by any property, through a query.
    * Ex: { foo: 'bar' }
    */
    ApiPlans.prototype.search = function (query, page, limit, populate, select) {
        if (page === void 0) { page = 1; }
        if (limit === void 0) { limit = 15; }
        if (populate === void 0) { populate = []; }
        if (select === void 0) { select = []; }
        return this.api.get("/plans/search?query=" + encodeURIComponent(JSON.stringify(query)) + "&page=" + page + "&limit=" + limit + "&populate=" + populate.join(',') + "&select=" + select.join(','));
    };
    ApiPlans.prototype.create = function (data) {
        return this.api.post("/plans", data);
    };
    ApiPlans.prototype.update = function (id, data) {
        return this.api.put("/plans/" + id, data);
    };
    ApiPlans.prototype.remove = function (id) {
        return this.api.delete("/plans/" + id);
    };
    return ApiPlans;
}());
exports.default = ApiPlans;
//# sourceMappingURL=plans.js.map