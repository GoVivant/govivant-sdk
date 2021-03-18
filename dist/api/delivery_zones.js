"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ApiDeliveryZones = /** @class */ (function () {
    function ApiDeliveryZones(api) {
        this.api = api;
    }
    ApiDeliveryZones.prototype.list = function (page, limit) {
        if (page === void 0) { page = 1; }
        if (limit === void 0) { limit = 15; }
        return this.api.get("/claptable/delivery_zones?page=" + page + "&limit=" + limit);
    };
    ApiDeliveryZones.prototype.view = function (id) {
        return this.api.get("/claptable/delivery_zones/" + id);
    };
    /**
    * Filter results by any property, through a query.
    * Ex: { foo: 'bar' }
    */
    ApiDeliveryZones.prototype.search = function (query, page, limit, populate, select) {
        if (page === void 0) { page = 1; }
        if (limit === void 0) { limit = 15; }
        if (populate === void 0) { populate = []; }
        if (select === void 0) { select = []; }
        return this.api.get("/claptable/delivery_zones/search?query=" + encodeURIComponent(JSON.stringify(query)) + "&page=" + page + "&limit=" + limit + "&populate=" + populate.join(',') + "&select=" + select.join(','));
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