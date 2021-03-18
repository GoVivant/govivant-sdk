import ApiClient from '.';
import ClaptableProduct from '../models/ClaptableProduct';
export default class ApiClaptableProducts {
    private api;
    constructor(api: ApiClient);
    list(business: string, page?: number, limit?: number): any;
    view(id: string): any;
    /**
    * Filter results by any property, through a query.
    * Ex: { foo: 'bar' }
    */
    search(query: object, page?: number, limit?: number, populate?: Array<string>, select?: Array<string>): any;
    create(data: ClaptableProduct): any;
    update(id: string, data: ClaptableProduct): any;
    remove(id: string): any;
}
