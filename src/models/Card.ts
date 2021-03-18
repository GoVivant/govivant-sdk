export default class Card {
    holder_name: string
    last4_digits: string
    card_brand: string
    card_id: string
    customer_id: string
    default: boolean

    constructor(
        holder_name: string,
        last4_digits: string,
        card_brand: string,
        card_id: string,
        customer_id: string
    ) {
        this.holder_name = holder_name
        this.last4_digits = last4_digits
        this.card_brand = card_brand
        this.card_id = card_id
        this.customer_id = customer_id
    }
}