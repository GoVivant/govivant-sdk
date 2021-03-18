export default class Ingredient {
    name: string
    product_id: string
    business_id: string
    image: string
    rank: number

    constructor(
        name: string,
        product_id: string,
        business_id: string,
        image: string,
        rank: number
    ) {
        this.name = name
        this.product_id = product_id
        this.business_id = business_id
        this.image = image
        this.rank = rank
    }
}