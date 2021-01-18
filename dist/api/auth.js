"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ApiAuth = /** @class */ (function () {
    function ApiAuth(api) {
        this.api = api;
    }
    ApiAuth.prototype.login = function (email, password) {
        return this.api.post("/authentication/login", { email: email, password: password });
    };
    ApiAuth.prototype.register = function (data) {
        return this.api.post("/authentication/register", data);
    };
    ApiAuth.prototype.generate_app_token = function (app_id) {
        return this.api.post("/authentication/generate-app-token", { app_id: app_id });
    };
    return ApiAuth;
}());
exports.default = ApiAuth;
//# sourceMappingURL=auth.js.map