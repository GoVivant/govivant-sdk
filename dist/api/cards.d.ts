import ApiClient from '.';
import Card from '../models/Card';
export default class ApiCards {
    private api;
    constructor(api: ApiClient);
    list(customer_id: string, page?: number, limit?: number): any;
    create(customer_id: string, data: Card): any;
    update(id: string, data: Card): any;
    remove(id: string): any;
}
