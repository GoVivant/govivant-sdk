import ApiClient from '.';
import Diet from '../models/Diet';
export default class ApiDiets {
    private api;
    constructor(api: ApiClient);
    list(page?: number, limit?: number): any;
    view(id: string): any;
    /**
    * Filter results by any property, through a query.
    * Ex: { foo: 'bar' }
    */
    search(query: object, page?: number, limit?: number, populate?: Array<string>, select?: Array<string>): any;
    create(data: Diet): any;
    update(id: string, data: Diet): any;
    remove(id: string): any;
}
