"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var type_options;
(function (type_options) {
    type_options["rpas"] = "rpas";
    type_options["stores_only"] = "stores_only";
    type_options["crypto"] = "crypto";
})(type_options || (type_options = {}));
var transaction_types_options;
(function (transaction_types_options) {
    transaction_types_options["manual"] = "manual";
    transaction_types_options["api_connected"] = "api_connected";
    transaction_types_options["plaid"] = "plaid";
    transaction_types_options["saltedge"] = "saltedge";
})(transaction_types_options || (transaction_types_options = {}));
var App = /** @class */ (function () {
    function App(name, enabled, transaction_types, type, logo_white, logo_dark, primary_color, secondary_color, disabled, token, disabled_at) {
        this.name = name;
        this.enabled = enabled;
        this.transaction_types = transaction_types;
        this.type = type;
        this.logo_white = logo_white;
        this.logo_dark = logo_dark;
        this.primary_color = primary_color;
        this.secondary_color = secondary_color;
        this.disabled = disabled;
        this.token = token;
        this.disabled_at = disabled_at;
    }
    return App;
}());
exports.default = App;
//# sourceMappingURL=App.js.map