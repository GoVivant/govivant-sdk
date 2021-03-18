class Eatin {
    booking: boolean
    table: boolean
}

export default class Menu {
    name: string
    comment: string
    delivery: boolean
    pickup: boolean
    eatin: Eatin
    products_id: Array<String>
    business_id: string
    enabled: boolean

    constructor(
        name: string,
        comment: string,
        delivery: boolean,
        pickup: boolean,
        eatin: Eatin,
        products_id: Array<String>,
        business_id: string,
        enabled: boolean
    ) {
        this.name = name
        this.comment = comment
        this.delivery = delivery
        this.pickup = pickup
        this.eatin = eatin
        this.products_id = products_id
        this.business_id = business_id
        this.enabled = enabled
    }
}