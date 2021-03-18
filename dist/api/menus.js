"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ApiMenus = /** @class */ (function () {
    function ApiMenus(api) {
        this.api = api;
    }
    ApiMenus.prototype.list = function (page, limit) {
        if (page === void 0) { page = 1; }
        if (limit === void 0) { limit = 15; }
        return this.api.get("/claptable/menus?page=" + page + "&limit=" + limit);
    };
    ApiMenus.prototype.view = function (id) {
        return this.api.get("/claptable/menus/" + id);
    };
    /**
    * Filter results by any property, through a query.
    * Ex: { foo: 'bar' }
    */
    ApiMenus.prototype.search = function (query, page, limit, populate, select) {
        if (page === void 0) { page = 1; }
        if (limit === void 0) { limit = 15; }
        if (populate === void 0) { populate = []; }
        if (select === void 0) { select = []; }
        return this.api.get("/claptable/menus/search?query=" + encodeURIComponent(JSON.stringify(query)) + "&page=" + page + "&limit=" + limit + "&populate=" + populate.join(',') + "&select=" + select.join(','));
    };
    ApiMenus.prototype.create = function (data) {
        return this.api.post("/claptable/menus", data);
    };
    ApiMenus.prototype.update = function (id, data) {
        return this.api.put("/claptable/menus/" + id, data);
    };
    ApiMenus.prototype.remove = function (id) {
        return this.api.delete("/claptable/menus/" + id);
    };
    return ApiMenus;
}());
exports.default = ApiMenus;
//# sourceMappingURL=menus.js.map