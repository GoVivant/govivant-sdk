"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ApiAddresses = /** @class */ (function () {
    function ApiAddresses(api) {
        this.api = api;
    }
    ApiAddresses.prototype.list = function (customer_id, page, limit) {
        if (page === void 0) { page = 1; }
        if (limit === void 0) { limit = 15; }
        return this.api.get("/addresses/" + customer_id + "?page=" + page + "&limit=" + limit);
    };
    ApiAddresses.prototype.create = function (data) {
        return this.api.post("/addresses", data);
    };
    ApiAddresses.prototype.update = function (id, data) {
        return this.api.put("/addresses/" + id, data);
    };
    ApiAddresses.prototype.remove = function (id) {
        return this.api.delete("/addresses/" + id);
    };
    return ApiAddresses;
}());
exports.default = ApiAddresses;
//# sourceMappingURL=addresses.js.map