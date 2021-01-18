import ApiClient from '.';
import Redeem from '../models/Redeem';
export default class ApiRedeems {
    private api;
    constructor(api: ApiClient);
    list(page?: number, limit?: number): any;
    view(id: string): any;
    /**
    * Filter results by any property, through a query.
    * Ex: { foo: 'bar' }
    */
    search(query: object, page?: number, limit?: number, populate?: Array<string>, select?: Array<string>): any;
    create(data: Redeem): any;
    update(id: string, data: Redeem): any;
    remove(id: string): any;
}
