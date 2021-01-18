import ApiClient from '.';
import User from '../models/User';
export default class ApiUsers {
    private api;
    constructor(api: ApiClient);
    list(page?: number, limit?: number): any;
    view(id: string): any;
    /**
    * Filter results by any property, through a query.
    * Ex: { foo: 'bar' }
    */
    search(query: object, page?: number, limit?: number, populate?: Array<string>, select?: Array<string>): any;
    create(data: User): any;
    update(id: string, data: User): any;
    remove(id: string): any;
}
