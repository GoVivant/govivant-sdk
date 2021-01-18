"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Sender = /** @class */ (function () {
    function Sender() {
    }
    return Sender;
}());
var Redeem = /** @class */ (function () {
    function Redeem(enabled, description, app_id, customer_id, product_id, products, subproduct_id, subproducts, user_update_id, redeem_date, pay_data, sender_instructions, tango_card, transaction_type, secret_text, rescued_at, update_at) {
        this.enabled = enabled;
        this.description = description;
        this.app_id = app_id;
        this.customer_id = customer_id;
        this.product_id = product_id;
        this.products = products;
        this.subproduct_id = subproduct_id;
        this.subproducts = subproducts;
        this.user_update_id = user_update_id;
        this.redeem_date = redeem_date;
        this.pay_data = pay_data;
        this.sender_instructions = sender_instructions;
        this.tango_card = tango_card;
        this.transaction_type = transaction_type;
        this.secret_text = secret_text;
        this.rescued_at = rescued_at;
        this.update_at = update_at;
    }
    return Redeem;
}());
exports.default = Redeem;
//# sourceMappingURL=Redeem.js.map