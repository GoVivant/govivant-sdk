class Location {
    lat: number
    lng: number
}

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

export default class Business {
    name: string
    status: string
    currency: string
    logo: string
    gallery: Object
    enabled: boolean
    email: string
    slug: string
    schedule: Array<Schedule>
    address: string
    address_notes: string
    location: Location
    city_id: string
    ein: string
    minimum: string

    constructor(
        name: string,
        status: string,
        currency: string,
        logo: string,
        gallery: Object,
        enabled: boolean,
        email: string,
        slug: string,
        schedule: Array<Schedule>,
        address: string,
        address_notes: string,
        location: Location,
        city_id: string,
        ein: string,
        minimum: string
    ) {
        this.name = name
        this.status = status
        this.currency = currency
        this.logo = logo
        this.gallery = gallery
        this.enabled = enabled
        this.email = email
        this.slug = slug
        this.schedule = schedule
        this.address = address
        this.address_notes = address_notes
        this.location = location
        this.city_id = city_id
        this.ein = ein
        this.minimum = minimum
    }
}