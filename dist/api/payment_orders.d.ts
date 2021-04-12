import ApiClient from '.';
import PaymentOrder from '../models/PaymentOrder';
export default class ApiPaymentOrders {
    private api;
    constructor(api: ApiClient);
    list(page?: number, limit?: number): any;
    view(id: string): any;
    create(data: PaymentOrder): any;
    create_zoop(data: PaymentOrder): any;
    create_stripe(data: PaymentOrder): any;
    update(id: string, data: PaymentOrder): any;
    remove(id: string): any;
}
