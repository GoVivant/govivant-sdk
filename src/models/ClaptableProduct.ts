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

export default class ClaptableProduct {
    name: string
    images: Array<string>
    price: number
    quantity: number
    for_how_many: number
    calories: number
    description: string
    rank: number
    featured: boolean
    ingredients: Array<string>
    schedule: Array<Schedule>
    extras_id: Array<string>
    business_id: string
    category_id: string
    menu_id: Array<string>
    root_id: string
    diets_id: Array<string>
    allergies_id: Array<string>
    food_categories_id: Array<string>
    enabled: boolean

    constructor(
        name: string,
        images: Array<string>,
        price: number,
        quantity: number,
        for_how_many: number,
        calories: number,
        description: string,
        rank: number,
        featured: boolean,
        ingredients: Array<string>,
        schedule: Array<Schedule>,
        extras_id: Array<string>,
        business_id: string,
        category_id: string,
        menu_id: Array<string>,
        root_id: string,
        diets_id: Array<string>,
        allergies_id: Array<string>,
        food_categories_id: Array<string>,
        enabled: boolean
    ) {
        this.name = name
        this.images = images
        this.price = price
        this.quantity = quantity
        this.for_how_many = for_how_many
        this.calories = calories
        this.description = description
        this.rank = rank
        this.featured = featured
        this.ingredients = ingredients
        this.schedule = schedule
        this.extras_id = extras_id
        this.business_id = business_id
        this.category_id = category_id
        this.menu_id = menu_id
        this.root_id = root_id
        this.diets_id = diets_id
        this.allergies_id = allergies_id
        this.food_categories_id = food_categories_id
        this.enabled = enabled
    }
}