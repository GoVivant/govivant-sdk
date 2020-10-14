class Location {
    lat: number
    lng: number
}

class Lapse {
    open: {
        hour: number
        close: number
    }
    close: {
        hour: number
        close: number
    }
}

class Schedule {
    enabled: boolean
    lapses: Array<Lapse>
}

export default class Transaction {
    name: string
    customer_id: string
    business_id: string
    reward_rule_id: string
    status: Object
    source: Object
    merchant_fetching: string
    transaction_points: number

    constructor(
        name: string,
        customer_id: string,
        business_id: string,
        reward_rule_id: string,
        status: Object,
        source: Object,
        merchant_fetching: string,
        transaction_points: number
    ) {
        this.name = name
        this.customer_id = customer_id
        this.business_id = business_id
        this.reward_rule_id = reward_rule_id
        this.status = status
        this.status = status
        this.source = source
        this.merchant_fetching = merchant_fetching
        this.transaction_points = transaction_points
    }
}