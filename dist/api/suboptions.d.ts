import ApiClient from '.';
import Suboption from '../models/Suboption';
export default class ApiSuboptions {
    private api;
    constructor(api: ApiClient);
    list(business: string, page?: number, limit?: number): any;
    view(id: string): any;
    /**
    * Filter results by any property, through a query.
    * Ex: { foo: 'bar' }
    */
    search(query: object, page?: number, limit?: number, populate?: Array<string>, select?: Array<string>): any;
    create(data: Suboption): any;
    update(id: string, data: Suboption): any;
    remove(id: string): any;
}
