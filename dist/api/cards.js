"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ApiCards = /** @class */ (function () {
    function ApiCards(api) {
        this.api = api;
    }
    ApiCards.prototype.list = function (customer_id, page, limit) {
        if (page === void 0) { page = 1; }
        if (limit === void 0) { limit = 15; }
        return this.api.get("/claptable/tokens/cards/" + customer_id + "?page=" + page + "&limit=" + limit);
    };
    ApiCards.prototype.create = function (customer_id, data) {
        return this.api.post("/claptable/tokens/cards/" + customer_id, data);
    };
    ApiCards.prototype.update = function (id, data) {
        return this.api.put("/claptable/tokens/cards/" + id, data);
    };
    ApiCards.prototype.remove = function (id) {
        return this.api.delete("/claptable/tokens/cards/" + id);
    };
    return ApiCards;
}());
exports.default = ApiCards;
//# sourceMappingURL=cards.js.map