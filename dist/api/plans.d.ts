import ApiClient from '.';
import Plan from '../models/Plan';
export default class ApiPlans {
    private api;
    constructor(api: ApiClient);
    list(page?: number, limit?: number): any;
    view(id: string): any;
    /**
    * Filter results by any property, through a query.
    * Ex: { foo: 'bar' }
    */
    search(query: object, page?: number, limit?: number, populate?: Array<string>, select?: Array<string>): any;
    create(data: Plan): any;
    update(id: string, data: Plan): any;
    remove(id: string): any;
}
