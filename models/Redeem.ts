class Sender {
    emailSubject: string
    message: string
    recipent: {
        email: string
        first_name: string
        last_name: string
    }
}

export default class Redeem {
    enabled: boolean
    description: boolean
    app_id: number
    customer_id: number
    product_id: string
    products: Object
    subproduct_id: string
    subproducts: Object
    user_update_id: string
    redeem_date: Date
    pay_data: Object
    sender_instructions: Sender
    tango_card: Object
    transaction_type: string
    secret_text: Object
    rescued_at: Date
    update_at: Date

    constructor(
        enabled: boolean,
        description: boolean,
        app_id: number,
        customer_id: number,
        product_id: string,
        products: Object,
        subproduct_id: string,
        subproducts: Object,
        user_update_id: string,
        redeem_date: Date,
        pay_data: Object,
        sender_instructions: Sender,
        tango_card: Object,
        transaction_type: string,
        secret_text: Object,
        rescued_at: Date,
        update_at: Date
    ) {
        this.enabled = enabled
        this.description = description
        this.app_id = app_id
        this.customer_id = customer_id
        this.product_id = product_id
        this.products = products
        this.subproduct_id = subproduct_id
        this.subproducts = subproducts
        this.user_update_id = user_update_id
        this.redeem_date = redeem_date
        this.pay_data = pay_data
        this.sender_instructions = sender_instructions
        this.tango_card = tango_card
        this.transaction_type = transaction_type
        this.secret_text = secret_text
        this.rescued_at = rescued_at
        this.update_at = update_at
    }
}