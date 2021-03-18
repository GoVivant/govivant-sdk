"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PaymentOrder = /** @class */ (function () {
    function PaymentOrder(store_id, customer_id, order_id, payment_method_id, pay_data) {
        this.store_id = store_id;
        this.customer_id = customer_id;
        this.order_id = order_id;
        this.payment_method_id = payment_method_id;
        this.pay_data = pay_data;
    }
    return PaymentOrder;
}());
exports.default = PaymentOrder;
//# sourceMappingURL=PaymentOrder.js.map