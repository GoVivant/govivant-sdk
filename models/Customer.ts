export default class Customer {
    name: string
    enabled: boolean
    email: string
    phone: string
    doc: string
    points: number
    firebase_id: string
    country_id: string
    integration_id: string

    constructor(
        name: string,
        enabled: boolean,
        email: string,
        phone: string,
        doc: string,
        points: number,
        firebase_id: string,
        country_id: string,
        integration_id: string
    ) {
        this.name = name
        this.phone = phone
        this.doc = doc
        this.points = points
        this.enabled = enabled
        this.firebase_id = firebase_id
        this.email = email
        this.country_id = country_id
        this.integration_id = integration_id
    }
}