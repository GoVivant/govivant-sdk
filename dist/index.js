"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var api_1 = __importDefault(require("./api"));
var auth_1 = __importDefault(require("./api/auth"));
var users_1 = __importDefault(require("./api/users"));
var tags_1 = __importDefault(require("./api/tags"));
var businesses_1 = __importDefault(require("./api/businesses"));
var categories_1 = __importDefault(require("./api/categories"));
var cities_1 = __importDefault(require("./api/cities"));
var countries_1 = __importDefault(require("./api/countries"));
var customers_1 = __importDefault(require("./api/customers"));
var integrations_1 = __importDefault(require("./api/integrations"));
var invoices_1 = __importDefault(require("./api/invoices"));
var logs_1 = __importDefault(require("./api/logs"));
var plans_1 = __importDefault(require("./api/plans"));
var points_1 = __importDefault(require("./api/points"));
var products_1 = __importDefault(require("./api/products"));
var redeems_1 = __importDefault(require("./api/redeems"));
var rules_1 = __importDefault(require("./api/rules"));
var stores_1 = __importDefault(require("./api/stores"));
var subproducts_1 = __importDefault(require("./api/subproducts"));
var transactions_1 = __importDefault(require("./api/transactions"));
var receipts_1 = __importDefault(require("./api/receipts"));
var Govivant = /** @class */ (function () {
    function Govivant(api_key, dev) {
        var api_gvv = new api_1.default(api_key, dev);
        this.auth = new auth_1.default(api_gvv);
        this.users = new users_1.default(api_gvv);
        this.tags = new tags_1.default(api_gvv);
        this.businesses = new businesses_1.default(api_gvv);
        this.categories = new categories_1.default(api_gvv);
        this.cities = new cities_1.default(api_gvv);
        this.countries = new countries_1.default(api_gvv);
        this.customers = new customers_1.default(api_gvv);
        this.integrations = new integrations_1.default(api_gvv);
        this.invoices = new invoices_1.default(api_gvv);
        this.logs = new logs_1.default(api_gvv);
        this.plans = new plans_1.default(api_gvv);
        this.points = new points_1.default(api_gvv);
        this.products = new products_1.default(api_gvv);
        this.redeems = new redeems_1.default(api_gvv);
        this.rules = new rules_1.default(api_gvv);
        this.stores = new stores_1.default(api_gvv);
        this.subproducts = new subproducts_1.default(api_gvv);
        this.transactions = new transactions_1.default(api_gvv);
        this.receipts = new receipts_1.default(api_gvv);
    }
    return Govivant;
}());
exports.default = Govivant;
//# sourceMappingURL=index.js.map