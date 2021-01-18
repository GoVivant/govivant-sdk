import ApiClient from '.';
import Category from '../models/Category';
export default class ApiCategories {
    private api;
    constructor(api: ApiClient);
    list(page?: number, limit?: number): any;
    view(id: string): any;
    /**
    * Filter results by any property, through a query.
    * Ex: { foo: 'bar' }
    */
    search(query: object, page?: number, limit?: number, populate?: Array<string>, select?: Array<string>): any;
    create(data: Category): any;
    update(id: string, data: Category): any;
    remove(id: string): any;
}
