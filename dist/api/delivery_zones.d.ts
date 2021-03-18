import ApiClient from '.';
import DeliveryZone from '../models/DeliveryZone';
export default class ApiDeliveryZones {
    private api;
    constructor(api: ApiClient);
    list(page?: number, limit?: number): any;
    view(id: string): any;
    /**
    * Filter results by any property, through a query.
    * Ex: { foo: 'bar' }
    */
    search(query: object, page?: number, limit?: number, populate?: Array<string>, select?: Array<string>): any;
    create(data: DeliveryZone): any;
    update(id: string, data: DeliveryZone): any;
    remove(id: string): any;
}
