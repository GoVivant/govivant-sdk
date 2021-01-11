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

class Prize_Rule {
    type: Object
    value: Number
    spent_turns: Number
    start: Date
    end: Date
}

export default class Rule {
    name: string
    app_id: string
    enabled: boolean
    schedule: Array<Schedule>
    businesses_id: Array<string>
    products_id: Array<string>
    currency: string
    type: string
    periods: string
    description: string
    min_spend: number
    govivant_points_fee: number
    reward_rule_invoices: string
    prize_rules: Prize_Rule

    constructor(
        name: string,
        app_id: string,
        enabled: boolean,
        schedule: Array<Schedule>,
        businesses_id: Array<string>,
        products_id: Array<string>,
        currency: string,
        type: string,
        periods: string,
        description: string,
        min_spend: number,
        govivant_points_fee: number,
        reward_rule_invoices: string,
        prize_rules: Prize_Rule
    ) {
        this.name = name
        this.app_id = app_id
        this.enabled = enabled
        this.schedule = schedule
        this.businesses_id = businesses_id
        this.products_id = products_id
        this.currency = currency
        this.type = type
        this.periods = periods
        this.description = description
        this.min_spend = min_spend
        this.govivant_points_fee = govivant_points_fee
        this.reward_rule_invoices = reward_rule_invoices
        this.prize_rules = prize_rules
    }
}