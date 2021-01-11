export default class Product {
    name: string
    description: string
    type: string
    city: string
    country: string
    max_per_user: string
    total_quantity: string
    secret_url: string
    secret_text: string
    brandKey: string
    quantity_left: string
    rule_id: string
    country_id: string
    category_id: string
    business_id: string
    subproducts_id: Array<string>
    apps_id: Array<string>
    image: string
    image_gift_cards: string
    terms: string
    periods: string
    points_value: string
    enabled: Boolean

    constructor(
        name: string,
        description: string,
        type: string,
        city: string,
        country: string,
        max_per_user: string,
        total_quantity: string,
        secret_url: string,
        secret_text: string,
        brandKey: string,
        quantity_left: string,
        rule_id: string,
        country_id: string,
        category_id: string,
        business_id: string,
        subproducts_id: Array<string>,
        apps_id: Array<string>,
        image: string,
        image_gift_cards: string,
        terms: string,
        periods: string,
        points_value: string,
        enabled: Boolean
    ) {
        this.name = name
        this.city = city
        this.country = country
        this.max_per_user = max_per_user
        this.description = description
        this.type = type
        this.total_quantity = total_quantity
        this.secret_url = secret_url
        this.secret_text = secret_text
        this.brandKey = brandKey
        this.quantity_left = quantity_left
        this.rule_id = rule_id
        this.country_id = country_id
        this.category_id = category_id
        this.business_id = business_id
        this.subproducts_id = subproducts_id
        this.apps_id = apps_id
        this.image = image
        this.image_gift_cards = image_gift_cards
        this.terms = terms
        this.periods = periods
        this.points_value = points_value
        this.enabled = enabled
    }
}