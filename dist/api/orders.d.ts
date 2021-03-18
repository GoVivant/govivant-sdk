import ApiClient from '.';
import Order from '../models/Order';
export default class ApiOrders {
    private api;
    constructor(api: ApiClient);
    list(business: string, page?: number, limit?: number): any;
    view(id: string): any;
    /**
    * Filter results by any property, through a query.
    * Ex: { foo: 'bar' }
    */
    search(query: object, page?: number, limit?: number, populate?: Array<string>, select?: Array<string>): any;
    create(data: Order): any;
    update(id: string, data: Order): any;
    remove(id: string): any;
}
