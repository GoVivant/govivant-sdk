import ApiClient from '.';
import Customer from '../models/Customer';
export default class ApiCustomers {
    private api;
    constructor(api: ApiClient);
    list(page?: number, limit?: number): any;
    view(id: string): any;
    /**
    * Filter results by any property, through a query.
    * Ex: { foo: 'bar' }
    */
    search(query: object, page?: number, limit?: number, populate?: Array<string>, select?: Array<string>): any;
    create(data: Customer): any;
    update(id: string, data: Customer): any;
    remove(id: string): any;
}
