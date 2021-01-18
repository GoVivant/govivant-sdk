export default class Invoice {
    stripe: Object
    customer_id: string

    constructor(stripe: Object, customer_id: string) {
        this.stripe = stripe
        this.customer_id = customer_id
    }
}