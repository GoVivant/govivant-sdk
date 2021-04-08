import ApiClient from '.';
import DeliveryZone from '../models/DeliveryZone';
export default class ApiDeliveryZones {
    private api;
    constructor(api: ApiClient);
    list(business_id: string, page?: number, limit?: number): any;
    view(id: string): any;
    create(data: DeliveryZone): any;
    update(id: string, data: DeliveryZone): any;
    remove(id: string): any;
}
