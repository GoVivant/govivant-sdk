export default class Offer {
    name: string
    type: string
    minimum: Number
    rate_type: Number
    rate: Number
    start: Date
    end: Date
    limit: number
    coupon: string
    enabled: boolean

    constructor(
        name: string,
        type: string,
        minimum: Number,
        rate_type: Number,
        rate: Number,
        start: Date,
        end: Date,
        limit: number,
        coupon: string,
        enabled: boolean
    ) {
        this.name = name
        this.type = type
        this.minimum = minimum
        this.rate_type = rate_type
        this.rate = rate
        this.start = start
        this.end = end
        this.limit = limit
        this.coupon = coupon
        this.enabled = enabled
    }
}