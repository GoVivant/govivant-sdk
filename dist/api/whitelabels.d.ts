import ApiClient from '.';
import Whitelabel from '../models/Whitelabel';
export default class ApiWhitelabels {
    private api;
    constructor(api: ApiClient);
    list(page?: number, limit?: number): any;
    view(id: string): any;
    by_bundle_id(bundle_id: string): any;
    /**
    * Filter results by any property, through a query.
    * Ex: { foo: 'bar' }
    */
    search(query: object, page?: number, limit?: number, populate?: Array<string>, select?: Array<string>): any;
    create(data: Whitelabel): any;
    update(id: string, data: Whitelabel): any;
    remove(id: string): any;
}
