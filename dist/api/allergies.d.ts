import ApiClient from '.';
import Allergy from '../models/Allergy';
export default class ApiAllergies {
    private api;
    constructor(api: ApiClient);
    list(page?: number, limit?: number): any;
    view(id: string): any;
    /**
    * Filter results by any property, through a query.
    * Ex: { foo: 'bar' }
    */
    search(query: object, page?: number, limit?: number, populate?: Array<string>, select?: Array<string>): any;
    create(data: Allergy): any;
    update(id: string, data: Allergy): any;
    remove(id: string): any;
}
