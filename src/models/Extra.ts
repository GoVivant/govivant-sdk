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

export default class Extra {
    name: string
    description: string
    ingredients_id: Array<string>
    options_id: Array<string>
    business_id: string
    rank: number
    schedule: Array<Schedule>
    enabled: boolean

    constructor(
        name: string,
        description: string,
        ingredients_id: Array<string>,
        options_id: Array<string>,
        business_id: string,
        rank: number,
        schedule: Array<Schedule>,
        enabled: boolean
    ) {
        this.name = name
        this.description = description
        this.ingredients_id = ingredients_id
        this.options_id = options_id
        this.business_id = business_id
        this.rank = rank
        this.schedule = schedule
        this.enabled = enabled
    }
}