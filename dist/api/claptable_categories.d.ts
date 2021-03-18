import ApiClient from '.';
import ClaptableCategory from '../models/ClaptableCategory';
export default class ApiClaptableCategories {
    private api;
    constructor(api: ApiClient);
    list(business: string, page?: number, limit?: number): any;
    view(id: string): any;
    /**
    * Filter results by any property, through a query.
    * Ex: { foo: 'bar' }
    */
    search(query: object, page?: number, limit?: number, populate?: Array<string>, select?: Array<string>): any;
    create(data: ClaptableCategory): any;
    update(id: string, data: ClaptableCategory): any;
    remove(id: string): any;
}
