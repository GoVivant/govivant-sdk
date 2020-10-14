export default class Point {
    transaction_date: Date
    value: number
    previous_points: number
    business_id: string
    transaction_id: string
    rule_id: string
    user_id: string
    redeem_id: string
    comments: string
    type: string

    constructor(
        transaction_date: Date,
        value: number,
        previous_points: number,
        business_id: string,
        transaction_id: string,
        rule_id: string,
        user_id: string,
        redeem_id: string,
        comments: string,
        type: string
    ) {
        this.transaction_date = transaction_date
        this.value = value
        this.previous_points = previous_points
        this.business_id = business_id
        this.transaction_id = transaction_id
        this.rule_id = rule_id
        this.user_id = user_id
        this.redeem_id = redeem_id
        this.comments = comments
        this.type = type
    }
}