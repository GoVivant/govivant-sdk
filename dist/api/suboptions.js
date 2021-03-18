"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ApiSuboptions = /** @class */ (function () {
    function ApiSuboptions(api) {
        this.api = api;
    }
    ApiSuboptions.prototype.list = function (business, page, limit) {
        if (page === void 0) { page = 1; }
        if (limit === void 0) { limit = 15; }
        return this.api.get("/claptable/suboptions/" + business + "?page=" + page + "&limit=" + limit);
    };
    ApiSuboptions.prototype.view = function (id) {
        return this.api.get("/claptable/suboptions/" + id);
    };
    /**
    * Filter results by any property, through a query.
    * Ex: { foo: 'bar' }
    */
    ApiSuboptions.prototype.search = function (query, page, limit, populate, select) {
        if (page === void 0) { page = 1; }
        if (limit === void 0) { limit = 15; }
        if (populate === void 0) { populate = []; }
        if (select === void 0) { select = []; }
        return this.api.get("/claptable/suboptions/search?query=" + encodeURIComponent(JSON.stringify(query)) + "&page=" + page + "&limit=" + limit + "&populate=" + populate.join(',') + "&select=" + select.join(','));
    };
    ApiSuboptions.prototype.create = function (data) {
        return this.api.post("/claptable/suboptions", data);
    };
    ApiSuboptions.prototype.update = function (id, data) {
        return this.api.put("/claptable/suboptions/" + id, data);
    };
    ApiSuboptions.prototype.remove = function (id) {
        return this.api.delete("/claptable/suboptions/" + id);
    };
    return ApiSuboptions;
}());
exports.default = ApiSuboptions;
//# sourceMappingURL=suboptions.js.map