import ApiClient from '.';
import PaymentOrder from '../models/PaymentOrder';
export default class ApiPaymentOrders {
    private api;
    constructor(api: ApiClient);
    list(page?: number, limit?: number): any;
    view(id: string): any;
    /**
    * Filter results by any property, through a query.
    * Ex: { foo: 'bar' }
    */
    search(query: object, page?: number, limit?: number, populate?: Array<string>, select?: Array<string>): any;
    create(data: PaymentOrder): any;
    update(id: string, data: PaymentOrder): any;
    remove(id: string): any;
}
