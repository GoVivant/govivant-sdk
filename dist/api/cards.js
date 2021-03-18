"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ApiCards = /** @class */ (function () {
    function ApiCards(api) {
        this.api = api;
    }
    ApiCards.prototype.list = function (page, limit) {
        if (page === void 0) { page = 1; }
        if (limit === void 0) { limit = 15; }
        return this.api.get("/claptable/cards?page=" + page + "&limit=" + limit);
    };
    ApiCards.prototype.view = function (id) {
        return this.api.get("/claptable/cards/" + id);
    };
    /**
    * Filter results by any property, through a query.
    * Ex: { foo: 'bar' }
    */
    ApiCards.prototype.search = function (query, page, limit, populate, select) {
        if (page === void 0) { page = 1; }
        if (limit === void 0) { limit = 15; }
        if (populate === void 0) { populate = []; }
        if (select === void 0) { select = []; }
        return this.api.get("/claptable/cards/search?query=" + encodeURIComponent(JSON.stringify(query)) + "&page=" + page + "&limit=" + limit + "&populate=" + populate.join(',') + "&select=" + select.join(','));
    };
    ApiCards.prototype.create = function (data) {
        return this.api.post("/claptable/cards", data);
    };
    ApiCards.prototype.update = function (id, data) {
        return this.api.put("/claptable/cards/" + id, data);
    };
    ApiCards.prototype.remove = function (id) {
        return this.api.delete("/claptable/cards/" + id);
    };
    return ApiCards;
}());
exports.default = ApiCards;
//# sourceMappingURL=cards.js.map