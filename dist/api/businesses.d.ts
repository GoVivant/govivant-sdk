import ApiClient from '.';
import Business from '../models/Business';
export default class ApiBusinesses {
    private api;
    constructor(api: ApiClient);
    list(page?: number, limit?: number): any;
    view(id: string): any;
    /**
    * Filter results by any property, through a query.
    * Ex: { foo: 'bar' }
    */
    search(query: object, page?: number, limit?: number, populate?: Array<string>, select?: Array<string>): any;
    by_app(whitelabelId: string, query: object, page?: number, limit?: number, populate?: Array<string>, select?: Array<string>): any;
    create(data: Business): any;
    update(id: string, data: Business): any;
    remove(id: string): any;
}
