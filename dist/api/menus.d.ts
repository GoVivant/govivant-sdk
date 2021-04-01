import ApiClient from '.';
import Menu from '../models/Menu';
export default class ApiMenus {
    private api;
    constructor(api: ApiClient);
    list(business_id: string, page?: number, limit?: number): any;
    view(id: string): any;
    /**
    * Filter results by any property, through a query.
    * Ex: { foo: 'bar' }
    */
    search(query: object, page?: number, limit?: number, populate?: Array<string>, select?: Array<string>): any;
    create(data: Menu): any;
    update(id: string, data: Menu): any;
    remove(id: string): any;
}
