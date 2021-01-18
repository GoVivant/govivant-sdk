import ApiClient from '.';
import Invoice from '../models/Invoice';
export default class ApiInvoices {
    private api;
    constructor(api: ApiClient);
    list(page?: number, limit?: number): any;
    view(id: string): any;
    /**
    * Filter results by any property, through a query.
    * Ex: { foo: 'bar' }
    */
    search(query: object, page?: number, limit?: number, populate?: Array<string>, select?: Array<string>): any;
    create(data: Invoice): any;
    update(id: string, data: Invoice): any;
    remove(id: string): any;
}
