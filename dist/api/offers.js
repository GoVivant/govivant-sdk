"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ApiOffers = /** @class */ (function () {
    function ApiOffers(api) {
        this.api = api;
    }
    ApiOffers.prototype.list = function (page, limit) {
        if (page === void 0) { page = 1; }
        if (limit === void 0) { limit = 15; }
        return this.api.get("/claptable/offers?page=" + page + "&limit=" + limit);
    };
    ApiOffers.prototype.view = function (id) {
        return this.api.get("/claptable/offers/" + id);
    };
    /**
    * Filter results by any property, through a query.
    * Ex: { foo: 'bar' }
    */
    ApiOffers.prototype.search = function (query, page, limit, populate, select) {
        if (page === void 0) { page = 1; }
        if (limit === void 0) { limit = 15; }
        if (populate === void 0) { populate = []; }
        if (select === void 0) { select = []; }
        return this.api.get("/claptable/offers/search?query=" + encodeURIComponent(JSON.stringify(query)) + "&page=" + page + "&limit=" + limit + "&populate=" + populate.join(',') + "&select=" + select.join(','));
    };
    ApiOffers.prototype.create = function (data) {
        return this.api.post("/claptable/offers", data);
    };
    ApiOffers.prototype.update = function (id, data) {
        return this.api.put("/claptable/offers/" + id, data);
    };
    ApiOffers.prototype.remove = function (id) {
        return this.api.delete("/claptable/offers/" + id);
    };
    return ApiOffers;
}());
exports.default = ApiOffers;
//# sourceMappingURL=offers.js.map