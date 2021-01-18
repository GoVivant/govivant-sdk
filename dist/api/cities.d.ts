import ApiClient from '.';
import City from '../models/City';
export default class ApiCities {
    private api;
    constructor(api: ApiClient);
    list(page?: number, limit?: number): any;
    view(id: string): any;
    /**
    * Filter results by any property, through a query.
    * Ex: { foo: 'bar' }
    */
    search(query: object, page?: number, limit?: number, populate?: Array<string>, select?: Array<string>): any;
    create(data: City): any;
    update(id: string, data: City): any;
    remove(id: string): any;
}
