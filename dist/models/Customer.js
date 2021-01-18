"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Integration = /** @class */ (function () {
    function Integration() {
    }
    return Integration;
}());
var language_options;
(function (language_options) {
    language_options["en"] = "en";
    language_options["pt"] = "pt";
    language_options["es"] = "es";
    language_options["fr"] = "fr";
})(language_options || (language_options = {}));
var Customer = /** @class */ (function () {
    function Customer(name, enabled, email, phone, doc, points_brl, points_usd, points_eur, points_gbp, firebase_id, onesignal_player_id, country_id, integration, language, integration_id) {
        this.name = name;
        this.enabled = enabled;
        this.email = email;
        this.phone = phone;
        this.doc = doc;
        this.points_brl = points_brl;
        this.points_usd = points_usd;
        this.points_eur = points_eur;
        this.points_gbp = points_gbp;
        this.firebase_id = firebase_id;
        this.onesignal_player_id = onesignal_player_id;
        this.country_id = country_id;
        this.integration = integration;
        this.language = language;
        this.integration_id = integration_id;
    }
    return Customer;
}());
exports.default = Customer;
//# sourceMappingURL=Customer.js.map