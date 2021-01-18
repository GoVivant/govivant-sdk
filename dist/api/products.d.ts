import ApiClient from '.';
import Product from '../models/Product';
export default class ApiProducts {
    private api;
    constructor(api: ApiClient);
    list(page?: number, limit?: number): any;
    view(id: string): any;
    /**
    * Filter results by any property, through a query.
    * Ex: { foo: 'bar' }
    */
    search(query: object, page?: number, limit?: number, populate?: Array<string>, select?: Array<string>): any;
    create(data: Product): any;
    update(id: string, data: Product): any;
    remove(id: string): any;
}
