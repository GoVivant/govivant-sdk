export default class PaymentOrder {
    store_id: string
    customer_id: string
    order_id: string
    payment_method_id: string
    pay_data: Object

    constructor(
        store_id: string,
        customer_id: string,
        order_id: string,
        payment_method_id: string,
        pay_data: Object
    ) {
        this.store_id = store_id
        this.customer_id = customer_id
        this.order_id = order_id
        this.payment_method_id = payment_method_id
        this.pay_data = pay_data
    }
}