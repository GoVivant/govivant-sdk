import ApiClient from '.';
import Transaction from '../models/Transaction';
export default class ApiTransactions {
    private api;
    constructor(api: ApiClient);
    list(page?: number, limit?: number): any;
    view(id: string): any;
    /**
    * Filter results by any property, through a query.
    * Ex: { foo: 'bar' }
    */
    search(query: object, page?: number, limit?: number, populate?: Array<string>, select?: Array<string>): any;
    create(data: Transaction): any;
    update(id: string, data: Transaction): any;
    remove(id: string): any;
}
