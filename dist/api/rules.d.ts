import ApiClient from '.';
import Rule from '../models/Rule';
export default class ApiRules {
    private api;
    constructor(api: ApiClient);
    list(page?: number, limit?: number): any;
    view(id: string): any;
    /**
    * Filter results by any property, through a query.
    * Ex: { foo: 'bar' }
    */
    search(query: object, page?: number, limit?: number, populate?: Array<string>, select?: Array<string>): any;
    create(data: Rule): any;
    update(id: string, data: Rule): any;
    remove(id: string): any;
}
