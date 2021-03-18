import ApiClient from '.';
import Card from '../models/Card';
export default class ApiCards {
    private api;
    constructor(api: ApiClient);
    list(page?: number, limit?: number): any;
    view(id: string): any;
    /**
    * Filter results by any property, through a query.
    * Ex: { foo: 'bar' }
    */
    search(query: object, page?: number, limit?: number, populate?: Array<string>, select?: Array<string>): any;
    create(data: Card): any;
    update(id: string, data: Card): any;
    remove(id: string): any;
}
