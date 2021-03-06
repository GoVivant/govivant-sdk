import ApiClient from '.';
import Log from '../models/Log';
export default class ApiLogs {
    private api;
    constructor(api: ApiClient);
    list(page?: number, limit?: number): any;
    view(id: string): any;
    /**
    * Filter results by any property, through a query.
    * Ex: { foo: 'bar' }
    */
    search(query: object, page?: number, limit?: number, populate?: Array<string>, select?: Array<string>): any;
    create(data: Log): any;
    update(id: string, data: Log): any;
    remove(id: string): any;
}
