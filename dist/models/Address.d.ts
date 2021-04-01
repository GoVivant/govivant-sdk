declare class Location {
    lat: number;
    lng: number;
}
export default class Address {
    customer_id: string;
    name: string;
    zipcode: number;
    address: string;
    address_notes: string;
    default: boolean;
    location: Location;
    constructor(customer_id: string, name: string, zipcode: number, address: string, address_notes: string, _default: boolean, location: Location);
}
export {};
