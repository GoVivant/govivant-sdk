class Location {
    lat: number
    lng: number
}

export default class Address {
    customer_id: string
    name: string
    zipcode: number
    address: string
    address_notes: string
    default: boolean
    location: Location

    constructor(
        customer_id: string,
        name: string,
        zipcode: number,
        address: string,
        address_notes: string,
        _default: boolean,
        location: Location
    ) {
        this.customer_id = customer_id
        this.name = name
        this.zipcode = zipcode
        this.address = address
        this.address_notes = address_notes
        this.default = _default
        this.location = location
    }
}