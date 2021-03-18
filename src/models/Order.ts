export default class Order {
    payment_order_id: Array<string>
    business_id: string
    customer_id: string
    products_id: Array<string>
    extras_id: Array<string>
    options_id: Array<string>
    suboptions_id: Array<string>
    delivery_zone_id: string
    offer_id: string
    delivery_datetime: Date
    order_code: number
    delivery_type: number
    discount: number
    service_fee: number
    tax_type: number
    tax: number
    subtotal: number
    tax_total: number
    total: number
    comment: string
    tip: number
    taxes: number
    delivery_tip: string
    delivery_price: number
    pay_data: Object
    cash: string
    location: Object
    products: Object
    customer: Object
    status: number

    constructor(
        payment_order_id: Array<string>,
        business_id: string,
        customer_id: string,
        products_id: Array<string>,
        extras_id: Array<string>,
        options_id: Array<string>,
        suboptions_id: Array<string>,
        delivery_zone_id: string,
        offer_id: string,
        delivery_datetime: Date,
        order_code: number,
        delivery_type: number,
        discount: number,
        service_fee: number,
        tax_type: number,
        tax: number,
        subtotal: number,
        tax_total: number,
        total: number,
        comment: string,
        tip: number,
        taxes: number,
        delivery_tip: string,
        delivery_price: number,
        pay_data: Object,
        cash: string,
        location: Object,
        products: Object,
        customer: Object,
        status: number
    ) {
        this.payment_order_id = payment_order_id
        this.business_id = business_id
        this.customer_id = customer_id
        this.products_id = products_id
        this.extras_id = extras_id
        this.options_id = options_id
        this.suboptions_id = suboptions_id
        this.delivery_zone_id = delivery_zone_id
        this.offer_id = offer_id
        this.delivery_datetime = delivery_datetime
        this.order_code = order_code
        this.delivery_type = delivery_type
        this.discount = discount
        this.service_fee = service_fee
        this.tax_type = tax_type
        this.tax = tax
        this.subtotal = subtotal
        this.tax_total = tax_total
        this.total = total
        this.comment = comment
        this.tip = tip
        this.taxes = taxes
        this.delivery_tip = delivery_tip
        this.delivery_price = delivery_price
        this.pay_data = pay_data
        this.cash = cash
        this.location = location
        this.products = products
        this.customer = customer
        this.status = status
    }
}