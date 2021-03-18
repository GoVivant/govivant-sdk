import ApiClient from '.';
import Offer from '../models/Offer';
export default class ApiOffers {
    private api;
    constructor(api: ApiClient);
    list(page?: number, limit?: number): any;
    view(id: string): any;
    /**
    * Filter results by any property, through a query.
    * Ex: { foo: 'bar' }
    */
    search(query: object, page?: number, limit?: number, populate?: Array<string>, select?: Array<string>): any;
    create(data: Offer): any;
    update(id: string, data: Offer): any;
    remove(id: string): any;
}
