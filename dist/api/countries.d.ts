import ApiClient from '.';
import Country from '../models/Country';
export default class ApiCountries {
    private api;
    constructor(api: ApiClient);
    list(page?: number, limit?: number): any;
    view(id: string): any;
    /**
    * Filter results by any property, through a query.
    * Ex: { foo: 'bar' }
    */
    search(query: object, page?: number, limit?: number, populate?: Array<string>, select?: Array<string>): any;
    create(data: Country): any;
    update(id: string, data: Country): any;
    remove(id: string): any;
}
