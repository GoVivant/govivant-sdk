import ApiClient from '.';
import Integration from '../models/Integration';
export default class ApiIntegrations {
    private api;
    constructor(api: ApiClient);
    list(page?: number, limit?: number): any;
    view(id: string): any;
    /**
    * Filter results by any property, through a query.
    * Ex: { foo: 'bar' }
    */
    search(query: object, page?: number, limit?: number, populate?: Array<string>, select?: Array<string>): any;
    create(data: Integration): any;
    update(id: string, data: Integration): any;
    remove(id: string): any;
}
