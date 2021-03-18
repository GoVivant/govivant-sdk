import ApiClient from '.';
import FoodCategory from '../models/FoodCategory';
export default class ApiFoodCategories {
    private api;
    constructor(api: ApiClient);
    list(page?: number, limit?: number): any;
    view(id: string): any;
    /**
    * Filter results by any property, through a query.
    * Ex: { foo: 'bar' }
    */
    search(query: object, page?: number, limit?: number, populate?: Array<string>, select?: Array<string>): any;
    create(data: FoodCategory): any;
    update(id: string, data: FoodCategory): any;
    remove(id: string): any;
}
