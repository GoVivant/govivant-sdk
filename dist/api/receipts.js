"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ApiReceipts = /** @class */ (function () {
    function ApiReceipts(api) {
        this.api = api;
    }
    ApiReceipts.prototype.create_transaction = function (data) {
        return this.api.post("/receipts/create_transaction", data);
    };
    ApiReceipts.prototype.upload = function (data) {
        return this.api.post("/receipts/upload", data, { headers: { 'Content-Type': 'multipart/form-data' } });
    };
    return ApiReceipts;
}());
exports.default = ApiReceipts;
//# sourceMappingURL=receipts.js.map