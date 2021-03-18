"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Order = /** @class */ (function () {
    function Order(payment_order_id, business_id, customer_id, products_id, extras_id, options_id, suboptions_id, delivery_zone_id, offer_id, delivery_datetime, order_code, delivery_type, discount, service_fee, tax_type, tax, subtotal, tax_total, total, comment, tip, taxes, delivery_tip, delivery_price, pay_data, cash, location, products, customer, status) {
        this.payment_order_id = payment_order_id;
        this.business_id = business_id;
        this.customer_id = customer_id;
        this.products_id = products_id;
        this.extras_id = extras_id;
        this.options_id = options_id;
        this.suboptions_id = suboptions_id;
        this.delivery_zone_id = delivery_zone_id;
        this.offer_id = offer_id;
        this.delivery_datetime = delivery_datetime;
        this.order_code = order_code;
        this.delivery_type = delivery_type;
        this.discount = discount;
        this.service_fee = service_fee;
        this.tax_type = tax_type;
        this.tax = tax;
        this.subtotal = subtotal;
        this.tax_total = tax_total;
        this.total = total;
        this.comment = comment;
        this.tip = tip;
        this.taxes = taxes;
        this.delivery_tip = delivery_tip;
        this.delivery_price = delivery_price;
        this.pay_data = pay_data;
        this.cash = cash;
        this.location = location;
        this.products = products;
        this.customer = customer;
        this.status = status;
    }
    return Order;
}());
exports.default = Order;
//# sourceMappingURL=Order.js.map