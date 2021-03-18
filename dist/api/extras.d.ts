import ApiClient from '.';
import Extra from '../models/Extra';
import Option from '../models/Option';
export default class ApiExtras {
    private api;
    constructor(api: ApiClient);
    list(business: string, page?: number, limit?: number): any;
    view(id: string): any;
    /**
    * Filter results by any property, through a query.
    * Ex: { foo: 'bar' }
    */
    search(query: object, page?: number, limit?: number, populate?: Array<string>, select?: Array<string>): any;
    add_option(id: string, data: Option): any;
    create(data: Extra): any;
    update(id: string, data: Extra): any;
    remove(id: string): any;
}
