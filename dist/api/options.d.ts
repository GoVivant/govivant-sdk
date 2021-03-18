import ApiClient from '.';
import Option from '../models/Option';
import Suboption from '../models/Suboption';
export default class ApiOptions {
    private api;
    constructor(api: ApiClient);
    list(business: string, page?: number, limit?: number): any;
    view(id: string): any;
    /**
    * Filter results by any property, through a query.
    * Ex: { foo: 'bar' }
    */
    search(query: object, page?: number, limit?: number, populate?: Array<string>, select?: Array<string>): any;
    add_suboption(id: string, data: Suboption): any;
    create(data: Option): any;
    update(id: string, data: Option): any;
    remove(id: string): any;
}
