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

class Gallery {
    image: Array<object>
    video: Array<object>
}

class Customer {
    zoop_id: string
    stripe_id: string
}

class Links {
    delivery_link: string
    pickup_link: string
    menu_link: string
    reservation_link: string
}

class Paymethod {
    price_points_si: string
    price_prize_si: string
    price_transaction_si: string
    paymethod_type: string
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
    gallery: Gallery
    enabled: boolean
    email: string
    slug: string
    schedule: Array<Schedule>
    address: string
    address_notes: string
    zipcode: string
    location: Location
    customer_id: Customer
    business_links: Links
    paymethod: Paymethod
    city_id: string
    plan_id: string
    tags_id: Array<string>
    ein: string
    minimum: string
    place_id: string
    phone: string
    types: Array<string>

    constructor(
        name: string,
        status: string,
        currency: string,
        logo: string,
        gallery: Gallery,
        enabled: boolean,
        email: string,
        slug: string,
        schedule: Array<Schedule>,
        address: string,
        address_notes: string,
        zipcode: string,
        location: Location,
        customer_id: Customer,
        business_links: Links,
        paymethod: Paymethod,
        city_id: string,
        plan_id: string,
        tags_id: Array<string>,
        ein: string,
        minimum: string,
        place_id: string,
        phone: string,
        types: Array<string>
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
        this.zipcode = zipcode
        this.location = location
        this.customer_id = customer_id
        this.business_links = business_links
        this.paymethod = paymethod
        this.city_id = city_id
        this.plan_id = plan_id
        this.tags_id = tags_id
        this.ein = ein
        this.minimum = minimum
        this.place_id = place_id
        this.phone = phone
        this.types = types
    }
}