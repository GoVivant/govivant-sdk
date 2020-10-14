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

export default class Product {
    name: string
    description: string
    city: string
    country: string
    max_per_user: string
    total_quantity: string
    secret_url: string
    secret_text: string
    quantity_left: string
    prize_rule_id: string
    category_id: string
    business_id: string
    image: string
    periods: string
    points_value: string
    active: Boolean

    constructor(
        name: string,
        description: string,
        city: string,
        country: string,
        max_per_user: string,
        total_quantity: string,
        secret_url: string,
        secret_text: string,
        quantity_left: string,
        prize_rule_id: string,
        category_id: string,
        business_id: string,
        image: string,
        periods: string,
        points_value: string,
        active: Boolean
    ) {
        this.name = name
        this.city = city
        this.country = country
        this.max_per_user = max_per_user
        this.description = description
        this.total_quantity = total_quantity
        this.secret_url = secret_url
        this.secret_text = secret_text
        this.quantity_left = quantity_left
        this.prize_rule_id = prize_rule_id
        this.category_id = category_id
        this.business_id = business_id
        this.image = image
        this.periods = periods
        this.points_value = points_value
        this.active = active
    }
}