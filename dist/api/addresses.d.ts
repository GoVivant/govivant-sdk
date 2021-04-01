import ApiClient from '.';
import Address from '../models/Address';
export default class ApiAddresses {
    private api;
    constructor(api: ApiClient);
    list(customer_id: string, page?: number, limit?: number): any;
    create(data: Address): any;
    update(id: string, data: Address): any;
    remove(id: string): any;
}
