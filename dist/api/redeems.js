"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ApiRedeems = /** @class */ (function () {
    function ApiRedeems(api) {
        this.api = api;
    }
    ApiRedeems.prototype.list = function (page, limit) {
        if (page === void 0) { page = 1; }
        if (limit === void 0) { limit = 15; }
        return this.api.get("/redeems?page=" + page + "&limit=" + limit);
    };
    ApiRedeems.prototype.view = function (id) {
        return this.api.get("/redeems/" + id);
    };
    /**
    * Filter results by any property, through a query.
    * Ex: { foo: 'bar' }
    */
    ApiRedeems.prototype.search = function (query, page, limit, populate, select) {
        if (page === void 0) { page = 1; }
        if (limit === void 0) { limit = 15; }
        if (populate === void 0) { populate = []; }
        if (select === void 0) { select = []; }
        return this.api.get("/redeems/search?query=" + encodeURIComponent(JSON.stringify(query)) + "&page=" + page + "&limit=" + limit + "&populate=" + populate.join(',') + "&select=" + select.join(','));
    };
    ApiRedeems.prototype.create = function (data) {
        return this.api.post("/redeems", data);
    };
    ApiRedeems.prototype.update = function (id, data) {
        return this.api.put("/redeems/" + id, data);
    };
    ApiRedeems.prototype.remove = function (id) {
        return this.api.delete("/redeems/" + id);
    };
    return ApiRedeems;
}());
exports.default = ApiRedeems;
//# sourceMappingURL=redeems.js.map