import ApiClient from '.';
import Ingredient from '../models/Ingredient';
export default class ApiIngredients {
    private api;
    constructor(api: ApiClient);
    list(page?: number, limit?: number): any;
    view(id: string): any;
    /**
    * Filter results by any property, through a query.
    * Ex: { foo: 'bar' }
    */
    search(query: object, page?: number, limit?: number, populate?: Array<string>, select?: Array<string>): any;
    create(data: Ingredient): any;
    update(id: string, data: Ingredient): any;
    remove(id: string): any;
}
