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

export default class DeliveryZone {
    business_id: string
    type: Number
    name: string
    address: Number
    data: Object
    price: Number
    minimum: Number
    schedule: Array<Schedule>
    enabled: boolean

    constructor(
        business_id: string,
        type: Number,
        name: string,
        address: Number,
        data: Object,
        price: Number,
        minimum: Number,
        schedule: Array<Schedule>,
        enabled: boolean
    ) {
        this.business_id = business_id
        this.type = type
        this.name = name
        this.address = address
        this.data = data
        this.price = price
        this.minimum = minimum
        this.schedule = schedule
        this.enabled = enabled
    }
}