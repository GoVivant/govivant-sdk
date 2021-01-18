import ApiClient from '.';
import Store from '../models/Store';
export default class ApiStores {
    private api;
    constructor(api: ApiClient);
    list(page?: number, limit?: number): any;
    view(id: string): any;
    /**
    * Filter results by any property, through a query.
    * Ex: { foo: 'bar' }
    */
    search(query: object, page?: number, limit?: number, populate?: Array<string>, select?: Array<string>): any;
    create(data: Store): any;
    update(id: string, data: Store): any;
    remove(id: string): any;
}
