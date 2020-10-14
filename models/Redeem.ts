export default class Redeem {
    active: boolean
    customer_id: number
    product_id: string
    redeem_date: Date
    transaction_type: string

    constructor(
        active: boolean,
        customer_id: number,
        product_id: string,
        redeem_date: Date,
        transaction_type: string
    ) {
        this.active = active
        this.customer_id = customer_id
        this.product_id = product_id
        this.redeem_date = redeem_date
        this.transaction_type = transaction_type
    }
}