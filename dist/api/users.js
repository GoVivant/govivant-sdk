"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ApiUsers = /** @class */ (function () {
    function ApiUsers(api) {
        this.api = api;
    }
    ApiUsers.prototype.list = function (page, limit) {
        if (page === void 0) { page = 1; }
        if (limit === void 0) { limit = 15; }
        return this.api.get("/users?page=" + page + "&limit=" + limit);
    };
    ApiUsers.prototype.view = function (id) {
        return this.api.get("/users/" + id);
    };
    /**
    * Filter results by any property, through a query.
    * Ex: { foo: 'bar' }
    */
    ApiUsers.prototype.search = function (query, page, limit, populate, select) {
        if (page === void 0) { page = 1; }
        if (limit === void 0) { limit = 15; }
        if (populate === void 0) { populate = []; }
        if (select === void 0) { select = []; }
        return this.api.get("/users/search?query=" + encodeURIComponent(JSON.stringify(query)) + "&page=" + page + "&limit=" + limit + "&populate=" + populate.join(',') + "&select=" + select.join(','));
    };
    ApiUsers.prototype.create = function (data) {
        return this.api.post("/users", data);
    };
    ApiUsers.prototype.update = function (id, data) {
        return this.api.put("/users/" + id, data);
    };
    ApiUsers.prototype.remove = function (id) {
        return this.api.delete("/users/" + id);
    };
    return ApiUsers;
}());
exports.default = ApiUsers;
//# sourceMappingURL=users.js.map