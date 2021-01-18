import ApiClient from '.';
import Point from '../models/Point';
export default class ApiPoints {
    private api;
    constructor(api: ApiClient);
    list(page?: number, limit?: number): any;
    view(id: string): any;
    /**
    * Filter results by any property, through a query.
    * Ex: { foo: 'bar' }
    */
    search(query: object, page?: number, limit?: number, populate?: Array<string>, select?: Array<string>): any;
    create(data: Point): any;
    update(id: string, data: Point): any;
    remove(id: string): any;
}
