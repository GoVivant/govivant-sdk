class Paymethod {
    type: Object
    product_id: string
    price_points_id: string
    price_prize_id: string
    price_transactions_id: string
    paymethod_type: string
}

export default class Plan {
    name: string
    enabled: boolean
    currency: string
    billing_cycle: string
    fixed: boolean
    points_price: number
    prizes_price: number
    transactions_price: number
    paymethod_id: Paymethod
    country_id: string

    constructor(
        name: string,
        enabled: boolean,
        currency: string,
        billing_cycle: string,
        fixed: boolean,
        points_price: number,
        prizes_price: number,
        transactions_price: number,
        paymethod_id: Paymethod,
        country_id: string,
    ) {
        this.name = name
        this.enabled = enabled
        this.currency = currency
        this.billing_cycle = billing_cycle
        this.fixed = fixed
        this.points_price = points_price
        this.prizes_price = prizes_price
        this.transactions_price = transactions_price
        this.paymethod_id = paymethod_id
        this.country_id = country_id
    }
}