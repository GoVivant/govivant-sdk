export default class PaymentOrder {
    store_id: string;
    customer_id: string;
    order_id: string;
    payment_method_id: string;
    pay_data: Object;
    constructor(store_id: string, customer_id: string, order_id: string, payment_method_id: string, pay_data: Object);
}
