import ApiClient from '.';
import PaymentMethod from '../models/PaymentMethod';
export default class ApiPaymentMethods {
    private api;
    constructor(api: ApiClient);
    list(page?: number, limit?: number): any;
    view(id: string): any;
    /**
    * Filter results by any property, through a query.
    * Ex: { foo: 'bar' }
    */
    search(query: object, page?: number, limit?: number, populate?: Array<string>, select?: Array<string>): any;
    create(data: PaymentMethod): any;
    update(id: string, data: PaymentMethod): any;
    remove(id: string): any;
}
