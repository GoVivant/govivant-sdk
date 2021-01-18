import ApiClient from '.';
import Tag from '../models/Tag';
export default class ApiTags {
    private api;
    constructor(api: ApiClient);
    list(page?: number, limit?: number): any;
    view(id: string): any;
    /**
    * Filter results by any property, through a query.
    * Ex: { foo: 'bar' }
    */
    search(query: object, page?: number, limit?: number, populate?: Array<string>, select?: Array<string>): any;
    create(data: Tag): any;
    update(id: string, data: Tag): any;
    remove(id: string): any;
}
