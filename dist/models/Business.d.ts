declare class Location {
    lat: number;
    lng: number;
}
declare class Lapse {
    open: {
        hour: number;
        close: number;
    };
    close: {
        hour: number;
        close: number;
    };
}
declare class Gallery {
    image: Array<object>;
    video: Array<object>;
}
declare class Customer {
    zoop_id: string;
    stripe_id: string;
}
declare class Links {
    delivery_link: string;
    pickup_link: string;
    menu_link: string;
    reservation_link: string;
}
declare class Paymethod {
    price_points_si: string;
    price_prize_si: string;
    price_transaction_si: string;
    paymethod_type: string;
}
declare class Schedule {
    enabled: boolean;
    lapses: Array<Lapse>;
}
export default class Business {
    name: string;
    status: string;
    currency: string;
    logo: string;
    gallery: Gallery;
    enabled: boolean;
    email: string;
    slug: string;
    schedule: Array<Schedule>;
    address: string;
    address_notes: string;
    zipcode: string;
    location: Location;
    customer_id: Customer;
    business_links: Links;
    paymethod: Paymethod;
    city_id: string;
    plan_id: string;
    tags_id: Array<string>;
    ein: string;
    minimum: string;
    place_id: string;
    phone: string;
    types: Array<string>;
    constructor(name: string, status: string, currency: string, logo: string, gallery: Gallery, enabled: boolean, email: string, slug: string, schedule: Array<Schedule>, address: string, address_notes: string, zipcode: string, location: Location, customer_id: Customer, business_links: Links, paymethod: Paymethod, city_id: string, plan_id: string, tags_id: Array<string>, ein: string, minimum: string, place_id: string, phone: string, types: Array<string>);
}
export {};
