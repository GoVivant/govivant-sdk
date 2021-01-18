import ApiClient from '.';
import Subproduct from '../models/Subproduct';
export default class ApiSubproducts {
    private api;
    constructor(api: ApiClient);
    list(page?: number, limit?: number): any;
    view(id: string): any;
    /**
    * Filter results by any property, through a query.
    * Ex: { foo: 'bar' }
    */
    search(query: object, page?: number, limit?: number, populate?: Array<string>, select?: Array<string>): any;
    create(data: Subproduct): any;
    update(id: string, data: Subproduct): any;
    remove(id: string): any;
}
