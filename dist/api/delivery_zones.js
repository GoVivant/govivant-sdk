"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ApiDeliveryZones = /** @class */ (function () {
    function ApiDeliveryZones(api) {
        this.api = api;
    }
    ApiDeliveryZones.prototype.list = function (business_id, page, limit) {
        if (page === void 0) { page = 1; }
        if (limit === void 0) { limit = 15; }
        return this.api.get("/claptable/delivery_zones/" + business_id + "?page=" + page + "&limit=" + limit);
    };
    ApiDeliveryZones.prototype.view = function (id) {
        return this.api.get("/claptable/delivery_zones/" + id);
    };
    ApiDeliveryZones.prototype.create = function (data) {
        return this.api.post("/claptable/delivery_zones", data);
    };
    ApiDeliveryZones.prototype.update = function (id, data) {
        return this.api.put("/claptable/delivery_zones/" + id, data);
    };
    ApiDeliveryZones.prototype.remove = function (id) {
        return this.api.delete("/claptable/delivery_zones/" + id);
    };
    return ApiDeliveryZones;
}());
exports.default = ApiDeliveryZones;
//# sourceMappingURL=delivery_zones.js.map