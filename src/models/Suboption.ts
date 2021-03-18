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

class IntegrationItem {
    sku: number
}

class Integrations {
    linx: IntegrationItem
    ifood: IntegrationItem
}

export default class Suboption {
    name: string
    description: string
    extra_option_id: string
    half_price: string
    image: string
    price: number
    rank: number
    calories: number
    integrations: Integrations
    schedule: Array<Schedule>
    enabled: boolean

    constructor(
        name: string,
        description: string,
        extra_option_id: string,
        half_price: string,
        image: string,
        price: number,
        rank: number,
        calories: number,
        integrations: Integrations,
        schedule: Array<Schedule>,
        enabled: boolean
    ) {
        this.name = name
        this.description = description
        this.extra_option_id = extra_option_id
        this.half_price = half_price
        this.image = image
        this.price = price
        this.rank = rank
        this.calories = calories
        this.integrations = integrations
        this.schedule = schedule
        this.enabled = enabled
    }
}