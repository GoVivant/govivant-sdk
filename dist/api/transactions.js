"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ApiTransactions = /** @class */ (function () {
    function ApiTransactions(api) {
        this.api = api;
    }
    ApiTransactions.prototype.list = function (page, limit) {
        if (page === void 0) { page = 1; }
        if (limit === void 0) { limit = 15; }
        return this.api.get("/transactions?page=" + page + "&limit=" + limit);
    };
    ApiTransactions.prototype.view = function (id) {
        return this.api.get("/transactions/" + id);
    };
    /**
    * Filter results by any property, through a query.
    * Ex: { foo: 'bar' }
    */
    ApiTransactions.prototype.search = function (query, page, limit, populate, select) {
        if (page === void 0) { page = 1; }
        if (limit === void 0) { limit = 15; }
        if (populate === void 0) { populate = []; }
        if (select === void 0) { select = []; }
        return this.api.get("/transactions/search?query=" + encodeURIComponent(JSON.stringify(query)) + "&page=" + page + "&limit=" + limit + "&populate=" + populate.join(',') + "&select=" + select.join(','));
    };
    ApiTransactions.prototype.create = function (data) {
        return this.api.post("/transactions", data);
    };
    ApiTransactions.prototype.update = function (id, data) {
        return this.api.put("/transactions/" + id, data);
    };
    ApiTransactions.prototype.remove = function (id) {
        return this.api.delete("/transactions/" + id);
    };
    return ApiTransactions;
}());
exports.default = ApiTransactions;
//# sourceMappingURL=transactions.js.map