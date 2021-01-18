"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Log = /** @class */ (function () {
    function Log(route, host, method, type, headers, data, business_id, user_id, app_id) {
        this.route = route;
        this.host = host;
        this.method = method;
        this.type = type;
        this.headers = headers;
        this.data = data;
        this.business_id = business_id;
        this.user_id = user_id;
        this.app_id = app_id;
    }
    return Log;
}());
exports.default = Log;
//# sourceMappingURL=Log.js.map