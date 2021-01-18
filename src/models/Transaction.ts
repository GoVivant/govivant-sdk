class Status {
    status: string
    reason: string
}

class Source {
    transaction_type: string
    status: string
    connection: string
    duplicated: string
    mode: string
    description: string
    category: string
    merchant: {
        type: Object,
        name: string
        porcent_merchant_name: number
        address: {
            type: Object,
            country_code: string
            porcent_merchant_country_code: number
            city: string
            porcent_merchant_city: number
            state: string
            porcent_merchant_state: number
            street: string
            porcent_merchant_street: number
            postal_code: number
            porcent_merchant_postal_code: number
            coordinates: {
                type: Object
                latitude: number
                longitude: number
            }
        }
    }
    file: string
    made_on: string
    currency_code: string
    geolocation: string
    text: string
    merchant_name: string
    approved_by: {
        type: Object
        date: Date
        user_id: string
    }
    plaid_fetch: Object
    amount: number
    porcent_amount: number
    tax_amount: number
    porcent_tax_amount: number
    merchant_types: string
    porcent_merchant_types: number
    created_at: number
    porcent_created_at: number
    business_id: string
    paymethod: string
    app_id: string
}

export default class Transaction {
    name: string
    customer_id: string
    business_id: string
    reward_rule_id: string
    user_update_id: string
    status: Status
    source: Source
    merchant_fetching: string
    transaction_points: number
    update_at: Date

    constructor(
        name: string,
        customer_id: string,
        business_id: string,
        reward_rule_id: string,
        user_update_id: string,
        status: Status,
        source: Source,
        merchant_fetching: string,
        transaction_points: number,
        update_at: Date
    ) {
        this.name = name
        this.customer_id = customer_id
        this.business_id = business_id
        this.reward_rule_id = reward_rule_id
        this.user_update_id = user_update_id
        this.status = status
        this.source = source
        this.merchant_fetching = merchant_fetching
        this.transaction_points = transaction_points
        this.update_at = update_at
    }
}