"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ApiIntegrations = /** @class */ (function () {
    function ApiIntegrations(api) {
        this.api = api;
    }
    ApiIntegrations.prototype.list = function (page, limit) {
        if (page === void 0) { page = 1; }
        if (limit === void 0) { limit = 15; }
        return this.api.get("/integrations?page=" + page + "&limit=" + limit);
    };
    ApiIntegrations.prototype.view = function (id) {
        return this.api.get("/integrations/" + id);
    };
    /**
    * Filter results by any property, through a query.
    * Ex: { foo: 'bar' }
    */
    ApiIntegrations.prototype.search = function (query, page, limit, populate, select) {
        if (page === void 0) { page = 1; }
        if (limit === void 0) { limit = 15; }
        if (populate === void 0) { populate = []; }
        if (select === void 0) { select = []; }
        return this.api.get("/integrations/search?query=" + encodeURIComponent(JSON.stringify(query)) + "&page=" + page + "&limit=" + limit + "&populate=" + populate.join(',') + "&select=" + select.join(','));
    };
    ApiIntegrations.prototype.create = function (data) {
        return this.api.post("/integrations", data);
    };
    ApiIntegrations.prototype.update = function (id, data) {
        return this.api.put("/integrations/" + id, data);
    };
    ApiIntegrations.prototype.remove = function (id) {
        return this.api.delete("/integrations/" + id);
    };
    return ApiIntegrations;
}());
exports.default = ApiIntegrations;
//# sourceMappingURL=integrations.js.map